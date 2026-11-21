'use client';
import { useEffect, useState } from 'react';
import type { PriceConfig, TourPrice } from '@/lib/prices';
import { TOURS } from '@/data/tours';

// Mobile-first price editor: one card per tour, big labelled inputs, and a
// sticky save bar so the Save button is always within thumb reach on a phone.
function AdmField({
  id,
  label,
  suffix,
  children,
}: {
  id: string;
  label: string;
  suffix?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="adm-field">
      <label htmlFor={id}>{label}</label>
      <div className="adm-input-row">
        {children}
        {suffix ? <span className="adm-suffix">{suffix}</span> : null}
      </div>
    </div>
  );
}

export default function AdminClient() {
  const [cfg, setCfg] = useState<PriceConfig | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/prices')
      .then((r) => r.json())
      .then(setCfg)
      .catch(() => setStatus('Could not load prices.'));
  }, []);

  const setTicket = (id: string, field: 'amount' | 'premium', value: string) =>
    setCfg((prev) =>
      prev
        ? {
            ...prev,
            tours: prev.tours.map((t) =>
              t.id === id && t.ticket
                ? { ...t, ticket: { ...t.ticket, [field]: value === '' ? 0 : Number(value) } }
                : t,
            ),
          }
        : prev,
    );

  const setTour = (id: string, field: keyof TourPrice, value: string) =>
    setCfg((prev) =>
      prev
        ? {
            ...prev,
            tours: prev.tours.map((t) =>
              t.id === id ? { ...t, [field]: value === '' ? 0 : Number(value) } : t,
            ),
          }
        : prev,
    );

  async function save() {
    if (!cfg) return;
    setStatus('Saving…');
    const r = await fetch('/api/prices', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(cfg),
    });
    if (r.ok) {
      setCfg(await r.json());
      setStatus('Saved ✓ — the new prices are live on the site now.');
    } else if (r.status === 401) {
      setStatus('Session expired — reloading to the login form…');
      setTimeout(() => window.location.reload(), 800);
    } else {
      const e = await r.json().catch(() => ({}));
      setStatus('Save failed: ' + (e.error || r.status));
    }
  }

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' }).catch(() => {});
    window.location.reload();
  }

  return (
    <main className="adm">
      <div className="adm-wrap">
        <h2 className="sec">Oligarch Travel — Price admin</h2>
        <p className="sec-sub">
          Edit prices only. The tour list is fixed. Changes are saved to the server and appear on
          the site immediately.
        </p>
        <div className="adm-top-actions">
          <a className="btn ghost adm-action" href="/en" target="_blank" rel="noopener">
            View site
          </a>
          <button className="btn ghost adm-action" onClick={logout}>
            Log out
          </button>
        </div>
        {!cfg ? (
          <p>Loading…</p>
        ) : (
          <>
            <div className="adm-cards">
              {cfg.tours.map((t) => (
                <article className="adm-card" key={t.id}>
                  <h3 className="adm-card-title">
                    {TOURS[t.id]?.content.en.name || t.id}
                  </h3>
                  <p className="adm-card-cur">Prices in {t.currency}</p>
                  <AdmField id={`grp-${t.id}`} label="Price / group" suffix={t.currency}>
                    <input
                      id={`grp-${t.id}`}
                      className="adm-input"
                      type="number"
                      inputMode="decimal"
                      step="0.01"
                      min="0"
                      value={t.perGroup}
                      onChange={(e) => setTour(t.id, 'perGroup', e.target.value)}
                    />
                  </AdmField>
                  {t.ticket ? (
                    <>
                      <AdmField
                        id={`tkt-${t.id}`}
                        label="Ticket (per person)"
                        suffix={t.ticket.currency}
                      >
                        <input
                          id={`tkt-${t.id}`}
                          className="adm-input"
                          type="number"
                          inputMode="decimal"
                          step="0.01"
                          min="0"
                          value={t.ticket.amount}
                          onChange={(e) => setTicket(t.id, 'amount', e.target.value)}
                        />
                      </AdmField>
                      <AdmField id={`prm-${t.id}`} label="Skip premium" suffix="€">
                        <input
                          id={`prm-${t.id}`}
                          className="adm-input"
                          type="number"
                          inputMode="decimal"
                          step="0.01"
                          min="0"
                          value={t.ticket.premium}
                          onChange={(e) => setTicket(t.id, 'premium', e.target.value)}
                        />
                      </AdmField>
                    </>
                  ) : null}
                  {t.luxuryGroup !== undefined ? (
                    <AdmField id={`lux-${t.id}`} label="Luxury group" suffix={t.currency}>
                      <input
                        id={`lux-${t.id}`}
                        className="adm-input"
                        type="number"
                        inputMode="decimal"
                        step="0.01"
                        min="0"
                        value={t.luxuryGroup}
                        onChange={(e) => setTour(t.id, 'luxuryGroup', e.target.value)}
                      />
                    </AdmField>
                  ) : null}
                  <div className="adm-field-pair">
                    <AdmField id={`min-${t.id}`} label="Min guests">
                      <input
                        id={`min-${t.id}`}
                        className="adm-input"
                        type="number"
                        inputMode="numeric"
                        min="1"
                        value={t.minGuests}
                        onChange={(e) => setTour(t.id, 'minGuests', e.target.value)}
                      />
                    </AdmField>
                    <AdmField id={`max-${t.id}`} label="Max guests">
                      <input
                        id={`max-${t.id}`}
                        className="adm-input"
                        type="number"
                        inputMode="numeric"
                        min="1"
                        value={t.maxGuests}
                        onChange={(e) => setTour(t.id, 'maxGuests', e.target.value)}
                      />
                    </AdmField>
                  </div>
                </article>
              ))}
              <article className="adm-card">
                <h3 className="adm-card-title">Booking</h3>
                <AdmField id="dep" label="Booking deposit" suffix="%">
                  <input
                    id="dep"
                    className="adm-input"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    max="100"
                    value={cfg.depositPercent}
                    onChange={(e) =>
                      setCfg({ ...cfg, depositPercent: Number(e.target.value) || 0 })
                    }
                  />
                </AdmField>
              </article>
            </div>
            <div className="adm-savebar">
              <p className="adm-save-status" aria-live="polite">
                {status}
              </p>
              <button className="btn accent adm-save-btn" onClick={save}>
                Save prices
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
