import { profileMetaFor } from '@/data/links';
import MenuBoard from './MenuBoard';
import HeroVideo from './HeroVideo';
import GuideTeaser from './GuideTeaser';
import WhyBookDirect from './WhyBookDirect';
import TrustTicker from './TrustTicker';
import { TRUST, UI, VIDEO_URL, type Locale } from '@/data/tours';
import { pricesById, type PriceConfig } from '@/lib/prices';

function ExternalIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

export default function HomePage({ locale, prices }: { locale: Locale; prices: PriceConfig }) {
  const u = UI[locale];
  const byId = pricesById(prices);
  return (
    <>
      <link rel="preload" as="image" href="/img/hero.webp" type="image/webp" fetchPriority="high" />
      <div className="hero">
        <div className="hero-media">
          <HeroVideo
            poster="/img/hero.webp"
            webmSrc={VIDEO_URL}
            mp4Src="/img/hero-video.mp4"
            alt="Hagia Sophia and the Bosphorus at dusk — aerial view"
          />
          <div className="hero-shade"></div>
        </div>
        <div className="hero-content">
          <div className="wrap hero-wrap">
            <p className="hero-topline">{u.hero_topline}</p>
            <div className="hero-bottom">
              <h1>{u.hero_title}</h1>
              <p className="hero-sub">{u.hero_sub}</p>
            </div>
          </div>
        </div>
      </div>

      <TrustTicker items={TRUST[locale]} />

      {/* TÜRSAB band (owner, 2026-11-24): the association logo is a site
          requirement — it sits after the moving trust strip and before
          the Istanbul Tours heading. Ergin's own logo file. */}
      <section className="tursab-band" aria-label="TÜRSAB">
        <div className="wrap">
          <img
            className="tursab-logo"
            src="/img/tursab-logo.jpg"
            alt="TÜRSAB — Association of Turkish Travel Agencies"
            loading="lazy"
          />
        </div>
      </section>

      <section id="tours">
        <div className="wrap">
          <h2 className="sec">{u.tours_title}</h2>
          <p className="sec-sub">{u.tours_sub}</p>
          <MenuBoard locale={locale} u={u} byId={byId} />
        </div>
      </section>

      <WhyBookDirect locale={locale} title={u.why_title} items={u.why} />

      <GuideTeaser locale={locale} />

      <section id="tabii">
        <div className="wrap">
          <h2 className="sec">{u.tabii_title}</h2>
          <p className="sec-sub">{u.tabii_text}</p>
        </div>
      </section>

      <section className="alt" id="reviews">
        <div className="wrap">
          <h2 className="sec">{u.reviews_title}</h2>
          <div className="rv-stats">
            {u.stats.map((s: string) => {
              const i = s.indexOf(' · ');
              const value = i > 0 ? s.slice(0, i) : '';
              const label = i > 0 ? s.slice(i + 3) : s;
              const meta = profileMetaFor(s);
              const ctaText = meta
                ? (u.view_on || 'View on {platform}').replace('{platform}', meta.name)
                : '';
              const inner = (
                <>
                  {meta ? (
                    <div className="rv-stat-head">
                      <span className="rv-platform">{meta.name}</span>
                      <span className="rv-ext-icon" aria-hidden="true">
                        <ExternalIcon />
                      </span>
                    </div>
                  ) : null}
                  <div className="rv-stat-body">
                    {value ? <div className="rv-stat-value">{value}</div> : null}
                    <div className={value ? 'rv-stat-label' : 'rv-stat-label rv-stat-solo'}>
                      {label}
                    </div>
                  </div>
                  {meta ? (
                    <div className="rv-stat-cta">
                      <span>{ctaText}</span>
                      <span className="rv-cta-arrow" aria-hidden="true">
                        →
                      </span>
                    </div>
                  ) : null}
                </>
              );
              return meta ? (
                <a
                  className="rv-stat rv-stat-link"
                  key={s}
                  href={meta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s} — ${ctaText}`}
                >
                  {inner}
                </a>
              ) : (
                <div className="rv-stat" key={s}>
                  {inner}
                </div>
              );
            })}
          </div>
          <div className="rv-quotes">
            {u.quotes.map(([q, a]: [string, string]) => {
              const qMeta = profileMetaFor(a);
              const qCta = qMeta
                ? (u.view_on || 'View on {platform}').replace('{platform}', qMeta.name)
                : '';
              return (
                <figure className="rv-quote" key={q.slice(0, 24)}>
                  <blockquote>{q}</blockquote>
                  <figcaption className="rv-quote-foot">
                    <span>{a}</span>
                    {qMeta ? (
                      <a
                        className="rv-quote-link"
                        href={qMeta.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>{qCta}</span>
                        <ExternalIcon />
                      </a>
                    ) : null}
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>
      <section className="legal-strip">
        <div className="wrap">
          <p>{u.legal_line}</p>
        </div>
      </section>
    </>
  );
}
