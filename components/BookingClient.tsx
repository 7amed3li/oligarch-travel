'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';
import { cartTotals, displayTotals, fmtComponentsDisp, fmtMoney, fmtMoneyD, lineComponents, ticketPerPersonDisplay } from '@/lib/cart';
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
  const { items: rawItems, remove, update, clear, meta } = useCart();
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
        L.push(
          `   Entrance tickets: YES — ${fmtMoney(tp.ticket.currency, tp.ticket.amount)} / person × ${it.people}` +
            (it.skip ? ` + skip-the-line ${fmtMoney('EUR', tp.ticket.premium)} / person` : ''),
        );
      }
      L.push(`   Price: ${lineText(tp, it)}`);
    });
    const LANG_EN: Record<string, string> = { en: 'English', de: 'German', zh: 'Chinese' };
    L.push('', `Tour language: ${LANG_EN[meta.lang] || 'English'}`);
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
              <div className="cart-item-head">
                <img
                  src={`/img/${tourDef.img}`}
                  alt={c.name}
                  loading="lazy"
                  decoding="async"
                  width={96}
                  height={76}
                />
                <div className="cart-item-title-col">
                  <h3>{c.name}</h3>
                  <div className="line-total">{fmtComponentsDisp(lineComponents(tp, it))}</div>
                </div>
              </div>
              <div className="cart-item-controls">
                <div className="cart-inputs-grid">
                  <label className="cart-field">
                    <span>{u.date}</span>
                    <input
                      type="date"
                      value={it.date}
                      onChange={(e) => update(idx, { date: e.target.value })}
                    />
                  </label>
                  <label className="cart-field">
                    <span>{u.guests}</span>
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
                  <div className="cart-options">
                    <label className="cart-check">
                      <input
                        type="radio"
                        name={`tier-${idx}`}
                        checked={it.tier !== 'luxury'}
                        onChange={() => update(idx, { tier: 'standard' })}
                      />
                      <span>{u.tier_standard}</span>
                    </label>
                    <label className="cart-check">
                      <input
                        type="radio"
                        name={`tier-${idx}`}
                        checked={it.tier === 'luxury'}
                        onChange={() => update(idx, { tier: 'luxury' })}
                      />
                      <span>{u.tier_luxury}</span>
                    </label>
                  </div>
                )}
                {tp.ticket && (
                  <>
                    <label className="cart-check cart-ticket-check">
                      <input
                        type="checkbox"
                        checked={!!it.ticket}
                        onChange={(e) =>
                          update(idx, {
                            ticket: e.target.checked,
                            skip: e.target.checked ? it.skip : undefined,
                          })
                        }
                      />
                      <span>
                        {u.add_ticket} — {fmtMoneyD(tp.ticket.currency, tp.ticket.amount)}{' '}
                        {u.per_person}
                      </span>
                    </label>
                    <label className="cart-check cart-ticket-check">
                      <input
                        type="checkbox"
                        checked={!!it.skip}
                        disabled={!it.ticket}
                        onChange={(e) => update(idx, { skip: e.target.checked })}
                      />
                      <span>
                        {u.skip_add || 'Add skip-the-line ticket'} — {fmtMoneyD('EUR', tp.ticket.premium)}{' '}
                        {u.per_person}
                      </span>
                    </label>
                  </>
                )}
                <div className="cart-item-foot">
                  <button type="button" className="remove" onClick={() => remove(idx)}>
                    {u.remove}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <p>
          <Link href={`/${locale}#tours`} className="cart-add-more">
            + {u.add_another}
          </Link>
        </p>
        <div className="field">
          <label htmlFor="bk-name">{u.your_name}</label>
          <input id="bk-name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor="bk-phone">{u.your_phone}</label>
          <input id="bk-phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
      </div>
      <aside className="totals">
        {(() => {
          const dt = displayTotals(items, byId, prices.depositPercent);
          return (
            <div>
              <div className="trow">
                <span>{u.total}</span>
                <span>{fmtMoneyD('EUR', dt.subtotal)}</span>
              </div>
              <div className="trow dep">
                <span>
                  {u.deposit} ({prices.depositPercent}%)
                </span>
                <span>{fmtMoneyD('EUR', dt.deposit)}</span>
              </div>
              <div className="trow">
                <span>{u.remainder}</span>
                <span>{fmtMoneyD('EUR', dt.remainder)}</span>
              </div>
            </div>
          );
        })()}
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
