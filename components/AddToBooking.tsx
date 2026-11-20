'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';
import {
  fmtMoney,
  lineComponents,
  mergeComponents,
  ticketPerPersonDisplay,
} from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';
import type { Locale } from '@/data/tours';

export interface OtherTour {
  id: string;
  name: string;
  price: TourPrice;
}

const COPY: Record<
  Locale,
  {
    estimatedTotal: string;
    trustNote: string;
    decGuests: string;
    incGuests: string;
  }
> = {
  en: {
    estimatedTotal: 'Estimated total',
    trustNote: 'No online card required · Confirmed personally on WhatsApp',
    decGuests: 'Decrease guests',
    incGuests: 'Increase guests',
  },
  de: {
    estimatedTotal: 'Geschätzter Gesamtpreis',
    trustNote: 'Keine Kreditkarte nötig · Persönliche Bestätigung per WhatsApp',
    decGuests: 'Gästezahl verringern',
    incGuests: 'Gästezahl erhöhen',
  },
  zh: {
    estimatedTotal: '预计总计',
    trustNote: '无需在线刷卡 · Ergin 通过 WhatsApp 亲自确认',
    decGuests: '减少人数',
    incGuests: '增加人数',
  },
  tr: {
    estimatedTotal: 'Tahmini toplam',
    trustNote: 'Online kart gerekmez · WhatsApp üzerinden bizzat onay',
    decGuests: 'Kişi sayısını azalt',
    incGuests: 'Kişi sayısını artır',
  },
};

