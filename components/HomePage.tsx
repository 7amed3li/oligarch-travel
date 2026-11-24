import { profileMetaFor } from '@/data/links';
import MenuBoard from './MenuBoard';
import TabiiCard from './TabiiCard';
import HeroVideo from './HeroVideo';
import GuideTeaser from './GuideTeaser';
import WhyBookDirect from './WhyBookDirect';
import TrustTicker from './TrustTicker';
import { TRUST, UI, VIDEO_URL, type Locale } from '@/data/tours';
import { pricesById, type PriceConfig } from '@/lib/prices';

const WHATSAPP_CHANNEL_URL =
  'https://whatsapp.com/channel/0029Vb8WypN0wajq3OxenC1U';

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
              <h1>
                {(() => {
                  const ht = String(u.hero_title);
                  const ni = ht.indexOf('Ergin Karakoyun');
                  if (ni < 0) return ht;
                  return (
                    <>
                      {ht.slice(0, ni)}
                      <span className="hero-name">Ergin Karakoyun</span>
                      {ht.slice(ni + 'Ergin Karakoyun'.length)}
                    </>
                  );
                })()}
              </h1>
              <p className="hero-sub">{u.hero_sub}</p>
            </div>
          </div>
        </div>
      </div>

      <TrustTicker items={TRUST[locale]} />

      {/* TÜRSAB band (owner, 2026-11-24): the association logo is a site
          requirement — it sits after the moving trust strip and before
          the Istanbul Tours heading, with the membership line under it. */}
      <section className="tursab-band" aria-label="TÜRSAB">
        <div className="wrap">
          <img
            className="tursab-logo"
            src="/img/tursab-logo.png"
            alt="TÜRSAB — Association of Turkish Travel Agencies"
            loading="lazy"
          />
          <p className="tursab-text">{u.tursab_text}</p>
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
          <TabiiCard locale={locale} />
          <p className="tabii-bts-label">{u.tabii_bts}</p>
          <div className="tabii-bts" aria-label={u.tabii_bts}>
            {[1, 2, 3, 4, 5].map((n) => (
              <img key={n} src={`/img/tabii-bts-${n}.jpg`} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      <section id="channel">
        <div className="wrap">
          <div className="gp-chan-band">
            <div className="gp-chan-copy">
              <p className="hp-chan-kicker">{u.chan_kicker}</p>
              <h2>SULTANAHMET INFO</h2>
              <p className="hp-chan-sub">{u.chan_sub}</p>
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
              <span>{u.chan_btn}</span>
            </a>
          </div>
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
