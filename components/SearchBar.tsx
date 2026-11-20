'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from './CartProvider';
import type { TourPrice } from '@/lib/prices';
import type { Locale } from '@/data/tours';

export default function SearchBar({
  locale,
  u,
  options,
  byId,
}: {
  locale: Locale;
  u: any;
  options: { id: string; name: string }[];
  byId: Record<string, TourPrice>;
}) {
  const { add, meta, setMeta } = useCart();
  const router = useRouter();
  const [tourId, setTourId] = useState(options[0]?.id || '');
  const date = meta.date;
  const people = meta.people;

  return (
    <form
      className="bookbar"
      onSubmit={(e) => {
        e.preventDefault();
        const tp = byId[tourId];
        if (!tp) return;
        const ppl = Math.min(tp.maxGuests, Math.max(tp.minGuests, people || tp.minGuests));
        add(tourId, date, ppl);
        router.push(`/${locale}/booking`);
      }}
    >
      <div className="bb-field grow">
        <label htmlFor="bb-tour">{u.choose_tour}</label>
        <select id="bb-tour" value={tourId} onChange={(e) => setTourId(e.target.value)}>
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.name}
            </option>
          ))}
        </select>
      </div>
      <div className="bb-row-2">
        <div className="bb-field">
          <label htmlFor="bb-date">{u.date}</label>
          <input id="bb-date" type="date" value={date} onChange={(e) => setMeta({ date: e.target.value })} />
        </div>
        <div className="bb-field small">
          <label htmlFor="bb-lang">{u.tour_lang || 'Tour language'}</label>
          <select
            id="bb-lang"
            value={meta.lang || 'en'}
            onChange={(e) => setMeta({ lang: e.target.value })}
          >
            <option value="en">English</option>
            <option value="de">Deutsch</option>
            <option value="zh">中文</option>
          </select>
        </div>
        <div className="bb-field small">
          <label htmlFor="bb-people">{u.guests}</label>
          <input
            id="bb-people"
            type="number"
            min={1}
            max={46}
            value={people}
            onChange={(e) => setMeta({ people: parseInt(e.target.value, 10) || 1 })}
          />
        </div>
      </div>
      <button className="btn accent bb-btn" type="submit">
        {u.start_booking}
      </button>
    </form>
  );
}