export default function AddToBooking({
  locale,
  u,
  tourId,
  price,
  others = [],
}: {
  locale: Locale;
  u: any;
  tourId: string;
  price: TourPrice;
  others?: OtherTour[];
}) {
  const { add } = useCart();
  const router = useRouter();
  const t = COPY[locale] ?? COPY.en;
  const isYacht = tourId === 'bosphorus-yacht';

  const [tier, setTier] = useState<'standard' | 'luxury'>('standard');
  const [ticket, setTicket] = useState(false);
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(Math.max(2, price.minGuests));

  // Optional second tour, added in the same form.
  const [addOther, setAddOther] = useState(false);
  const [otherId, setOtherId] = useState(others[0]?.id || '');
  const [oTicket, setOTicket] = useState(false);
  const [oTier, setOTier] = useState<'standard' | 'luxury'>('standard');
  const [oDate, setODate] = useState('');
  const [oPeople, setOPeople] = useState(2);
  const other = others.find((o) => o.id === otherId);

  const [added, setAdded] = useState(false);

  const clamp = (n: number, p: TourPrice) =>
    Math.min(p.maxGuests, Math.max(p.minGuests, n || p.minGuests));

  const opts = () => ({
    ticket: price.ticket ? ticket : undefined,
    tier: isYacht ? tier : undefined,
  });

  const doAdd = () => {
    add(tourId, date, clamp(people, price), opts());
    if (addOther && other) {
      add(other.id, oDate, clamp(oPeople, other.price), {
        ticket: other.price.ticket ? oTicket : undefined,
        tier: other.id === 'bosphorus-yacht' ? oTier : undefined,
      });
    }
  };

  // Live multi-currency total preview
  const primaryGuests = clamp(people, price);
  const comp = lineComponents(price, {
    tourId,
    date,
    people: primaryGuests,
    ticket: price.ticket ? ticket : undefined,
    tier: isYacht ? tier : undefined,
  });
  if (addOther && other) {
    mergeComponents(
      comp,
      lineComponents(other.price, {
        tourId: other.id,
        date: oDate,
        people: clamp(oPeople, other.price),
        ticket: other.price.ticket ? oTicket : undefined,
        tier: other.id === 'bosphorus-yacht' ? oTier : undefined,
      }),
    );
  }
  const curKeys = Object.keys(comp);
  const totalSummary =
    curKeys.length === 0
      ? u.free_word || u.free || 'Free'
      : curKeys.map((c) => fmtMoney(c, comp[c])).join(' + ');

  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #CBD5E1',
    background: '#fff',
    fontSize: 16,
    minHeight: 44,
  } as const;

  const otherMin = other?.price.minGuests || 1;
  const otherMax = other?.price.maxGuests || 8;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        doAdd();
        setAdded(true);
        setTimeout(() => setAdded(false), 2600);
      }}
    >
      {isYacht && (
        <div className="field">
          <label>{u.tier_label || 'Yacht Tier'}</label>
          <div
            className="bk-tier-grid"
            role="radiogroup"
            aria-label={u.tier_label || 'Yacht Tier'}
          >
            <button
              type="button"
              role="radio"
              aria-checked={tier === 'standard'}
              className={tier === 'standard' ? 'bk-tier-btn is-selected' : 'bk-tier-btn'}
              onClick={() => setTier('standard')}
            >
              <span>{u.tier_standard || 'Standard Yacht — €400 (2 hrs)'}</span>
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={tier === 'luxury'}
              className={tier === 'luxury' ? 'bk-tier-btn is-selected' : 'bk-tier-btn'}
              onClick={() => setTier('luxury')}
            >
              <span>{u.tier_luxury || 'Luxury Yacht — €600 (2 hrs, drinks included)'}</span>
            </button>
          </div>
        </div>
      )}

      {price.ticket && (
        <div className={ticket ? 'ticketbox is-checked' : 'ticketbox'}>
          <label className="tb-row">
            <input
              type="checkbox"
              checked={ticket}
              onChange={(e) => setTicket(e.target.checked)}
            />
            <span>
              {u.add_ticket || 'Add entrance tickets too'} —{' '}
              <strong>
                {ticketPerPersonDisplay(price)} {u.per_person}
              </strong>
            </span>
          </label>
          <p className="tb-note">{u.skip_note}</p>
        </div>
      )}

      <div className="field-row-2">
        <div className="field">
          <label htmlFor="bk-date">{u.date}</label>
          <input
            id="bk-date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="bk-people-val">{u.guests}</label>
          <div className="bk-stepper">
            <button
              type="button"
              className="bk-step-btn"
              onClick={() => setPeople((v) => Math.max(price.minGuests, v - 1))}
              disabled={primaryGuests <= price.minGuests}
              aria-label={t.decGuests}
            >
              −
            </button>
            <span id="bk-people-val" className="bk-step-val">
              {primaryGuests}
            </span>
            <button
              type="button"
              className="bk-step-btn"
              onClick={() => setPeople((v) => Math.min(price.maxGuests, v + 1))}
              disabled={primaryGuests >= price.maxGuests}
              aria-label={t.incGuests}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {others.length > 0 && (
        <div className="addother">
          <label className="ao-toggle">
            <input
              type="checkbox"
              checked={addOther}
              onChange={(e) => setAddOther(e.target.checked)}
            />
            <span>{u.add_other || 'Add another tour too'}</span>
          </label>
          {addOther && (
            <div className="ao-fields">
              <div className="field">
                <label htmlFor="ao-tour">{u.choose_tour}</label>
                <select
                  id="ao-tour"
                  value={otherId}
                  onChange={(e) => {
                    setOtherId(e.target.value);
                    setOTicket(false);
                  }}
                  style={selectStyle}
                >
                  {others.map((o) => (
                    <option key={o.id} value={o.id}>
                      {o.name}
                    </option>
                  ))}
                </select>
              </div>
              {other?.id === 'bosphorus-yacht' && (
                <div className="field">
                  <label>{u.tier_label || 'Yacht Option'}</label>
                  <div
                    className="bk-tier-grid"
                    role="radiogroup"
                    aria-label={u.tier_label || 'Yacht Option'}
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={oTier === 'standard'}
                      className={oTier === 'standard' ? 'bk-tier-btn is-selected' : 'bk-tier-btn'}
                      onClick={() => setOTier('standard')}
                    >
                      <span>{u.tier_standard || 'Standard Yacht — €400'}</span>
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={oTier === 'luxury'}
                      className={oTier === 'luxury' ? 'bk-tier-btn is-selected' : 'bk-tier-btn'}
                      onClick={() => setOTier('luxury')}
                    >
                      <span>{u.tier_luxury || 'Luxury Yacht — €600 (drinks included)'}</span>
                    </button>
                  </div>
                </div>
              )}
              {other?.price.ticket && (
                <div className={oTicket ? 'ticketbox is-checked' : 'ticketbox'}>
                  <label className="tb-row">
                    <input
                      type="checkbox"
                      checked={oTicket}
                      onChange={(e) => setOTicket(e.target.checked)}
                    />
                    <span>
                      {u.add_ticket || 'Add entrance tickets too'} —{' '}
                      <strong>
                        {ticketPerPersonDisplay(other.price)} {u.per_person}
                      </strong>
                    </span>
                  </label>
                  <p className="tb-note">{u.skip_note}</p>
                </div>
              )}
              <div className="field-row-2">
                <div className="field">
                  <label htmlFor="ao-date">{u.date}</label>
                  <input
                    id="ao-date"
                    type="date"
                    value={oDate}
                    onChange={(e) => setODate(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="ao-people-val">{u.guests}</label>
                  <div className="bk-stepper">
                    <button
                      type="button"
                      className="bk-step-btn"
                      onClick={() => setOPeople((v) => Math.max(otherMin, v - 1))}
                      disabled={oPeople <= otherMin}
                      aria-label={t.decGuests}
                    >
                      −
                    </button>
                    <span id="ao-people-val" className="bk-step-val">
                      {Math.min(otherMax, Math.max(otherMin, oPeople))}
                    </span>
                    <button
                      type="button"
                      className="bk-step-btn"
                      onClick={() => setOPeople((v) => Math.min(otherMax, v + 1))}
                      disabled={oPeople >= otherMax}
                      aria-label={t.incGuests}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="bk-live-total">
        <span>{t.estimatedTotal}</span>
        <strong>{totalSummary}</strong>
      </div>

      <p className="bk-trust-note">{t.trustNote}</p>

      <div className="book-actions">
        <button
          type="button"
          className="bk-primary-btn"
          onClick={() => {
            doAdd();
            router.push(`/${locale}/booking`);
          }}
        >
          {u.book_now}
        </button>
        <button
          type="submit"
          className={added ? 'bk-add-btn is-added' : 'bk-add-btn'}
        >
          {added ? u.added : u.add_to_booking}
        </button>
      </div>
    </form>
  );
}
