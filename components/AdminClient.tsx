'use client';
import { useEffect, useState } from 'react';
import type { PriceConfig, TourPrice } from '@/lib/prices';
import { TOURS } from '@/data/tours';

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
    <main>
      <section>
        <div className="wrap">
          <h2 className="sec">Oligarch Travel — Price admin</h2>
          <p className="sec-sub">
            Edit prices only. The tour list is fixed. Changes are saved to the server and appear on
            the site immediately.
          </p>
          {!cfg ? (
            <p>Loading…</p>
          ) : (
            <>
              <div className="admin-table-wrap">
                <table className="admin">
                <thead>
                  <tr>
                    <th>Tour</th>
                    <th>Currency</th>
                    <th>Price / group</th>
                    <th>Ticket (per person)</th>
                    <th>Skip premium €</th>
                    <th>Luxury group</th>
                    <th>Min guests</th>
                    <th>Max guests</th>
                  </tr>
                </thead>
                <tbody>
                  {cfg.tours.map((t) => (
                    <tr key={t.id}>
                      <td>{TOURS[t.id]?.content.en.name || t.id}</td>
                      <td>{t.currency}</td>
                      <td>
                        <input
                          type="number"
                          step="0.01"
                          min="0"
                          value={t.perGroup}
                          onChange={(e) => setTour(t.id, 'perGroup', e.target.value)}
                        />
                      </td>
                      <td>
                        {t.ticket ? (
                          <span>
                            <input
                              type="number"
                              step="0.01"
                              min="0"
                              value={t.ticket.amount}
                              onChange={(e) => setTicket(t.id, 'amount', e.target.value)}
                            />{' '}
                            {t.ticket.currency}
                          </span>
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>
                        {t.ticket ? (
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={t.ticket.premium}
                            onChange={(e) => setTicket(t.id, 'premium', e.target.value)}
                          />
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>
                        {t.luxuryGroup !== undefined ? (
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            value={t.luxuryGroup}
                            onChange={(e) => setTour(t.id, 'luxuryGroup', e.target.value)}
                          />
                        ) : (
                          '—'
                        )}
                      </td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={t.minGuests}
                          onChange={(e) => setTour(t.id, 'minGuests', e.target.value)}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          min="1"
                          value={t.maxGuests}
                          onChange={(e) => setTour(t.id, 'maxGuests', e.target.value)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
              <div className="field" style={{ maxWidth: 260 }}>
                <label htmlFor="dep">Booking deposit (%)</label>
                <input
                  id="dep"
                  type="number"
                  min="0"
                  max="100"
                  value={cfg.depositPercent}
                  onChange={(e) =>
                    setCfg({ ...cfg, depositPercent: Number(e.target.value) || 0 })
                  }
                />
              </div>
              <div className="toolbar">
                <button className="btn accent" onClick={save}>
                  Save prices
                </button>
                <a className="btn ghost" href="/en" target="_blank" rel="noopener">
                  View site
                </a>
                <button className="btn ghost" onClick={logout}>
                  Log out
                </button>
              </div>
              <p className="small" aria-live="polite">
                {status}
              </p>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
