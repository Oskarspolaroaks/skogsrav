import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  countryCode: string;
  message: string;
  website?: string; // Honeypot field
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ success: false, error: "Service temporarily unavailable" }),
        { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const body: ContactFormData = await req.json();
    
    // Honeypot check - if filled, it's likely spam
    if (body.website && body.website.trim() !== "") {
      console.log("Honeypot triggered, ignoring submission");
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.message?.trim()) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email.trim())) {
      return new Response(
        JSON.stringify({ success: false, error: "Invalid email format" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    const resend = new Resend(RESEND_API_KEY);

    const phoneDisplay = body.phone ? `${body.countryCode || ""} ${body.phone}`.trim() : "Not provided";

    const emailResponse = await resend.emails.send({
      from: "Skogsräv Contact <contact@hello.skogsrav.com>",
      to: ["hello@skogsrav.com"],
      reply_to: body.email.trim(),
      subject: `New Enquiry from ${body.name.trim()}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1a1a2e; margin: 0; padding: 0; background-color: #f5f5f5;">
          <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: #ff6b35; margin: 0; font-size: 24px; font-weight: 700;">New Contact Enquiry</h1>
              <p style="color: rgba(255,255,255,0.7); margin: 10px 0 0 0; font-size: 14px;">Received via skogsrav.com</p>
            </div>
            
            <div style="background: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666; width: 120px;">Name</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e;">${body.name.trim()}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Company</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e;">${body.company?.trim() || "Not provided"}</td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Email</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${body.email.trim()}" style="color: #ff6b35; text-decoration: none;">${body.email.trim()}</a></td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; font-weight: 600; color: #666;">Phone</td>
                  <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #1a1a2e;">${phoneDisplay}</td>
                </tr>
              </table>
              
              <div style="margin-top: 24px;">
                <h3 style="color: #1a1a2e; margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Message</h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #ff6b35;">
                  <p style="margin: 0; color: #333; white-space: pre-wrap;">${body.message.trim()}</p>
                </div>
              </div>
              
              <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <a href="mailto:${body.email.trim()}" style="display: inline-block; background: #ff6b35; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600;">Reply to ${body.name.trim().split(" ")[0]}</a>
              </div>
            </div>
            
            <p style="text-align: center; color: #999; font-size: 12px; margin-top: 20px;">
              This email was sent from the contact form on skogsrav.com
            </p>
          </div>
        </body>
        </html>
      `,
    });

    console.log("Contact email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error sending contact email:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Unable to send email" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
