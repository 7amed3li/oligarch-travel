'use client';

import { useState } from 'react';
import type { Locale } from '@/data/tours';

// Privacy-first contact form (Ergin, 2026-11-20): his email address is never
// shown anywhere on the site. The form hands the message to WhatsApp, which
// delivers it to Ergin directly — same channel as the booking confirmations.
export default function ContactForm({ u }: { locale: Locale; u: any }) {
  const [name, setName] = useState('');
  const [reach, setReach] = useState('');
  const [msg, setMsg] = useState('');

  function send() {
    const lines = [
      name ? `Hello Ergin, I am ${name}.` : 'Hello Ergin,',
      msg,
      reach ? `Reach me at: ${reach}` : '',
    ].filter(Boolean);
    window.open(
      `https://wa.me/905553255565?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank',
    );
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
          <button type="button" className="cf-send" onClick={send}>
            {u.form_send}
          </button>
          <p className="cf-note">{u.form_note}</p>
        </div>
      </div>
    </section>
  );
}
