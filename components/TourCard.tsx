import Link from 'next/link';
import { RATINGS, TOURS, type Locale } from '@/data/tours';
import { priceDisplay } from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';

export default function TourCard({
  locale,
  tid,
  price,
  u,
}: {
  locale: Locale;
  tid: string;
  price: TourPrice;
  u: any;
}) {
  const t = TOURS[tid];
  const c = t.content[locale];
  const r = RATINGS[tid];
  return (
    <Link className="tcard" href={`/${locale}/tours/${tid}`}>
      <span className="tcard-img">
        <img src={`/img/${t.img}`} alt={c.name} />
        {r?.badge ? <span className="tcard-badge">{r.badge[locale]}</span> : null}
      </span>
      <span className="tcard-body">
        <span className="tcard-rating">
          <span className="star">★</span> {r ? r[locale] : ''}
        </span>
        <span className="tcard-name">{c.name}</span>
        <span className="tcard-meta">
          {c.duration} · {c.group}
        </span>
        <span className="tcard-price">
          {price && price.perGroup === 0 && price.perPerson === 0 ? null : <small>{u.price_from} </small>}
          <strong>{price ? priceDisplay(price, u) : ''}</strong>
        </span>
        <span className="tcard-foot">
          <span className="tcard-cta">{u.details_link || 'View details'} →</span>
          {price?.ticket ? <span className="tcard-tick">{u.tickets_available || ''}</span> : null}
        </span>
      </span>
    </Link>
  );
}
