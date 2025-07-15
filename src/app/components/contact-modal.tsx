"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useChat } from "@ai-sdk/react";

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  // Use the AI chat hook instead of local state
  const { messages, input, handleInputChange, handleSubmit, isLoading, stop, reload, error } = useChat({ 
    api: "/api/gemini",
    initialMessages: [
      {
        id: "initial-message",
        role: "assistant",
        content: "Welcome. I'm your professional assistant at Kings & Queens. How may I assist you today?"
      }
    ] 
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Dispatch an event whenever isOpen changes
    document.dispatchEvent(new CustomEvent("contactModalStateChange", { detail: { isOpen } }));
  }, [isOpen]);

  useEffect(() => {
    const handleToggle = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    document.addEventListener("toggleContactModal", handleToggle);
    return () => {
      document.removeEventListener("toggleContactModal", handleToggle);
    };
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:justify-end justify-center pointer-events-none md:pr-2 pr-0 rtl:p-0">
      <div className="bg-[#141414] shadow-2xl border border-[#333333] w-full md:max-w-sm h-[70vh] max-h-[550px] flex flex-col overflow-hidden pointer-events-auto mb-16 md:mb-20 mb-0 md:mr-0 mr-0 rtl:ml-0 rtl:mr-6 md:rtl:mr-6 md:rounded-lg rounded-t-lg backdrop-blur-sm">
        {/* Fixed Header */}
        <div className="flex items-center justify-between p-4 min-h-20 border-b border-[#333333] flex-shrink-0 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] rounded-t-lg">
          <div className="flex items-center space-x-3">
            {/* <div className="w-2 h-2 bg-gradient-to-br from-[#C6AE64] to-[#9C7238] rounded-full"></div> */}
            <h3 className="text-white font-semibold text-lg">Professional Support</h3>
          </div>
          <button 
            onClick={handleClose} 
            className="text-[#888888] hover:text-white p-2 rounded-md hover:bg-[#1f1f1f] transition-all duration-200 hover:scale-105"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Scrollable Message Area */}
        <div className="overflow-y-auto flex-grow p-4 space-y-4 bg-[#0f0f0f] custom-scrollbar">
          {messages.length === 0 && (
            <div className="w-full mt-32 text-[#666666] items-center justify-center flex gap-3">
              <div className="text-center">
                <div className="w-8 h-8 bg-gradient-to-br from-[#C6AE64] to-[#9C7238] rounded-full mx-auto mb-2 opacity-70"></div>
                <p className="text-sm font-medium">Awaiting your inquiry...</p>
              </div>
            </div>
          )}
          
          {messages.map((message, index) => (
            <div key={message.id || index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-[75%] p-4 rounded-2xl shadow-lg backdrop-blur-sm transition-all duration-200 hover:shadow-xl ${
                message.role === "user" 
                  ? "bg-gradient-to-br from-[#C6AE64] to-[#9C7238] text-black rounded-br-md border border-[#B8A05A]" 
                  : "bg-[#1a1a1a] text-white rounded-bl-md border border-[#333333]"
              }`}>
                <div className="text-sm leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      code({ node, inline, className, children, ...props }) {
                        return inline ? (
                          <code className={`px-2 py-1 rounded text-xs font-mono ${
                            message.role === "user" 
                              ? "bg-black/20 text-black" 
                              : "bg-[#2a2a2a] text-[#C6AE64]"
                          }`}>
                            {children}
                          </code>
                        ) : (
                          <pre className={`p-3 rounded-lg mt-2 overflow-x-auto ${
                            message.role === "user" 
                              ? "bg-black/20" 
                              : "bg-[#2a2a2a]"
                          }`}>
                            <code className={`text-xs font-mono ${
                              message.role === "user" ? "text-black" : "text-[#C6AE64]"
                            }`}>
                              {children}
                            </code>
                          </pre>
                        );
                      },
                      ul: ({ children }) => (
                        <ul className="list-disc pl-5 space-y-1 mt-2 marker:text-current">
                          {children}
                        </ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-5 space-y-1 mt-2 marker:text-current">
                          {children}
                        </ol>
                      ),
                      p: ({ children }) => (
                        <p className="mb-2 last:mb-0 leading-relaxed">{children}</p>
                      ),
                      strong: ({ children }) => (
                        <strong className={`font-semibold ${
                          message.role === "user" ? "text-black" : "text-[#C6AE64]"
                        }`}>{children}</strong>
                      ),
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#1a1a1a] text-white rounded-2xl rounded-bl-md border border-[#333333] p-4 shadow-lg backdrop-blur-sm">
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-[#C6AE64] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#C6AE64] rounded-full animate-pulse delay-100"></div>
                    <div className="w-2 h-2 bg-[#C6AE64] rounded-full animate-pulse delay-200"></div>
                  </div>
                  <span className="text-[#888888]">Processing your request...</span>
                </div>
              </div>
            </div>
          )}

          {/* Error handling */}
          {error && (
            <div className="flex justify-center">
              <div className="bg-red-900/30 border border-red-700/50 text-red-300 rounded-lg p-3 text-sm backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span>Connection error occurred.</span>
                  <button
                    className="underline hover:no-underline text-[#C6AE64] hover:text-[#B8A05A] transition-colors"
                    type="button"
                    onClick={() => reload()}
                  >
                    Retry
                  </button>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Fixed Footer (Input Area) */}
        <div className="p-4 border-t border-[#333333] flex-shrink-0 bg-gradient-to-r from-[#1a1a1a] to-[#0f0f0f] rounded-b-lg">
          <form onSubmit={handleSubmit} className="flex items-center space-x-3">
            <input 
              type="text" 
              value={input} 
              onChange={handleInputChange}
              placeholder="Enter your message here..." 
              className="flex-grow bg-[#2a2a2a] border border-[#444444] rounded-lg py-3 px-4 focus:ring-1 focus:ring-[#C6AE64] focus:border-[#C6AE64] outline-none text-sm text-white placeholder-[#666666] transition-all duration-200 hover:border-[#555555]"
              disabled={isLoading}
            />
            <button 
              type="submit"
              disabled={!input.trim() || isLoading} 
              className="bg-gradient-to-br from-[#C6AE64] to-[#9C7238] text-white p-3 rounded-lg hover:from-[#B8A05A] hover:to-[#8B6530] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105 hover:shadow-lg font-medium"
            >
              {isLoading ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <Send className="h-5 w-5" />
              )}
              <span className="sr-only">Send</span>
            </button>
          </form>
        </div>
      </div>
      
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1a1a1a;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #C6AE64;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #B8A05A;
        }
      `}</style>
    </div>
  );
}