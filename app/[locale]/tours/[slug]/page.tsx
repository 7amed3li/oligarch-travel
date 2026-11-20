import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import AddToBooking from '@/components/AddToBooking';
import TourHeroGallery from '@/components/TourHeroGallery';
import {
  LOCALES,
  RATINGS,
  TOUR_ORDER,
  TOURS,
  UI,
  meetingPoint,
  type Locale,
} from '@/data/tours';
import { getPrices, priceOf, pricesById } from '@/lib/prices';
import { priceDisplay } from '@/lib/cart';

export const dynamic = 'force-dynamic';

const TOUR_GALLERY: Record<string, string[]> = {
  'hagia-sophia': ['tour-hs-guided.webp', 'tour-hs-private.webp', 'tour-hs-ticket.webp'],
  'topkapi-palace': ['tour-topkapi-private.webp', 'tour-topkapi-night.webp'],
  'full-day-istanbul': [
    'tour-istanbul-day.webp',
    'tour-hs-private.webp',
    'tour-topkapi-private.webp',
    'tour-bluemosque.webp',
  ],
  'bosphorus-yacht': ['tour-bosphorus-yacht.webp', 'tour-topkapi-night.webp'],
};

const PAGE_COPY: Record<
  Locale,
  {
    experienceKicker: string;
    guideKicker: string;
    guideMeta: string;
    guideLink: string;
    openMaps: string;
    moreKicker: string;
    moreTitle: string;
    allTours: string;
    directLine: string;
    ticketAvailable: string;
    priceLabel: string;
  }
