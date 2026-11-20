'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';
import { ticketPerPersonDisplay } from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';
import type { Locale } from '@/data/tours';

export interface OtherTour {
  id: string;
  name: string;
  price: TourPrice;
}

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

  const selectStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #CBD5E1',
    background: '#fff',
    fontSize: 14,
  } as const;

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
          <label htmlFor="bk-tier">{u.tier_label || 'Yacht Option'}</label>
          <select
            id="bk-tier"
            value={tier}
            onChange={(e) => setTier(e.target.value as 'standard' | 'luxury')}
            style={selectStyle}
          >
            <option value="standard">{u.tier_standard || 'Standard Yacht — €400'}</option>
            <option value="luxury">{u.tier_luxury || 'Luxury Yacht — €600 (drinks included)'}</option>
          </select>
        </div>
      )}
      {price.ticket && (
        <div className="ticketbox">
          <label className="tb-row">
            <input type="checkbox" checked={ticket} onChange={(e) => setTicket(e.target.checked)} />
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
      <div className="field">
        <label htmlFor="bk-date">{u.date}</label>
        <input id="bk-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="bk-people">{u.guests}</label>
        <input
          id="bk-people"
          type="number"
          min={price.minGuests}
          max={price.maxGuests}
          value={people}
          onChange={(e) => setPeople(parseInt(e.target.value, 10) || price.minGuests)}
        />
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
                  <label htmlFor="ao-tier">{u.tier_label || 'Yacht Option'}</label>
                  <select
                    id="ao-tier"
                    value={oTier}
                    onChange={(e) => setOTier(e.target.value as 'standard' | 'luxury')}
                    style={selectStyle}
                  >
                    <option value="standard">{u.tier_standard || 'Standard Yacht — €400'}</option>
                    <option value="luxury">{u.tier_luxury || 'Luxury Yacht — €600 (drinks included)'}</option>
                  </select>
                </div>
              )}
              {other?.price.ticket && (
                <div className="ticketbox">
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
                <label htmlFor="ao-people">{u.guests}</label>
                <input
                  id="ao-people"
                  type="number"
                  min={other?.price.minGuests || 1}
                  max={other?.price.maxGuests || 8}
                  value={oPeople}
                  onChange={(e) => setOPeople(parseInt(e.target.value, 10) || 1)}
                />
              </div>
            </div>
          )}
        </div>
      )}

      <div className="book-actions">
        <button type="submit">{added ? u.added : u.add_to_booking}</button>
        <button
          type="button"
          className="btn ghost"
          style={{ marginTop: 10 }}
          onClick={() => {
            doAdd();
            router.push(`/${locale}/booking`);
          }}
        >
          {u.book_now}
        </button>
      </div>
    </form>
  );
}
