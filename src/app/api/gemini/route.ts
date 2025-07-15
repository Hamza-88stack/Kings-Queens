import { GoogleGenerativeAI } from "@google/generative-ai";
import { initialMessage } from "../../../../lib/data";

export const runtime = "edge";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY || "");

const generateId = () => Math.random().toString(36).slice(2, 15);

interface Message {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
}

// Simple validation function without Zod
const validateMessage = (message: unknown): message is Message => {
  return (
    typeof message === 'object' &&
    message !== null &&
    typeof (message as Record<string, unknown>).content === 'string' &&
    ((message as Record<string, unknown>).content as string).trim().length > 0 &&
    ((message as Record<string, unknown>).role === 'user' || 
     (message as Record<string, unknown>).role === 'assistant' || 
     (message as Record<string, unknown>).role === 'system')
  );
};

const validateMessages = (messages: unknown[]): Message[] => {
  if (!Array.isArray(messages)) {
    throw new Error('Messages must be an array');
  }

  const validMessages = messages.filter(validateMessage);
  
  if (validMessages.length === 0) {
    throw new Error('No valid messages provided');
  }

  return validMessages;
};

const buildGoogleGenAIPrompt = (messages: Message[]): Message[] => [
  {
    id: generateId(),
    role: "user",
    content: initialMessage.content,
  },
  ...messages.map((message) => ({
    id: message.id || generateId(),
    role: message.role,
    content: message.content,
  })),
];

// Convert messages to Google's format
const convertToGoogleFormat = (messages: Message[]) => {
  return messages
    .filter(msg => msg.role !== 'system') // Google AI doesn't use system messages the same way
    .map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation without Zod
    if (!body || typeof body !== 'object') {
      return new Response(
        JSON.stringify({ error: 'Invalid request body' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { messages } = body;
    
    // Validate messages
    const validatedMessages = validateMessages(messages);
    const allMessages = buildGoogleGenAIPrompt(validatedMessages);
    
    // Convert to Google's format
    const googleMessages = convertToGoogleFormat(allMessages);
    
    // Get the model
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    // Create chat session
    const chat = model.startChat({
      history: googleMessages.slice(0, -1), // All but the last message
      generationConfig: {
        temperature: 0.7,
      },
    });
    
    // Get the last message (current user input)
    const lastMessage = googleMessages[googleMessages.length - 1];
    
    // Generate streaming response
    const result = await chat.sendMessageStream(lastMessage.parts[0].text);
    
    // Create a ReadableStream for the response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            
            // Format the response to match AI SDK's streaming format
            const formattedChunk = `0:${JSON.stringify({
              type: 'textDelta',
              textDelta: text
            })}\n`;
            
            controller.enqueue(encoder.encode(formattedChunk));
          }
          
          // Send final chunk
          const finalChunk = `0:${JSON.stringify({
            type: 'finish',
            finishReason: 'stop'
          })}\n`;
          
          controller.enqueue(encoder.encode(finalChunk));
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      },
    });
    
    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Vercel-AI-Data-Stream': 'v1',
      },
    });
    
  } catch (error) {
    console.error('API Error:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Internal server error';
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}