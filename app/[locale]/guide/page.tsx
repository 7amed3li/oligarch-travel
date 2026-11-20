import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GuideShowcase from '@/components/GuideShowcase';
import ContactForm from '@/components/ContactForm';
import { PROFILE_LINKS } from '@/data/links';
import { LOCALES, TOUR_ORDER, TOURS, UI, type Locale } from '@/data/tours';

export const dynamic = 'force-dynamic';

const PAGE_COPY: Record<
  Locale,
  {
    home: string;
    ctaKicker: string;
    ctaHeadline: string;
    ctaSub: string;
  }
> = {
  en: {
    home: 'Home',
    ctaKicker: 'Direct with your guide · TÜRSAB 14988',
    ctaHeadline: 'Ready to walk Istanbul with Ergin?',
    ctaSub: 'Browse private tours across Sultanahmet or confirm dates personally on WhatsApp.',
  },
  de: {
    home: 'Startseite',
    ctaKicker: 'Direkt beim Guide · TÜRSAB 14988',
    ctaHeadline: 'Bereit für Istanbul mit Ergin?',
    ctaSub: 'Entdecken Sie private Touren durch Sultanahmet oder stimmen Sie Ihren Wunschtermin direkt per WhatsApp ab.',
  },
  zh: {
    home: '首页',
    ctaKicker: '导游直订 · TÜRSAB 14988',
    ctaHeadline: '准备好与 Ergin 一起探索伊斯坦布尔了吗？',
    ctaSub: '浏览苏丹艾哈迈德私人深度游线路，或直接通过 WhatsApp 与 Ergin 确认日期。',
  },
  tr: {
    home: 'Ana Sayfa',
    ctaKicker: 'Doğrudan rehberinizle · TÜRSAB 14988',
    ctaHeadline: 'İstanbul’u Ergin ile keşfetmeye hazır mısınız?',
    ctaSub: 'Sultanahmet özel turlarını inceleyin veya tarihinizi doğrudan WhatsApp üzerinden netleştirin.',
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
    title: `Ergin Karakoyun — ${u.nav_about} | Oligarch Travel`,
    description: u.about_paras[0],
    openGraph: {
      title: u.about_title,
      description: u.about_paras[0],
      images: ['/img/portrait.webp'],
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
  const tourNames = Object.fromEntries(
    TOUR_ORDER.map((id) => [id, TOURS[id].content[loc].name]),
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Ergin Karakoyun',
    jobTitle:
      'Licensed Professional Tourist Guide & Founding Delegate, Chamber of Turkey Guides',
    image: '/img/portrait.webp',
    knowsLanguage: ['en', 'de', 'zh', 'tr'],
    telephone: '+90 555 325 55 65',
    worksFor: {
      '@type': 'TravelAgency',
      name: 'Oligarch Tour',
      identifier: 'TÜRSAB 14988',
    },
    sameAs: [
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
        paras={u.about_paras}
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
        </div>
      </section>
      <ContactForm locale={loc} u={u} />
    </>
  );
}
