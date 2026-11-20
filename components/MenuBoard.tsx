'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';
import { RATINGS, SEASONAL_TOURS, TOUR_ORDER, TOURS, meetingPoint, type Locale } from '@/data/tours';
import { GUIDE_COPY } from '@/data/guide';
import type { TourPrice } from '@/lib/prices';
import {
  fmtComponentsDisp,
  fmtMoney,
  fmtMoneyD,
  lineComponents,
  priceDisplay,
  RATES,
  skipGroupTotalDisplay,
  ticketGroupTotalDisplay,
  ticketPerPersonDisplay,
} from '@/lib/cart';

// Restaurant-menu booking board (Ergin, 2026-11-20): the guest FIRST sets
// the date and the number of people at the top, then adds tours like
// dishes from a menu. Tapping a tour opens its detail popup — tour price
// shown plainly, entrance ticket offered with its own price, and ticket
// totals auto-calculated from the people count. The Full-Day tour covers
// the single-site tours: adding it removes them and disables their rows.
// Ergin (2026-11-20, final word): the menu order is BY PRICE — most
// expensive at the top, cheapest at the bottom ("sıralama dil değil,
// önemli olan fiyata göre"). The sort below is dynamic: it reads the live
// prices, so if a price changes in the admin the order follows on its own.
// TOUR_ORDER remains only as the tie-break order for equal prices.
export const COVERED_BY_FULL_DAY = [
  'hagia-sophia',
  'topkapi-palace',
  'basilica-cistern',
  'sultanahmet-hippodrome',
];

