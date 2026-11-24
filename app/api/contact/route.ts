import { NextResponse } from 'next/server';

// Contact form → email via Resend (Ergin, 2026-11-21).
// The recipient address and the Resend API key live ONLY in server-side
// environment variables (Vercel project settings): RESEND_API_KEY and
// CONTACT_TO_EMAIL. Neither is ever sent to the client or shown on the site.
export const runtime = 'nodejs';

function esc(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(req: Request) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  const name = String(body?.name ?? '').trim().slice(0, 200);
  const reach = String(body?.reach ?? '').trim().slice(0, 200);
  const message = String(body?.message ?? '').trim().slice(0, 5000);

  if (!message || (!name && !reach)) {
    return NextResponse.json({ ok: false, error: 'missing_fields' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ ok: false, error: 'not_configured' }, { status: 500 });
  }

  const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reach);
  const subject = `Website contact — ${name || 'Visitor'} (BYZIST)`;
  const text = [
    `New message from the BYZIST website contact form.`,
    ``,
    `Name: ${name || '—'}`,
    `Reach them at: ${reach || '—'}`,
    ``,
    `Message:`,
    message,
  ].join('\n');
  const html = `<p>New message from the <strong>BYZIST</strong> website contact form.</p>
<p><strong>Name:</strong> ${esc(name || '—')}<br/><strong>Reach them at:</strong> ${esc(reach || '—')}</p>
<p><strong>Message:</strong></p><p>${esc(message).replace(/\n/g, '<br/>')}</p>`;

  const payload: Record<string, unknown> = {
    from: 'BYZIST Website <onboarding@resend.dev>',
    to: [to],
    subject,
    text,
    html,
  };
  if (looksLikeEmail) payload.reply_to = reach;

  let res: Response;
  try {
    res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  if (!res.ok) {
    // Surface Resend's error name/message to the server log only; the client
    // gets a generic failure so no provider internals leak to visitors.
    const detail = await res.text().catch(() => '');
    console.error('Resend send failed', res.status, detail.slice(0, 500));
    return NextResponse.json({ ok: false, error: 'send_failed' }, { status: 502 });
  }

  const data = await res.json().catch(() => ({}));
  return NextResponse.json({ ok: true, id: data?.id ?? null });
}
