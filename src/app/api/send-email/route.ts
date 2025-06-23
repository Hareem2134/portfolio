import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key from environment variables
const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.NEXT_PUBLIC_CONTACT_FORM_TO_EMAIL;
const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

if (!resendApiKey) {
  console.error("Resend API key is missing. Set RESEND_API_KEY environment variable.");
}
if (!toEmail) {
  console.error("Recipient email is missing. Set NEXT_PUBLIC_CONTACT_FORM_TO_EMAIL environment variable.");
}
if (!fromEmail) {
  console.error("Sender email is missing. Set CONTACT_FORM_FROM_EMAIL environment variable.");
}

const resend = new Resend(resendApiKey);

export async function POST(req: NextRequest) {
  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ error: 'Server configuration error. Please check environment variables.' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    // Validate email format (simple regex)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `My Portfolio Contact <${fromEmail}>`, 
      to: [toEmail],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email, 
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; border-left: 3px solid #eee; padding-left: 10px;">${message}</p>
          <hr>
          <p style="font-size: 0.9em; color: #777;">This message was sent from your portfolio contact form.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.', details: error.message || 'Unknown Resend error' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!', data }, { status: 200 });

  } catch (err) { // Corrected catch block
    console.error('API Route Error:', err);
    const errorMessage = err instanceof Error ? err.message : 'An unknown internal error occurred';
    return NextResponse.json({ error: 'Internal Server Error.', details: errorMessage }, { status: 500 });
  }
}