> = {
  en: {
    experienceKicker: 'The Experience',
    guideKicker: 'Your Licensed Guide',
    guideMeta: '32 yrs in Sultanahmet · Founding Delegate · TÜRSAB 14988',
    guideLink: 'Meet Ergin',
    openMaps: 'Open in Google Maps',
    moreKicker: 'Continue Exploring',
    moreTitle: 'Pair with another Istanbul experience',
    allTours: 'All tours',
    directLine: 'Private · Direct with Ergin',
    ticketAvailable: 'Skip-the-line tickets optional',
    priceLabel: 'Price',
  },
  de: {
    experienceKicker: 'Das Erlebnis',
    guideKicker: 'Ihr lizenzierter Guide',
    guideMeta: '32 Jahre in Sultanahmet · Gründungsdelegierter · TÜRSAB 14988',
    guideLink: 'Ergin kennenlernen',
    openMaps: 'In Google Maps öffnen',
    moreKicker: 'Weitere private Touren',
    moreTitle: 'Kombinieren Sie mit einer weiteren Tour',
    allTours: 'Alle Touren',
    directLine: 'Privat · Direkt bei Ergin',
    ticketAvailable: 'Ohne-Anstehen-Tickets optional',
    priceLabel: 'Preis',
  },
  zh: {
    experienceKicker: '行程体验',
    guideKicker: '您的持证导游',
    guideMeta: '苏丹艾哈迈德 32 年深耕 · 协会创始代表 · TÜRSAB 14988',
    guideLink: '认识 Ergin',
    openMaps: '在地图中查看',
    moreKicker: '探索更多私人行程',
    moreTitle: '搭配更多伊斯坦布尔私人行程',
    allTours: '查看全部',
    directLine: '私人团 · Ergin 直订',
    ticketAvailable: '可选免排队门票',
    priceLabel: '价格',
  },
  tr: {
    experienceKicker: 'Tur Deneyimi',
    guideKicker: 'Lisanslı Rehberiniz',
    guideMeta: 'Sultanahmet’te 32 yıl · Kurucu Delege · TÜRSAB 14988',
    guideLink: 'Ergin’i Tanıyın',
    openMaps: 'Haritada aç',
    moreKicker: 'Keşfetmeye Devam Edin',
    moreTitle: 'Diğer özel İstanbul turları',
    allTours: 'Tüm turlar',
    directLine: 'Özel · Doğrudan Ergin ile',
    ticketAvailable: 'Hızlı giriş bileti opsiyonel',
    priceLabel: 'Fiyat',
  },
};

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
  const copy = PAGE_COPY[loc] ?? PAGE_COPY.en;
  const t = TOURS[slug];
  const c = t.content[loc];
  const prices = getPrices();
  const byId = pricesById(prices);
  const tp = priceOf(prices, slug);

  const others = TOUR_ORDER.filter((id) => id !== slug).map((id) => ({
    id,
    name: TOURS[id].content[loc].name,
    price: priceOf(prices, id),
  }));

  const currentIdx = TOUR_ORDER.indexOf(slug);
  const rotated = [
    ...TOUR_ORDER.slice(currentIdx + 1),
    ...TOUR_ORDER.slice(0, Math.max(0, currentIdx)),
  ];
  const companions = rotated.slice(0, 3);

  const isFree = tp.perGroup === 0 && tp.perPerson === 0;
  const ratingText = RATINGS[slug]?.[loc] as string | undefined;
  const meetAddr = meetingPoint(loc, slug);
  const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${meetAddr}, Istanbul`,
  )}`;
  const gallery = TOUR_GALLERY[slug] ?? [t.img];

  return (
    <>
      <TourHeroGallery
        locale={loc}
        backLabel={u.nav_tours}
        title={c.name}
        tagline={c.tagline}
        duration={c.duration}
        group={c.group}
        rating={ratingText}
        images={gallery}
      />

      <section className="td-body-sec">
        <div className="wrap">
          <div className="td-ribbon">
            <div className="td-spec">
              <span className="td-spec-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div className="td-spec-text">
                <span className="lbl">{u.duration}</span>
                <strong>{c.duration}</strong>
              </div>
            </div>

            <div className="td-spec">
              <span className="td-spec-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <div className="td-spec-text">
                <span className="lbl">{u.group_size}</span>
                <strong>{c.group}</strong>
              </div>
            </div>

            <div className="td-spec td-spec-meeting">
              <span className="td-spec-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
                  <circle cx="12" cy="10" r="2.3" />
                </svg>
              </span>
              <div className="td-spec-text">
                <span className="lbl">{u.meeting_label}</span>
                <strong>{meetAddr}</strong>
              </div>
            </div>

            <div className="td-spec td-spec-price">
              <span className="td-spec-icon" aria-hidden="true">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <circle cx="7" cy="7" r="1.3" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <div className="td-spec-text">
                <span className="lbl">{isFree ? copy.priceLabel : u.price_from}</span>
                <strong>{priceDisplay(tp, u)}</strong>
              </div>
            </div>
          </div>

          <div className="td-mobile-cta">
            <div className="td-mc-price">
              <small>{copy.directLine}</small>
              <strong>{priceDisplay(tp, u)}</strong>
            </div>
            <a className="td-mc-btn" href="#tour-bookbox">
              {u.book_now}
            </a>
          </div>

          <div className="td-main">
            <div className="td-story">
              <div className="td-story-card">
                <p className="td-kicker">{copy.experienceKicker}</p>
                <p className="td-desc">{c.desc}</p>
              </div>

              <div className="td-inc-grid">
                <div className="td-inc-card is-in">
                  <h3>{u.included}</h3>
                  <ul className="td-list">
                    {c.included.map((item) => (
                      <li key={item}>
                        <span className="td-list-mark is-in" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="td-inc-card is-out">
                  <h3>{u.not_included}</h3>
                  <ul className="td-list">
                    {c.not_included.map((item) => (
                      <li key={item}>
                        <span className="td-list-mark is-out" aria-hidden="true">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <line x1="6" y1="12" x2="18" y2="12" />
                          </svg>
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {c.note ? (
                <div className="td-note-card">
                  <span className="td-note-icon" aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="16" x2="12" y2="12" />
                      <circle cx="12" cy="8.5" r="0.8" fill="currentColor" stroke="none" />
                    </svg>
                  </span>
                  <div>
                    <h3>{u.facts}</h3>
                    <p>{c.note}</p>
                  </div>
                </div>
              ) : null}

              <div className="td-host-card">
                <div className="td-host-portrait">
                  <img
                    src="/img/portrait.webp"
                    alt="Ergin Karakoyun, licensed tourist guide"
                    width={128}
                    height={148}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="td-host-body">
                  <span className="td-host-kicker">{copy.guideKicker}</span>
                  <strong>Ergin Karakoyun</strong>
                  <p>{copy.guideMeta}</p>
                </div>
                <Link href={`/${loc}/guide`} className="td-host-link">
                  <span>{copy.guideLink}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="td-meet-strip">
                <div className="td-meet-info">
                  <span className="td-meet-pin" aria-hidden="true">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
                      <circle cx="12" cy="10" r="2.3" />
                    </svg>
                  </span>
                  <div>
                    <small>{u.meeting_label}</small>
                    <p>{meetAddr}</p>
                  </div>
                </div>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="td-meet-map"
                >
                  <span>{copy.openMaps}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7" />
                    <path d="M9 7h8v8" />
                  </svg>
                </a>
              </div>
            </div>

            <aside id="tour-bookbox" className="bookbox td-bookbox">
              <div className="td-bb-head">
                <span className="td-bb-kicker">{copy.directLine}</span>
                <div className="price-now">{priceDisplay(tp, u)}</div>
                {tp.ticket ? (
                  <div className="td-bb-ticket-hint">{copy.ticketAvailable}</div>
                ) : null}
              </div>
              <AddToBooking locale={loc} u={u} tourId={slug} price={tp} others={others} />
            </aside>
          </div>
        </div>
      </section>

      <section className="td-more-sec">
        <div className="wrap">
          <div className="td-more-head">
            <div>
              <p className="td-more-kicker">{copy.moreKicker}</p>
              <h2 className="sec">{copy.moreTitle}</h2>
            </div>
            <Link href={`/${loc}#tours`} className="td-more-all">
              <span>{copy.allTours}</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="td-more-grid">
            {companions.map((id) => {
              const ct = TOURS[id];
              const cc = ct.content[loc];
              const cp = byId[id];
              return (
                <Link key={id} href={`/${loc}/tours/${id}`} className="td-more-card">
                  <div className="td-more-media">
                    <img src={`/img/${ct.img}`} alt={cc.name} loading="lazy" decoding="async" />
                    <span className="td-more-dur">{cc.duration}</span>
                  </div>
                  <div className="td-more-body">
                    <h3>{cc.name}</h3>
                    <p>{cc.tagline}</p>
                    <div className="td-more-foot">
                      <strong>{priceDisplay(cp, u)}</strong>
                      <span className="td-more-go">{u.details_link || 'View details'} →</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
