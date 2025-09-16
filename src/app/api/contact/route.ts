import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();
    const { firstName, lastName, email, phoneNumber, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'kingsandqueens.dcl@gmail.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: #141414; color: white; padding: 30px; border-radius: 10px;">
            <h2 style="color: #C6AE64; margin-bottom: 20px;">New Contact Form Submission</h2>
            
            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h3 style="color: #C6AE64; margin-top: 0;">Customer Information</h3>
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #C6AE64;">${email}</a></p>
              ${phoneNumber ? `<p><strong>Phone:</strong> <a href="tel:${phoneNumber}" style="color: #C6AE64;">${phoneNumber}</a></p>` : ''}
            </div>
            
            <div style="background-color: #1a1a1a; padding: 20px; border-radius: 8px;">
              <h3 style="color: #C6AE64; margin-top: 0;">Message</h3>
              <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background-color: #2a2a2a; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-size: 14px; color: #888;">
                This message was sent from the Kings & Queens Dry Cleaning website contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      // Also send a plain text version
      text: `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
${phoneNumber ? `Phone: ${phoneNumber}` : ''}

Message:
${message}

---
This message was sent from the Kings & Queens Dry Cleaning website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Email sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}
