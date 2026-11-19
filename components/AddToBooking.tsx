'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';
import { ticketPerPersonDisplay } from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';
import type { Locale } from '@/data/tours';

export default function AddToBooking({
  locale,
  u,
  tourId,
  price,
}: {
  locale: Locale;
  u: any;
  tourId: string;
  price: TourPrice;
}) {
  const { add } = useCart();
  const router = useRouter();
  const isYacht = tourId === 'bosphorus-yacht';
  const [tier, setTier] = useState<'standard' | 'luxury'>('standard');
  const [ticket, setTicket] = useState(false);
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(Math.max(2, price.minGuests));
  const [added, setAdded] = useState(false);

  const clamp = (n: number) => Math.min(price.maxGuests, Math.max(price.minGuests, n || price.minGuests));
  const opts = () => ({
    ticket: price.ticket ? ticket : undefined,
    tier: isYacht ? tier : undefined,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(tourId, date, clamp(people), opts());
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
            style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #CBD5E1', background: '#fff', fontSize: 14 }}
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
      <button type="submit">{added ? u.added : u.add_to_booking}</button>
      <button
        type="button"
        className="btn ghost"
        style={{ marginTop: 10 }}
        onClick={() => {
          add(tourId, date, clamp(people), opts());
          router.push(`/${locale}/booking`);
        }}
      >
        {u.book_now}
      </button>
    </form>
  );
}
