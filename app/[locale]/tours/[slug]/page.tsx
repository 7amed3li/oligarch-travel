import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToBooking from '@/components/AddToBooking';
import { LOCALES, TOUR_ORDER, TOURS, UI, meetingPoint, type Locale } from '@/data/tours';
import { getPrices, priceOf } from '@/lib/prices';
import { priceDisplay } from '@/lib/cart';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!LOCALES.includes(locale as Locale) || !TOURS[slug]) return {};
  const c = TOURS[slug].content[locale as Locale];
  return {
    title: `${c.name} — Oligarch Travel`,
    description: c.tagline,
    openGraph: { title: c.name, description: c.tagline, images: [`/img/${TOURS[slug].img}`] },
  };
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  if (!LOCALES.includes(locale as Locale) || !TOURS[slug]) notFound();
  const loc = locale as Locale;
  const u = UI[loc];
  const t = TOURS[slug];
  const c = t.content[loc];
  const prices = getPrices();
  const tp = priceOf(prices, slug);
  const others = TOUR_ORDER.filter((id) => id !== slug).map((id) => ({
    id,
    name: TOURS[id].content[loc].name,
    price: priceOf(prices, id),
  }));
  const isFree = tp.perGroup === 0 && tp.perPerson === 0;
  const facts: [string, string][] = [
    [u.duration, c.duration],
    [u.group_size, c.group],
    [u.meeting_label, meetingPoint(loc, slug)],
    [isFree ? (u.price_label || 'Price') : u.price_from, priceDisplay(tp, u)],
  ];
  return (
    <section className="tour-page-sec">
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href={`/${loc}#tours`}>{u.nav_tours}</Link>
          <span className="crumb-sep" aria-hidden="true" />
          <span className="crumb-current">{c.name}</span>
        </nav>
        <h1 className="sec tour-title">{c.name}</h1>
        <p className="sec-sub tour-tagline">{c.tagline}</p>
        <img
          src={`/img/${t.img}`}
          alt={c.name}
          className="tour-hero-img"
        />
        <div className="facts">
          {facts.map(([l, v]) => (
            <div className="fact" key={l}>
              <span className="lbl">{l}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </div>
        <div className="tour-mobile-jump">
          <div className="tmj-price">
            {!isFree && <small>{u.price_from}</small>}
            <strong>{priceDisplay(tp, u)}</strong>
          </div>
          <a className="btn accent tmj-btn" href="#tour-bookbox">
            {u.book_now}
          </a>
        </div>
        <div className="two">
          <div>
            <p style={{ fontSize: 16.5 }}>{c.desc}</p>
            <h3 style={{ marginTop: 26 }}>{u.included}</h3>
            <ul className="tick">
              {c.included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <h3 style={{ marginTop: 22 }}>{u.not_included}</h3>
            <ul className="cross">
              {c.not_included.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            {c.note ? (
              <>
                <h3 style={{ marginTop: 22 }}>{u.facts}</h3>
                <p>{c.note}</p>
              </>
            ) : null}
          </div>
          <aside id="tour-bookbox" className="bookbox">
            <div className="price-now">{priceDisplay(tp, u)}</div>
            <AddToBooking locale={loc} u={u} tourId={slug} price={tp} others={others} />
          </aside>
        </div>
      </div>
    </section>
  );
}
