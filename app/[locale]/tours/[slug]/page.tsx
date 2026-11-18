import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToBooking from '@/components/AddToBooking';
import { LOCALES, TOURS, UI, meetingPoint, type Locale } from '@/data/tours';
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
  const facts: [string, string][] = [
    [u.duration, c.duration],
    [u.group_size, c.group],
    [u.meeting_label, meetingPoint(loc, slug)],
    [u.price_from, priceDisplay(tp, u)],
  ];
  return (
    <section style={{ paddingTop: 34 }}>
      <div className="wrap">
        <p className="small">
          <Link href={`/${loc}#tours`}>← {u.nav_tours}</Link>
        </p>
        <h2 className="sec" style={{ fontSize: 34 }}>
          {c.name}
        </h2>
        <p className="sec-sub" style={{ fontSize: 17 }}>
          {c.tagline}
        </p>
        <img
          src={`/img/${t.img}`}
          alt={c.name}
          style={{ borderRadius: 12, width: '100%', maxHeight: 440, objectFit: 'cover', marginTop: 18 }}
        />
        <div className="facts">
          {facts.map(([l, v]) => (
            <div className="fact" key={l}>
              <span className="lbl">{l}</span>
              <strong>{v}</strong>
            </div>
          ))}
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
            <ul className="tick">
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
          <aside className="bookbox">
            <div className="price-now">{priceDisplay(tp, u)}</div>
            <AddToBooking locale={loc} u={u} tourId={slug} price={tp} />
          </aside>
        </div>
      </div>
    </section>
  );
}
