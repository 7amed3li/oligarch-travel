import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GuideShowcase from '@/components/GuideShowcase';
import ContactForm from '@/components/ContactForm';
import { PROFILE_LINKS } from '@/data/links';
import { GUIDE_BIO } from '@/data/guide';
import { LOCALES, TOUR_ORDER, TOURS, UI, type Locale } from '@/data/tours';
import { altFor } from '@/lib/seo';

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
    chanHeadline: string;
    chanIntro: string;
    chanItems: string[];
    chanTag: string;
  }
> = {
  en: {
    home: 'Home',
    ctaKicker: 'Direct with your guide · TÜRSAB 14988',
    ctaHeadline: 'Ready to walk Istanbul with Ergin?',
    ctaSub: 'Browse private tours across Sultanahmet or confirm dates personally on WhatsApp.',
    chanKicker: "Ergin's WhatsApp Channel",
    chanSub: "Up-to-date information from Istanbul's Historic Peninsula.",
    chanBtn: 'Follow the channel',
    chanHeadline: 'FOLLOW BEFORE YOU EXPLORE ISTANBUL!',
    chanIntro: 'The up-to-date information you need while planning your Istanbul trip is here:',
    chanItems: ['Museums and mosques', 'Visiting hours and entry information', 'Temporary closures', 'Official announcements', 'Latest news from the Historic Peninsula'],
    chanTag: 'FOLLOW • STAY UP TO DATE • SHARE',
  },
  de: {
    home: 'Startseite',
    ctaKicker: 'Direkt beim Guide · TÜRSAB 14988',
    ctaHeadline: 'Bereit für Istanbul mit Ergin?',
    ctaSub: 'Entdecken Sie private Touren durch Sultanahmet oder stimmen Sie Ihren Wunschtermin direkt per WhatsApp ab.',
    chanKicker: 'Ergins WhatsApp-Kanal',
    chanSub: 'Aktuelle Informationen von der Historischen Halbinsel Istanbuls.',
    chanBtn: 'Kanal folgen',
    chanHeadline: 'FOLGEN SIE, BEVOR SIE ISTANBUL ENTDECKEN!',
    chanIntro: 'Die aktuellen Informationen, die Sie zur Planung Ihrer Istanbul-Reise brauchen, finden Sie hier:',
    chanItems: ['Museen und Moscheen', 'Öffnungszeiten und Eintrittsinformationen', 'Vorübergehende Schließungen', 'Offizielle Ankündigungen', 'Aktuelle Nachrichten von der Historischen Halbinsel'],
    chanTag: 'FOLGEN • AKTUELL BLEIBEN • TEILEN',
  },
  zh: {
    home: '首页',
    ctaKicker: '导游直订 · TÜRSAB 14988',
    ctaHeadline: '准备好与 Ergin 一起探索伊斯坦布尔了吗？',
    ctaSub: '浏览苏丹艾哈迈德私人深度游线路，或直接通过 WhatsApp 与 Ergin 确认日期。',
    chanKicker: 'Ergin 的 WhatsApp 频道',
    chanSub: '来自伊斯坦布尔历史半岛的最新信息。',
    chanBtn: '关注频道',
    chanHeadline: '探索伊斯坦布尔之前,先关注!',
    chanIntro: '规划伊斯坦布尔之旅所需的最新信息都在这里:',
    chanItems: ['博物馆与清真寺', '开放时间与入场信息', '临时关闭通知', '官方公告', '历史半岛最新消息'],
    chanTag: '关注 • 保持更新 • 分享',
  },
  tr: {
    home: 'Ana Sayfa',
    ctaKicker: 'Doğrudan rehberinizle · TÜRSAB 14988',
    ctaHeadline: 'İstanbul’u Ergin ile keşfetmeye hazır mısınız?',
    ctaSub: 'Sultanahmet özel turlarını inceleyin veya tarihinizi doğrudan WhatsApp üzerinden netleştirin.',
    chanKicker: "Ergin'in WhatsApp Kanalı",
    chanSub: "İstanbul'un Tarihi Yarımadası'ndan güncel bilgiler.",
    chanBtn: 'Kanalı takip et',
    chanHeadline: "İSTANBUL'U KEŞFETMEDEN ÖNCE TAKİP EDİN!",
    chanIntro: 'İstanbul gezinizi planlarken ihtiyacınız olan güncel bilgiler burada:',
    chanItems: ['Müzeler ve camiler', 'Ziyaret saatleri ve giriş bilgileri', 'Geçici kapanışlar', 'Resmî duyurular', "Tarihi Yarımada'dan güncel haberler"],
    chanTag: 'TAKİP EDİN • GÜNCEL KALIN • PAYLAŞIN',
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
    alternates: altFor('/guide', loc),
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
