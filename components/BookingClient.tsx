'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';
import { cartTotals, fmtMoney, lineComponents, ticketPerPersonDisplay } from '@/lib/cart';
import type { PriceConfig } from '@/lib/prices';
import { TOURS, type Locale } from '@/data/tours';

export default function BookingClient({
  locale,
  u,
  prices,
  byId,
}: {
  locale: Locale;
  u: any;
  prices: PriceConfig;
  byId: Record<string, import('@/lib/prices').TourPrice>;
}) {
  const { items: rawItems, remove, update, clear } = useCart();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  // Drop lines whose tour no longer exists (stale carts from older versions).
  const items = rawItems.filter((it) => byId[it.tourId] && TOURS[it.tourId]);

  const totals = useMemo(
    () => cartTotals(items, byId, prices.depositPercent),
    [items, byId, prices.depositPercent],
  );
  const currencies = Object.keys(totals);

  function lineText(tp: import('@/lib/prices').TourPrice, it: (typeof items)[number]): string {
    const comp = lineComponents(tp, it);
    const curs = Object.keys(comp);
    if (curs.length === 0) return u.free_word || 'Free';
    return curs.map((c) => fmtMoney(c, comp[c])).join(' + ');
  }

  function confirm() {
    const L: string[] = ['New booking — Oligarch Travel website', ''];
    items.forEach((it, i) => {
      const tp = byId[it.tourId];
      const en = TOURS[it.tourId]?.content.en;
      if (!tp || !en) return;
      L.push(`${i + 1}. ${en.name}`);
      if (it.tier) L.push(`   Yacht: ${it.tier === 'luxury' ? 'Luxury (drinks included)' : 'Standard'}`);
      L.push(`   Date: ${it.date || '—'} · Guests: ${it.people}`);
      if (tp.ticket && it.ticket) {
        L.push(`   Entrance tickets: YES — skip-the-line, ${ticketPerPersonDisplay(tp)} / person × ${it.people}`);
      }
      L.push(`   Price: ${lineText(tp, it)}`);
    });
    currencies.forEach((cur) => {
      const t = totals[cur];
      L.push('');
      L.push(`Total (${cur}): ${fmtMoney(cur, t.subtotal)}`);
      L.push(`Deposit to confirm (${prices.depositPercent}%): ${fmtMoney(cur, t.deposit)}`);
      L.push(`Remainder on the day: ${fmtMoney(cur, t.remainder)}`);
    });
    if (name) L.push('', `Name: ${name}`);
    if (phone) L.push(`Phone: ${phone}`);
    window.open(
      `https://wa.me/${prices.whatsapp}?text=${encodeURIComponent(L.join('\n'))}`,
      '_blank',
    );
  }

  if (items.length === 0) {
    return (
      <div>
        <p>{u.empty_cart}</p>
        <p>
          <Link className="btn accent" href={`/${locale}#tours`}>
            {u.see_tours}
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="grid2">
      <div>
        {items.map((it, idx) => {
          const tp = byId[it.tourId];
          const tourDef = TOURS[it.tourId];
          if (!tp || !tourDef) return null;
          const c = tourDef.content[locale];
          return (
            <div className="cart-item" key={idx}>
              <img src={`/img/${tourDef.img}`} alt={c.name} />
              <div style={{ flex: 1 }}>
                <h3>{c.name}</h3>
                <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 8 }}>
                  <label className="small">
                    {u.date}
                    <br />
                    <input
                      type="date"
                      value={it.date}
                      onChange={(e) => update(idx, { date: e.target.value })}
                    />
                  </label>
                  <label className="small">
                    {u.guests}
                    <br />
                    <input
                      type="number"
                      min={tp.minGuests}
                      max={tp.maxGuests}
                      value={it.people}
                      onChange={(e) =>
                        update(idx, {
                          people: Math.min(
                            tp.maxGuests,
                            Math.max(tp.minGuests, parseInt(e.target.value, 10) || tp.minGuests),
                          ),
                        })
                      }
                    />
                  </label>
                </div>
                {tp.luxuryGroup && (
                  <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 8 }}>
                    <label className="small">
                      <input
                        type="radio"
                        name={`tier-${idx}`}
                        checked={it.tier !== 'luxury'}
                        onChange={() => update(idx, { tier: 'standard' })}
                      />{' '}
                      {u.tier_standard}
                    </label>
                    <label className="small">
                      <input
                        type="radio"
                        name={`tier-${idx}`}
                        checked={it.tier === 'luxury'}
                        onChange={() => update(idx, { tier: 'luxury' })}
                      />{' '}
                      {u.tier_luxury}
                    </label>
                  </div>
                )}
                {tp.ticket && (
                  <label className="small" style={{ display: 'block', marginTop: 8 }}>
                    <input
                      type="checkbox"
                      checked={!!it.ticket}
                      onChange={(e) => update(idx, { ticket: e.target.checked })}
                    />{' '}
                    {u.add_ticket} — {ticketPerPersonDisplay(tp)} {u.per_person}
                  </label>
                )}
                <button className="remove" onClick={() => remove(idx)} style={{ marginTop: 8 }}>
                  {u.remove}
                </button>
              </div>
              <div className="line-total">{lineText(tp, it)}</div>
            </div>
          );
        })}
        <p>
          <Link href={`/${locale}#tours`}>+ {u.add_another}</Link>
        </p>
        <div className="field">
          <label htmlFor="bk-name">{u.your_name}</label>
          <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="bk-phone">{u.your_phone}</label>
          <input id="bk-phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <aside className="totals">
        {currencies.map((cur) => {
          const t = totals[cur];
          return (
            <div key={cur}>
              <div className="cur-head">{cur}</div>
              <div className="trow">
                <span>{u.total}</span>
                <span>{fmtMoney(cur, t.subtotal)}</span>
              </div>
              <div className="trow dep">
                <span>
                  {u.deposit} ({prices.depositPercent}%)
                </span>
                <span>{fmtMoney(cur, t.deposit)}</span>
              </div>
              <div className="trow">
                <span>{u.remainder}</span>
                <span>{fmtMoney(cur, t.remainder)}</span>
              </div>
            </div>
          );
        })}
        <button className="confirm-btn" onClick={confirm} style={{ marginTop: 16 }}>
          {u.confirm}
        </button>
        <p className="small">{u.booking_note}</p>
        <button className="remove" onClick={clear}>
          {u.remove} · all
        </button>
      </aside>
    </div>
  );
}
