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

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW_MS = 60_000;
const MESSAGE_MAX_LENGTH = 5000;
const NAME_MAX_LENGTH = 100;
const SUBJECT_MAX_LENGTH = 200;

function getClientIp(req: NextRequest): string {
  return req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || '127.0.0.1';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false;
  }

  entry.count++;
  return true;
}

function sanitize(str: string): string {
  return str
    .replace(/[<>]/g, '')
    .trim();
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { message: 'Too many requests. Please try again later.' },
      { status: 429 },
    );
  }

  try {
    const body = await req.json();
    const { name, email, subject, message, locale, honeypot } = body;

    if (honeypot) {
      return NextResponse.json(
        { message: 'Spam detected.' },
        { status: 400 },
      );
    }

    const lang = ['pt', 'en', 'fr'].includes(locale) ? locale : 'pt';
    const t = allMessages[lang];

    const cleanName = sanitize(name || '');
    const cleanEmail = sanitize(email || '');
    const cleanSubject = sanitize(subject || '');
    const cleanMessage = sanitize(message || '');

    if (!cleanName || !cleanEmail || !cleanMessage) {
      return NextResponse.json(
        { message: t.missingFields },
        { status: 400 },
      );
    }

    if (cleanName.length > NAME_MAX_LENGTH) {
      return NextResponse.json(
        { message: 'Name is too long.' },
        { status: 400 },
      );
    }

    if (cleanSubject.length > SUBJECT_MAX_LENGTH) {
      return NextResponse.json(
        { message: 'Subject is too long.' },
        { status: 400 },
      );
    }

    if (cleanMessage.length > MESSAGE_MAX_LENGTH) {
      return NextResponse.json(
        { message: 'Message is too long.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return NextResponse.json(
        { message: 'Invalid email address.' },
        { status: 400 },
      );
    }

    if (!process.env.SMTP_HOST) {
      return NextResponse.json(
        { message: t.error },
        { status: 500 },
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
      replyTo: cleanEmail,
      subject: cleanSubject || t.emailSubject,
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
          <p style="margin:4px 0;font-size:14px;font-weight:600;">${cleanName}</p>
        </div>

        <div style="margin-bottom:16px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelEmail}</p>
          <p style="margin:4px 0;font-size:14px;font-weight:600;">${cleanEmail}</p>
        </div>

        <div style="margin-bottom:16px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelSubject}</p>
          <p style="margin:4px 0;font-size:14px;font-weight:600;">
            ${cleanSubject || t.noSubject}
          </p>
        </div>

        <div style="margin-top:20px;">
          <p style="margin:0;font-size:12px;color:#9ca3af;">${t.labelMessage}</p>
          <div style="margin-top:8px;padding:16px;background:#0f111a;border:1px solid #1f2230;border-radius:12px;font-size:13px;line-height:1.6;color:#e5e7eb;">
            ${cleanMessage}
          </div>
        </div>

        <!-- CTA -->
        <div style="margin-top:24px;text-align:center;">
          <a href="mailto:${cleanEmail}"
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
      { status: 200 },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: 'Internal server error.' },
      { status: 500 },
    );
  }
}
