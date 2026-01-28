import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "resend";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactRequest {
  name: string;
  company: string;
  email: string;
  message: string;
  phone?: string;
  countryCode?: string;
  // Honeypot field - should be empty
  website?: string;
}

// Simple in-memory rate limiting (resets on function cold start)
const submissions = new Map<string, number[]>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_SUBMISSIONS_PER_WINDOW = 3;

function isRateLimited(email: string): boolean {
  const now = Date.now();
  const emailLower = email.toLowerCase();
  
  // Clean up old entries
  const existing = submissions.get(emailLower) || [];
  const recent = existing.filter(time => now - time < RATE_LIMIT_WINDOW_MS);
  
  if (recent.length >= MAX_SUBMISSIONS_PER_WINDOW) {
    return true;
  }
  
  recent.push(now);
  submissions.set(emailLower, recent);
  return false;
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 255;
}

function sanitize(str: string): string {
  return str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: ContactRequest = await req.json();
    const { name, company, email, message, phone, countryCode, website } = body;

    // Honeypot check - if filled, silently succeed (bot trap)
    if (website && website.trim() !== "") {
      console.log("Honeypot triggered, rejecting submission silently");
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate required fields
    if (!name || !company || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate name length
    if (name.trim().length < 2 || name.length > 100) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid name" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate company length
    if (company.trim().length < 2 || company.length > 200) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid company name" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate email
    if (!validateEmail(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate message length (minimum 10 characters)
    if (message.trim().length < 10 || message.length > 5000) {
      return new Response(
        JSON.stringify({ success: false, error: "Message must be between 10 and 5000 characters" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Rate limiting check
    if (isRateLimited(email)) {
      return new Response(
        JSON.stringify({ success: false, error: "Too many requests. Please try again later." }),
        { status: 429, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ success: false, error: "Service temporarily unavailable" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    // Format phone number if provided
    const formattedPhone = phone ? `${countryCode || ""} ${phone}`.trim() : "Not provided";

    // Sanitize inputs for HTML
    const safeName = sanitize(name.trim());
    const safeCompany = sanitize(company.trim());
    const safeEmail = sanitize(email.trim());
    const safeMessage = sanitize(message.trim()).replace(/\n/g, "<br>");
    const safePhone = sanitize(formattedPhone);

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f8f9fa;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
    <tr>
      <td style="padding: 40px 30px; background-color: #1a1f2e;">
        <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">New Consultation Request</h1>
        <p style="margin: 8px 0 0 0; color: #94a3b8; font-size: 14px;">Received via skogsrav.com contact form</p>
      </td>
    </tr>
    <tr>
      <td style="padding: 30px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Full Name</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">${safeName}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Company / Organisation</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px; font-weight: 500;">${safeCompany}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email Address</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px;">
                <a href="mailto:${safeEmail}" style="color: #d97706; text-decoration: none;">${safeEmail}</a>
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
              <p style="margin: 0 0 4px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone Number</p>
              <p style="margin: 0; color: #1f2937; font-size: 16px;">${safePhone}</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 16px 0;">
              <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
              <div style="padding: 16px; background-color: #f9fafb; border-radius: 8px; border-left: 3px solid #d97706;">
                <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6;">${safeMessage}</p>
              </div>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding: 20px 30px; background-color: #f9fafb; border-top: 1px solid #e5e7eb;">
        <p style="margin: 0; color: #9ca3af; font-size: 12px; text-align: center;">
          Sent from skogsrav.com contact form
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
    `.trim();

    const emailResponse = await resend.emails.send({
      from: "Skogsräv Contact <contact@skogsrav.com>",
      to: ["hello@skogsrav.com"],
      reply_to: email.trim(),
      subject: "New consultation request – Skogsrav",
      html: emailHtml,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in send-contact-email function:", error);
    // Fail silently without exposing server details
    return new Response(
      JSON.stringify({ success: false, error: "Unable to send message. Please try again." }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
