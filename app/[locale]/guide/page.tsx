import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GuideShowcase from '@/components/GuideShowcase';
import ContactForm from '@/components/ContactForm';
import { PROFILE_LINKS } from '@/data/links';
import { GUIDE_BIO } from '@/data/guide';
import { LOCALES, TOUR_ORDER, TOURS, UI, type Locale } from '@/data/tours';

export const dynamic = 'force-dynamic';

const WHATSAPP_CHANNEL_URL =
  'https://whatsapp.com/channel/0029Vb8WypN0wajq3OxenC1U';

const PAGE_COPY: Record<
  Locale,
  {
    home: string;
    ctaKicker: string;
    ctaHeadline: string;
    ctaSub: string;
    chanKicker: string;
    chanSub: string;
    chanBtn: string;
  }
> = {
  en: {
    home: 'Home',
    ctaKicker: 'Direct with your guide · TÜRSAB 14988',
    ctaHeadline: 'Ready to walk Istanbul with Ergin?',
    ctaSub: 'Browse private tours across Sultanahmet or confirm dates personally on WhatsApp.',
    chanKicker: "Ergin's WhatsApp Channel",
    chanSub: 'Museums, mosques, visiting hours, closures and official announcements for the Historic Peninsula — all in one place, straight from your guide.',
    chanBtn: 'Follow the channel',
  },
  de: {
    home: 'Startseite',
    ctaKicker: 'Direkt beim Guide · TÜRSAB 14988',
    ctaHeadline: 'Bereit für Istanbul mit Ergin?',
    ctaSub: 'Entdecken Sie private Touren durch Sultanahmet oder stimmen Sie Ihren Wunschtermin direkt per WhatsApp ab.',
    chanKicker: 'Ergins WhatsApp-Kanal',
    chanSub: 'Museen, Moscheen, Öffnungszeiten, Schließungen und offizielle Ankündigungen für die Historische Halbinsel — alles an einem Ort, direkt von Ihrem Guide.',
    chanBtn: 'Kanal folgen',
  },
  zh: {
    home: '首页',
    ctaKicker: '导游直订 · TÜRSAB 14988',
    ctaHeadline: '准备好与 Ergin 一起探索伊斯坦布尔了吗？',
    ctaSub: '浏览苏丹艾哈迈德私人深度游线路，或直接通过 WhatsApp 与 Ergin 确认日期。',
    chanKicker: 'Ergin 的 WhatsApp 频道',
    chanSub: '历史半岛的博物馆、清真寺、开放时间、闭馆信息与官方公告——一站获取，直接来自您的导游。',
    chanBtn: '关注频道',
  },
  tr: {
    home: 'Ana Sayfa',
    ctaKicker: 'Doğrudan rehberinizle · TÜRSAB 14988',
    ctaHeadline: 'İstanbul’u Ergin ile keşfetmeye hazır mısınız?',
    ctaSub: 'Sultanahmet özel turlarını inceleyin veya tarihinizi doğrudan WhatsApp üzerinden netleştirin.',
    chanKicker: "Ergin'in WhatsApp Kanalı",
    chanSub: 'Tarihi Yarımada için müzeler, camiler, ziyaret saatleri, kapanışlar ve resmî duyurular — hepsi tek yerde, doğrudan rehberinizden.',
    chanBtn: 'Kanalı takip et',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  const u = UI[loc];
  return {
    title: `Ergin Karakoyun — ${u.nav_about} | BYZIST`,
    description: u.about_paras[0],
    openGraph: {
      title: u.about_title,
      description: u.about_paras[0],
      images: ['/img/portrait-v2.webp'],
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  const u = UI[loc];
  const copy = PAGE_COPY[loc] ?? PAGE_COPY.en;
  const bio = GUIDE_BIO[loc];
  const tourNames = Object.fromEntries(
    TOUR_ORDER.map((id) => [id, TOURS[id].content[loc].name]),
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ergin Karakoyun',
    jobTitle:
      'Licensed Professional Tourist Guide & Founding Delegate, Chamber of Turkey Guides',
    image: '/img/portrait-v2.webp',
    knowsLanguage: ['en', 'de', 'zh', 'tr'],
    telephone: '+90 555 325 55 65',
    worksFor: {
      '@type': 'TravelAgency',
      name: 'Oligarch Tour',
      identifier: 'TÜRSAB 14988',
    },
    sameAs: [
      WHATSAPP_CHANNEL_URL,
      PROFILE_LINKS.tripadvisor,
      PROFILE_LINKS.viator,
      PROFILE_LINKS.airbnb,
    ].filter(Boolean),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="gp-head">
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href={`/${loc}`}>{copy.home}</Link>
            <span className="crumb-sep" aria-hidden="true" />
            <span className="crumb-current">{u.nav_about}</span>
          </nav>
        </div>
      </div>

      <GuideShowcase
        locale={loc}
        title={u.about_title}
        paras={bio.paras}
        tourNames={tourNames}
        headingAs="h1"
      />

      <section className="gp-cta-sec">
        <div className="wrap">
          <div className="gp-cta-band">
            <div className="gp-cta-copy">
              <p className="gp-cta-kicker">{copy.ctaKicker}</p>
              <h2>{copy.ctaHeadline}</h2>
              <p className="gp-cta-sub">{copy.ctaSub}</p>
            </div>
            <div className="gp-cta-actions">
              <Link href={`/${loc}#tours`} className="gp-btn-primary">
                <span>{u.see_tours}</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </Link>
              <a
                href="https://wa.me/905553255565"
                target="_blank"
                rel="noopener noreferrer"
                className="gp-btn-secondary"
              >
                <span>WhatsApp · +90 555 325 55 65</span>
              </a>
            </div>
          </div>

          <div className="gp-chan-band">
            <div className="gp-chan-copy">
              <p className="gp-cta-kicker">{copy.chanKicker}</p>
              <h2>SULTANAHMET INFO</h2>
              <p className="gp-cta-sub">{copy.chanSub}</p>
            </div>
            <a
              href={WHATSAPP_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="gp-chan-btn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.55-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.13-1.05-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.13.16 1.56.1.48-.07 1.47-.6 1.81-1.18.35-.58.35-1.07.25-1.18-.1-.1-.23-.16-.48-.29z"/>
              </svg>
              <span>{copy.chanBtn}</span>
            </a>
          </div>

          <div className="gp-prof-band">
            <div className="gp-chan-copy">
              <h2>{u.reviews_title}</h2>
            </div>
            <div className="gp-prof-links">
              {(
                [
                  ['TripAdvisor', PROFILE_LINKS.tripadvisor],
                  ['Viator', PROFILE_LINKS.viator],
                  ['Airbnb', PROFILE_LINKS.airbnb],
                ] as const
              ).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gp-prof-btn"
                >
                  <span>
                    {(u.view_on || 'View on {platform}').replace('{platform}', name)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ContactForm locale={loc} u={u} />
    </>
  );
}
