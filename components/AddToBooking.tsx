'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';
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
  const isYacht = tourId === 'bosphorus-yacht' || tourId.startsWith('bosphorus-yacht');
  const [tier, setTier] = useState<'standard' | 'luxury'>('standard');
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(Math.max(2, price.minGuests));
  const [added, setAdded] = useState(false);

  const clamp = (n: number) => Math.min(price.maxGuests, Math.max(price.minGuests, n || price.minGuests));
  const getSelectedTourId = () => (isYacht ? `bosphorus-yacht-${tier}` : tourId);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(getSelectedTourId(), date, clamp(people));
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
          add(getSelectedTourId(), date, clamp(people));
          router.push(`/${locale}/booking`);
        }}
      >
        {u.book_now}
      </button>
    </form>
  );
}
