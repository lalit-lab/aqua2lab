import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { addLead } from "@/lib/leads";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, service, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json(
      { error: "Name, email and phone are required." },
      { status: 400 }
    );
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass || gmailPass === "replace-this-with-your-16-char-app-password") {
    // Email not configured — save the lead so it's not lost, return 500 so UI shows WhatsApp fallback
    console.warn("⚠️  EMAIL NOT CONFIGURED — set GMAIL_USER and GMAIL_APP_PASSWORD in .env.local");
    await addLead({ name, email, phone, service, message, emailed: false });
    return NextResponse.json(
      { error: "Email not configured. Please contact via WhatsApp." },
      { status: 500 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPass },
    });

    const ownerHtml = `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#f8fafb;border-radius:12px;">
        <h2 style="color:#0D2B3E;margin-top:0;">🐠 New Consultation Request — Aqua2 Lab</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px;width:120px;">Name</td><td style="padding:8px 0;font-weight:600;color:#0D2B3E;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;font-weight:600;color:#0D2B3E;">${email}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Phone</td><td style="padding:8px 0;font-weight:600;color:#0D2B3E;">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Service</td><td style="padding:8px 0;font-weight:600;color:#0D2B3E;">${service || "Not specified"}</td></tr>
          ${message ? `<tr><td style="padding:8px 0;color:#64748b;font-size:14px;vertical-align:top;">Message</td><td style="padding:8px 0;color:#0D2B3E;">${message}</td></tr>` : ""}
        </table>
        <a href="https://wa.me/919811238855?text=Hi+${encodeURIComponent(name)}!+I+saw+your+enquiry+on+Aqua2+Lab."
           style="display:inline-block;margin-top:24px;background:#25D366;color:#fff;font-weight:700;padding:12px 24px;border-radius:8px;text-decoration:none;">
          Reply on WhatsApp
        </a>
      </div>`;

    const userHtml = `
      <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:32px 24px;background:#f8fafb;border-radius:12px;">
        <h2 style="color:#0D2B3E;margin-top:0;">Thank you, ${name}! 🌿</h2>
        <p style="color:#475569;line-height:1.7;">We've received your enquiry and will get back to you within a few hours.</p>
        <p style="color:#475569;line-height:1.7;">In the meantime, feel free to reach us directly:</p>
        <ul style="color:#475569;padding-left:20px;line-height:2;">
          <li>WhatsApp: <a href="https://wa.me/919811238855" style="color:#0891b2;">+91 98112 38855</a></li>
          <li>Email: <a href="mailto:aqua2lab@gmail.com" style="color:#0891b2;">aqua2lab@gmail.com</a></li>
        </ul>
        <p style="color:#94a3b8;font-size:13px;margin-top:32px;">— Lalit & the Aqua2 Lab Team · Sector 86, Gurugram</p>
      </div>`;

    await Promise.all([
      transporter.sendMail({
        from: `"Aqua2 Lab" <${gmailUser}>`,
        to: "aqua2lab@gmail.com, lalitrajput876587@gmail.com",
        subject: `New Lead: ${name} — ${service || "General Enquiry"}`,
        html: ownerHtml,
      }),
      transporter.sendMail({
        from: `"Aqua2 Lab" <${gmailUser}>`,
        to: email,
        subject: "We received your enquiry — Aqua2 Lab",
        html: userHtml,
      }),
    ]);

    await addLead({ name, email, phone, service, message, emailed: true });
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    // Still save the lead even if the email failed to send.
    await addLead({ name, email, phone, service, message, emailed: false });
    return NextResponse.json(
      { error: "Failed to send email. Please try WhatsApp instead." },
      { status: 500 }
    );
  }
}
