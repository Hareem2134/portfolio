// src/app/api/send-email/route.ts
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
    return NextResponse.json({ error: 'Server configuration error.' }, { status: 500 });
  }

  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: `My Portfolio Contact <${fromEmail}>`, // e.g., 'Acme <onboarding@resend.dev>' or 'Your Name <noreply@yourverifieddomain.com>'
      to: [toEmail],
      subject: `New Contact Form Message from ${name}`,
      replyTo: email, // Set the sender's email as replyTo for easy responding
      html: `
        <div>
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
      // For plain text version (good for accessibility and some email clients)
      // text: `New Contact Form Submission:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email.', details: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully!', data }, { status: 200 });

  } catch (err: any) {
    console.error('API Route Error:', err);
    return NextResponse.json({ error: 'Internal Server Error.', details: err.message }, { status: 500 });
  }
}