'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useCart } from './CartProvider';
import { cartTotals, displayTotals, fmtComponentsDisp, fmtMoney, fmtMoneyD, lineComponents, ticketPerPersonDisplay } from '@/lib/cart';
import type { PriceConfig } from '@/lib/prices';
import { TOURS, type Locale } from '@/data/tours';

// Guest country dial codes — most guests are outside Turkey (Hamed, 2026-11-21).
const DIAL_CODES: { name: string; dial: string }[] = [
  { name: 'Turkey', dial: '+90' }, { name: 'Germany', dial: '+49' },
  { name: 'United Kingdom', dial: '+44' }, { name: 'United States', dial: '+1' },
  { name: 'China', dial: '+86' }, { name: 'France', dial: '+33' },
  { name: 'Spain', dial: '+34' }, { name: 'Italy', dial: '+39' },
  { name: 'Netherlands', dial: '+31' }, { name: 'Russia', dial: '+7' },
  { name: 'Greece', dial: '+30' }, { name: 'Austria', dial: '+43' },
  { name: 'Switzerland', dial: '+41' }, { name: 'Belgium', dial: '+32' },
  { name: 'Poland', dial: '+48' }, { name: 'Romania', dial: '+40' },
  { name: 'Bulgaria', dial: '+359' }, { name: 'Ukraine', dial: '+380' },
  { name: 'Czechia', dial: '+420' }, { name: 'Hungary', dial: '+36' },
  { name: 'Portugal', dial: '+351' }, { name: 'Ireland', dial: '+353' },
  { name: 'Denmark', dial: '+45' }, { name: 'Sweden', dial: '+46' },
  { name: 'Norway', dial: '+47' }, { name: 'Finland', dial: '+358' },
  { name: 'Canada', dial: '+1' }, { name: 'Mexico', dial: '+52' },
  { name: 'Brazil', dial: '+55' }, { name: 'Argentina', dial: '+54' },
  { name: 'Chile', dial: '+56' }, { name: 'Colombia', dial: '+57' },
  { name: 'Australia', dial: '+61' }, { name: 'New Zealand', dial: '+64' },
  { name: 'Japan', dial: '+81' }, { name: 'South Korea', dial: '+82' },
  { name: 'India', dial: '+91' }, { name: 'Pakistan', dial: '+92' },
  { name: 'Indonesia', dial: '+62' }, { name: 'Malaysia', dial: '+60' },
  { name: 'Singapore', dial: '+65' }, { name: 'Thailand', dial: '+66' },
  { name: 'Vietnam', dial: '+84' }, { name: 'Philippines', dial: '+63' },
  { name: 'Israel', dial: '+972' }, { name: 'UAE', dial: '+971' },
  { name: 'Saudi Arabia', dial: '+966' }, { name: 'Qatar', dial: '+974' },
  { name: 'Kuwait', dial: '+965' }, { name: 'Bahrain', dial: '+973' },
  { name: 'Oman', dial: '+968' }, { name: 'Jordan', dial: '+962' },
  { name: 'Lebanon', dial: '+961' }, { name: 'Iraq', dial: '+964' },
  { name: 'Egypt', dial: '+20' }, { name: 'Morocco', dial: '+212' },
  { name: 'Algeria', dial: '+213' }, { name: 'Tunisia', dial: '+216' },
  { name: 'Libya', dial: '+218' }, { name: 'South Africa', dial: '+27' },
  { name: 'Azerbaijan', dial: '+994' }, { name: 'Georgia', dial: '+995' },
  { name: 'Kazakhstan', dial: '+7' }, { name: 'Uzbekistan', dial: '+998' },
  { name: 'Iran', dial: '+98' },
];

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
  const [country, setCountry] = useState(DIAL_CODES[0]);
  const [ccOpen, setCcOpen] = useState(false);
  const [ccQuery, setCcQuery] = useState('');
  const ccRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ccRef.current && !ccRef.current.contains(e.target as Node)) setCcOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

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
    const rawPhone = phone.trim();
    if (rawPhone) {
      const fullPhone = rawPhone.startsWith('+')
        ? rawPhone
        : `${country.dial} ${rawPhone.replace(/^0+/, '')}`;
      L.push(`Phone: ${fullPhone}`);
    }
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

  const ccQ = ccQuery.trim().toLowerCase().replace(/\+/g, '');
  const filteredCc = DIAL_CODES.filter(
    (c) =>
      !ccQ ||
      c.name.toLowerCase().includes(ccQ) ||
      c.dial.replace('+', '').startsWith(ccQ),
  );

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
          <div className="bk-phone-row">
            <div className="bk-cc" ref={ccRef}>
              <button
                type="button"
                className="bk-cc-btn"
                aria-haspopup="listbox"
                aria-expanded={ccOpen}
                onClick={() => {
                  setCcOpen((o) => !o);
                  setCcQuery('');
                }}
              >
                <span className="bk-cc-label">
                  {country.name} {country.dial}
                </span>
                <span className="bk-cc-chev" aria-hidden="true">
                  ▾
                </span>
              </button>
              {ccOpen && (
                <div className="bk-cc-panel">
                  <input
                    className="bk-cc-search"
                    autoFocus
                    value={ccQuery}
                    onChange={(e) => setCcQuery(e.target.value)}
                    placeholder={u.cc_search}
                  />
                  <ul className="bk-cc-list" role="listbox">
                    {filteredCc.map((c) => (
                      <li key={c.name}>
                        <button
                          type="button"
                          className="bk-cc-item"
                          onClick={() => {
                            setCountry(c);
                            setCcOpen(false);
                          }}
                        >
                          <span>{c.name}</span>
                          <span className="bk-cc-dial">{c.dial}</span>
                        </button>
                      </li>
                    ))}
                    {filteredCc.length === 0 && <li className="bk-cc-empty">{u.cc_nomatch}</li>}
                  </ul>
                </div>
              )}
            </div>
            <input
              id="bk-phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="555 123 45 67"
            />
          </div>
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
                  {u.deposit}
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
