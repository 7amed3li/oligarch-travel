'use client';

import { useState } from 'react';
import type { Locale } from '@/data/tours';

// Privacy-first contact form (Ergin, 2026-11-20; email activation
// 2026-11-21): his email address is never shown anywhere on the site.
// The form POSTs to /api/contact, which emails the message to Ergin
// via Resend from the server — no WhatsApp handoff any more.
export default function ContactForm({ u }: { locale: Locale; u: any }) {
  const [name, setName] = useState('');
  const [reach, setReach] = useState('');
  const [msg, setMsg] = useState('');
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  async function send() {
    if (state === 'sending' || !msg.trim()) return;
    setState('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, reach, message: msg }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data?.ok) {
        setState('sent');
        setName('');
        setReach('');
        setMsg('');
      } else {
        setState('error');
      }
    } catch {
      setState('error');
    }
  }

  return (
    <section id="contact" className="contact-sec">
      <div className="wrap">
        <div className="contact-card">
          <h2>{u.form_title}</h2>
          <p className="contact-sub">{u.form_sub}</p>
          <div className="cf-grid">
            <label>
              {u.form_name}
              <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
            </label>
            <label>
              {u.form_reach}
              <input value={reach} onChange={(e) => setReach(e.target.value)} autoComplete="email" />
            </label>
            <label>
              {u.form_msg}
              <textarea rows={4} value={msg} onChange={(e) => setMsg(e.target.value)} />
            </label>
          </div>
          <button type="button" className="cf-send" onClick={send} disabled={state === 'sending'}>
            {state === 'sending' ? u.form_sending || 'Sending…' : u.form_send}
          </button>
          {state === 'sent' ? (
            <p className="cf-note" role="status">
              {u.form_sent}
            </p>
          ) : state === 'error' ? (
            <p className="cf-note" role="alert">
              {u.form_error}
            </p>
          ) : (
            <p className="cf-note">{u.form_note}</p>
          )}
        </div>
      </div>
    </section>
  );
}
