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
  const [date, setDate] = useState('');
  const [people, setPeople] = useState(Math.max(2, price.minGuests));
  const [added, setAdded] = useState(false);

  const clamp = (n: number) => Math.min(price.maxGuests, Math.max(price.minGuests, n || price.minGuests));

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        add(tourId, date, clamp(people));
        setAdded(true);
        setTimeout(() => setAdded(false), 2600);
      }}
    >
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
          add(tourId, date, clamp(people));
          router.push(`/${locale}/booking`);
        }}
      >
        {u.book_now}
      </button>
    </form>
  );
}
