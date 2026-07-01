import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import ptMessages from '@/messages/pt.json';
import enMessages from '@/messages/en.json';
import frMessages from '@/messages/fr.json';

const allMessages: Record<string, typeof ptMessages.api> = {
  pt: ptMessages.api,
  en: enMessages.api,
  fr: frMessages.api,
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, locale } = body;
    const lang = ['pt', 'en', 'fr'].includes(locale) ? locale : 'pt';
    const t = allMessages[lang];

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: t.missingFields },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject || t.emailSubject,
      html: `
  <div style="background:#0b0b0f;padding:40px;font-family:Arial,sans-serif;color:#ffffff;">

    <div style="max-width:600px;margin:0 auto;background:#11121a;border:1px solid #1f2230;border-radius:16px;overflow:hidden;">

      <!-- HEADER -->
      <div style="padding:20px 24px;background:linear-gradient(135deg,#00f2fe,#4facfe);">
        <h1 style="margin:0;font-size:18px;color:#000;font-weight:700;">
          📩 ${t.emailTitle}
        </h1>
        <p style="margin:4px 0 0;font-size:12px;color:#000;">
          ${t.emailSubtitle}
        </p>
      </div>

      <!-- BODY -->
      <div style="padding:24px;">

        <div style="margin-bottom:16px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelName}</p>
          <p style="margin:4px 0;font-size:14px;font-weight:600;">${name}</p>
        </div>

        <div style="margin-bottom:16px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelEmail}</p>
          <p style="margin:4px 0;font-size:14px;font-weight:600;">${email}</p>
        </div>

        <div style="margin-bottom:16px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelSubject}</p>
          <p style="margin:4px 0;font-size:14px;font-weight:600;">
            ${subject || t.noSubject}
          </p>
        </div>

        <div style="margin-top:20px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelMessage}</p>
          <div style="margin-top:8px;padding:16px;background:#0f111a;border:1px solid #1f2230;border-radius:12px;font-size:13px;line-height:1.6;color:#e5e7eb;">
            ${message}
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top:24px;text-align:center;">
          <a href="mailto:${email}"
             style="display:inline-block;padding:10px 16px;background:#00f2fe;color:#000;font-weight:600;border-radius:10px;text-decoration:none;font-size:13px;">
            ${t.replyNow}
          </a>
        </div>

      </div>

      <!-- FOOTER -->
      <div style="padding:16px;text-align:center;font-size:11px;color:#6b7280;border-top:1px solid #1f2230;">
        © ${new Date().getFullYear()} Félix Domingos • ${t.footer}
      </div>

    </div>
  </div>
`,
    });

    return NextResponse.json(
      { message: t.success },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: 'Internal server error.' },
      { status: 500 }
    );
  }
}