export default function MenuBoard({
  locale,
  u,
  byId,
}: {
  locale: Locale;
  u: any;
  byId: Record<string, TourPrice>;
}) {
  const { items, add, remove, meta, setMeta } = useCart();
  const router = useRouter();
  const [openId, setOpenId] = useState<string | null>(null);
  const [justAdded, setJustAdded] = useState<string | null>(null);

  const fullDayInCart = items.some((it) => it.tourId === 'full-day-istanbul');
  const inCart = (tid: string) => items.filter((it) => it.tourId === tid).length;
  const isCovered = (tid: string) => fullDayInCart && COVERED_BY_FULL_DAY.includes(tid);

  const clampFor = (tp: TourPrice) =>
    Math.min(tp.maxGuests, Math.max(tp.minGuests, meta.people || tp.minGuests));

  const doAdd = (
    tid: string,
    opts?: { ticket?: boolean; skip?: boolean; tier?: 'standard' | 'luxury' },
  ) => {
    const tp = byId[tid];
    if (!tp) return;
    if (tid === 'full-day-istanbul') {
      // Full-Day covers the single-site tours — drop them from the cart.
      for (let i = items.length - 1; i >= 0; i--) {
        if (COVERED_BY_FULL_DAY.includes(items[i].tourId)) remove(i);
      }
    }
    add(tid, meta.date, clampFor(tp), opts);
    setJustAdded(tid);
    setTimeout(() => setJustAdded((cur) => (cur === tid ? null : cur)), 2200);
  };

  return (
    <div className="mboard">
      <div className="mb-bar">
        <div className="mb-title">{u.select_details || 'Please select tour details'}</div>
        <div className="mb-field">
          <label htmlFor="mb-date">{u.date}</label>
          <input
            id="mb-date"
            type="date"
            value={meta.date}
            onChange={(e) => setMeta({ date: e.target.value })}
          />
        </div>
        <div className="mb-field">
          <label htmlFor="mb-people">{u.guests}</label>
          <div className="mb-stepper">
            <button
              type="button"
              aria-label="-"
              onClick={() => setMeta({ people: meta.people - 1 })}
            >
              −
            </button>
            <input
              id="mb-people"
              type="number"
              min={1}
              max={46}
              value={meta.people}
              onChange={(e) => setMeta({ people: parseInt(e.target.value, 10) || 1 })}
            />
            <button
              type="button"
              aria-label="+"
              onClick={() => setMeta({ people: meta.people + 1 })}
            >
              +
            </button>
          </div>
        </div>
        <div className="mb-field">
          <label htmlFor="mb-lang">{u.tour_lang || 'Tour language'}</label>
          <select
            id="mb-lang"
            value={meta.lang || 'en'}
            onChange={(e) => setMeta({ lang: e.target.value })}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <p className="mb-hint">{u.menu_hint}</p>
        {items.length > 0 && (
          <Link className="mb-cartlink" href={`/${locale}/booking`}>
            {u.nav_booking || 'Booking'} ({items.length}) →
          </Link>
        )}
      </div>

      <div className="mlist">
        {[...TOUR_ORDER]
          .sort((a, b) => {
            const pa = byId[a] ? byId[a].perGroup / (RATES[byId[a].currency] || 1) : 0;
            const pb = byId[b] ? byId[b].perGroup / (RATES[byId[b].currency] || 1) : 0;
            return pb - pa;
          })
          .map((tid) => {
          const t = TOURS[tid];
          const c = t.content[locale];
          const tp = byId[tid];
          const r = RATINGS[tid];
          const covered = isCovered(tid);
          const count = inCart(tid);
          const seasonal = SEASONAL_TOURS.includes(tid);
          return (
            <article
              key={tid}
              className={`mrow${covered ? ' covered' : ''}`}
              onClick={() => setOpenId(tid)}
            >
              <img className="mrow-img" src={`/img/${t.img}`} alt={c.name} loading="lazy" />
              <div className="mrow-body">
                <div className="mrow-top">
                  <strong className="mrow-name">{c.name}</strong>
                  {r ? (
                    <span className="mrow-rating">
                      <span className="star">★</span> {r[locale]}
                    </span>
                  ) : null}
                </div>
                <p className="mrow-tag">{c.tagline}</p>
                <p className="mrow-meta">
                  {c.duration} · {c.group}
                </p>
                {tp?.ticket ? (
                  <p className="mrow-ticket">
                    {u.add_ticket}: {ticketPerPersonDisplay(tp)} {u.per_person}
                  </p>
                ) : null}
                {covered ? (
                  <p className="mrow-covered">{u.covered_full_day}</p>
                ) : count > 0 ? (
                  <p className="mrow-incart">
                    ✓ {u.added} ({count})
                  </p>
                ) : null}
              </div>
              <div className="mrow-side">
                {seasonal ? (
                  <span className="mrow-badge">{u.night_badge}</span>
                ) : (
                  <>
                    <span className="mrow-price">
                      {tp && tp.perGroup === 0 && tp.perPerson === 0 ? (
                        <strong>{u.free_word || 'Free'}</strong>
                      ) : (
                        <>
                          <small>{u.price_from} </small>
                          <strong>{tp ? priceDisplay(tp, u).replace(/ \+ .*$/, '') : ''}</strong>
                        </>
                      )}
                    </span>
                    <button
                      type="button"
                      className="mrow-add"
                      aria-label={`${u.add_to_booking}: ${c.name}`}
                      disabled={covered}
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!covered) doAdd(tid);
                      }}
                    >
                      {justAdded === tid ? '✓' : '+'}
                    </button>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <Link href={`/${locale}/guide`} className="whois-card">
        <img
          className="whois-img"
          src="/img/portrait.webp"
          alt="Ergin Karakoyun"
          loading="lazy"
        />
        <div className="whois-body">
          <h3 className="whois-title">{u.who_is}</h3>
          <p className="whois-line">{GUIDE_COPY[locale].overline}</p>
          <span className="whois-link">{u.nav_about} →</span>
        </div>
      </Link>

      {openId && (
        <TourModal
          key={openId}
          locale={locale}
          u={u}
          tid={openId}
          price={byId[openId]}
          covered={isCovered(openId)}
          fullDayInCart={fullDayInCart}
          onClose={() => setOpenId(null)}
          onAdd={(opts) => {
            doAdd(openId, opts);
            setOpenId(null);
          }}
          onBookNow={(opts) => {
            doAdd(openId, opts);
            router.push(`/${locale}/booking`);
          }}
        />
      )}
    </div>
  );
}

function TourModal({
  locale,
  u,
  tid,
  price,
  covered,
  fullDayInCart,
  onClose,
  onAdd,
  onBookNow,
}: {
  locale: Locale;
  u: any;
  tid: string;
  price: TourPrice;
  covered: boolean;
  fullDayInCart: boolean;
  onClose: () => void;
  onAdd: (opts?: { ticket?: boolean; skip?: boolean; tier?: 'standard' | 'luxury' }) => void;
  onBookNow: (opts?: { ticket?: boolean; skip?: boolean; tier?: 'standard' | 'luxury' }) => void;
}) {
  const { meta } = useCart();
  const t = TOURS[tid];
  const c = t.content[locale];
  const r = RATINGS[tid];
  const seasonal = SEASONAL_TOURS.includes(tid);
  const isYacht = tid === 'bosphorus-yacht';
  const [tier, setTier] = useState<'standard' | 'luxury'>('standard');
  const [ticket, setTicket] = useState(false);
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const opts = () => ({
    ticket: price.ticket ? ticket : undefined,
    skip: price.ticket && ticket ? skip : undefined,
    tier: isYacht ? tier : undefined,
  });
  const tourPrice =
    isYacht && tier === 'luxury' && price.luxuryGroup
      ? fmtMoneyD(price.currency, price.luxuryGroup)
      : priceDisplay(price, u).replace(/ \+ .*$/, '');
  const ppl = Math.max(1, meta.people);
  const comp = lineComponents(price, {
    tourId: tid,
    date: meta.date,
    people: ppl,
    ticket: price.ticket ? ticket : undefined,
    skip: price.ticket && ticket ? skip : undefined,
    tier: isYacht ? tier : undefined,
  });
  const totalJoined = fmtComponentsDisp(comp);

  return (
    <div className="tmodal-overlay" onClick={onClose}>
      <div
        className="tmodal"
        role="dialog"
        aria-modal="true"
        aria-label={c.name}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="tmodal-head">
          <img src={`/img/${t.img}`} alt={c.name} />
          <button type="button" className="tmodal-x" aria-label="Close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="tmodal-body">
          <div className="mrow-top">
            <h3 className="tmodal-name">{c.name}</h3>
            {r ? (
              <span className="mrow-rating">
                <span className="star">★</span> {r[locale]}
              </span>
            ) : null}
          </div>
          <p className="tmodal-tag">{c.tagline}</p>
          <div className="tm-chips">
            <span className="tm-chip">{c.duration}</span>
            <span className="tm-chip">{c.group}</span>
          </div>
          <p className="mrow-meta">
            {u.meeting_label}: {meetingPoint(locale, tid)}{' '}
            <a
              href="https://maps.app.goo.gl/vTuGMLWqoP2tgWH59"
              target="_blank"
              rel="noopener"
            >
              📍 Maps ↗
            </a>
          </p>
          <p className="tmodal-desc">{c.intro}</p>
          <div className="tmodal-cols">
            <div>
              <h4>{u.included}</h4>
              <ul className="tick">
                {c.included.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{u.not_included}</h4>
              <ul className="tick">
                {c.not_included.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          {c.note ? <p className="small">{c.note}</p> : null}
          <p className="small">
            <Link href={`/${locale}/tours/${tid}`}>{u.full_details || 'Full details'} →</Link>
          </p>
          {seasonal ? (
            <p className="tm-badge-row">
              <span className="tm-badge">{u.night_badge}</span>
            </p>
          ) : null}

          {seasonal ? null : (
          <div className="tmodal-book">
            <div className="tmodal-price">
              <span>
                {u.price_label || 'Price'} · {u.guests}: {meta.people}
                {meta.date ? ` · ${meta.date}` : ''}
              </span>
              <strong>{tourPrice}</strong>
            </div>
            {tid === 'full-day-istanbul' && !fullDayInCart ? (
              <p className="small">{u.fullday_note}</p>
            ) : null}
            {isYacht && (
              <div className="field">
                <label htmlFor="tm-tier">{u.tier_label || 'Yacht Option'}</label>
                <select
                  id="tm-tier"
                  value={tier}
                  onChange={(e) => setTier(e.target.value as 'standard' | 'luxury')}
                >
                  <option value="standard">{u.tier_standard || 'Standard Yacht — €400'}</option>
                  <option value="luxury">
                    {u.tier_luxury || 'Luxury Yacht — €600 (drinks included)'}
                  </option>
                </select>
              </div>
            )}
            {price.ticket && (
              <>
                <div className="ticketbox">
                  <label className="tb-row">
                    <input
                      type="checkbox"
                      checked={ticket}
                      onChange={(e) => {
                        setTicket(e.target.checked);
                        if (!e.target.checked) setSkip(false);
                      }}
                    />
                    <span>
                      {u.add_ticket} +{' '}
                      <strong>
                        {fmtMoneyD(price.ticket.currency, price.ticket.amount)} × {ppl} {u.guests}
                      </strong>
                    </span>
                  </label>
                </div>
                <div className="ticketbox">
                  <label className="tb-row">
                    <input
                      type="checkbox"
                      checked={skip}
                      disabled={!ticket}
                      onChange={(e) => setSkip(e.target.checked)}
                    />
                    <span>
                      {u.skip_add || 'Add skip-the-line ticket'} +{' '}
                      <strong>
                        {fmtMoneyD('EUR', price.ticket.premium)} {u.per_person}
                      </strong>
                    </span>
                  </label>
                  <p className="tb-note">{u.skip_note}</p>
                </div>
              </>
            )}
            {totalJoined ? (
              <div className="tmodal-sum">
                <div className="tsum-row">
                  <span>{c.name}</span>
                  <span>{tourPrice}</span>
                </div>
                {price.ticket && ticket ? (
                  <div className="tsum-row">
                    <span>
                      {u.add_ticket}: {fmtMoneyD(price.ticket.currency, price.ticket.amount)} ×{' '}
                      {ppl} {u.guests}
                    </span>
                    <span>{ticketGroupTotalDisplay(price, ppl)}</span>
                  </div>
                ) : null}
                {price.ticket && ticket && skip ? (
                  <div className="tsum-row">
                    <span>
                      {u.skip_add || 'Add skip-the-line ticket'}: {fmtMoneyD('EUR', price.ticket.premium)}{' '}
                      × {ppl} {u.guests}
                    </span>
                    <span>{skipGroupTotalDisplay(price, ppl)}</span>
                  </div>
                ) : null}
                <div className="tsum-row total">
                  <span>{u.total || 'Total'}</span>
                  <span>{totalJoined}</span>
                </div>
              </div>
            ) : null}
            {covered ? <p className="mrow-covered">{u.covered_full_day}</p> : null}
          </div>
          )}

          {seasonal ? null : (
          <div className="tmodal-foot">
            <div className="tmfoot-price">
              <small>
                {u.total || 'Total'}
                {meta.date ? ` · ${meta.date}` : ''} · {ppl} {u.guests}
              </small>
              <strong>{totalJoined || tourPrice}</strong>
            </div>
            {covered ? null : (
              <div className="tmfoot-btns">
                <button type="button" className="tmfoot-add" onClick={() => onAdd(opts())}>
                  + {u.add_to_booking}
                </button>
                <button type="button" className="tmfoot-book" onClick={() => onBookNow(opts())}>
                  {u.book_now} →
                </button>
              </div>
            )}
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
