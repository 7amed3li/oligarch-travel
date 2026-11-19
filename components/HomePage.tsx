import SearchBar from './SearchBar';
import TourCard from './TourCard';
import { TOUR_ORDER, TOURS, TRUST, UI, VIDEO_URL, type Locale } from '@/data/tours';
import { pricesById, type PriceConfig } from '@/lib/prices';

export default function HomePage({ locale, prices }: { locale: Locale; prices: PriceConfig }) {
  const u = UI[locale];
  const byId = pricesById(prices);
  const options = TOUR_ORDER.map((id) => ({ id, name: TOURS[id].content[locale].name }));
  const popular = ['hs-ticket', 'hs-guided', 'hs-private'];
  const more = [
    'topkapi-private',
    'topkapi-night',
    'istanbul-day',
    'bazaars-tour',
    'bosphorus-yacht',
    'traditional-handicrafts',
  ];

  return (
    <>
      <div className="hero">
        <div className="hero-media">
          <img className="poster" src="/img/hero.jpg" alt="Hagia Sophia and the Bosphorus at dusk — aerial view" />
          <video autoPlay muted loop playsInline preload="metadata" poster="/img/hero.jpg">
            <source src={VIDEO_URL} type="video/webm" />
          </video>
          <div className="hero-shade"></div>
        </div>
        <div className="hero-content">
          <div className="wrap">
            <p className="kicker">{u.hero_kicker}</p>
            <h1>{u.hero_title}</h1>
            <p className="hero-sub">{u.hero_sub}</p>
            <SearchBar locale={locale} u={u} options={options} byId={byId} />
          </div>
        </div>
      </div>

      <div className="trust-strip">
        <div className="wrap trust-in">
          {TRUST[locale].map(([v, l]) => (
            <div className="trust-item" key={l}>
              <div className="trust-val">{v}</div>
              <div className="trust-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>

      <section id="tours">
        <div className="wrap">
          <h2 className="sec">{u.sec_popular}</h2>
          <p className="sec-sub">{u.tours_sub}</p>
          <div className="grid">
            {popular.map((tid) => (
              <TourCard key={tid} locale={locale} tid={tid} price={byId[tid]} u={u} />
            ))}
          </div>
        </div>
      </section>

      <section className="alt">
        <div className="wrap">
          <h2 className="sec">{u.sec_more}</h2>
          <div className="grid">
            {more.map((tid) => (
              <TourCard key={tid} locale={locale} tid={tid} price={byId[tid]} u={u} />
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <h2 className="sec">{u.why_title}</h2>
          <div className="cols3">
            {u.why.map(([t, d]: [string, string]) => (
              <div className="why-item" key={t}>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="alt" id="about">
        <div className="wrap about-grid">
          <img src="/img/portrait.jpg" alt="Ergin Karakoyun, licensed tourist guide" />
          <div>
            <h2 className="sec">{u.about_title}</h2>
            {u.about_paras.map((p: string) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            <div className="chips">
              {u.about_facts.map((f: string) => (
                <span className="chip" key={f}>
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="reviews">
        <div className="wrap">
          <h2 className="sec">{u.reviews_title}</h2>
          <div className="stats">
            {u.stats.map((s: string) => (
              <div className="stat" key={s}>
                <strong style={{ fontSize: 17 }}>{s}</strong>
              </div>
            ))}
          </div>
          <div className="quotes">
            {u.quotes.map(([q, a]: [string, string]) => (
              <blockquote key={q.slice(0, 24)}>
                “{q}”<cite>— {a}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="alt" id="contact">
        <div className="wrap">
          <h2 className="sec">{u.contact_title}</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="lbl">WhatsApp</span>
              <a href="https://wa.me/905553255565" target="_blank" rel="noopener">
                +90 555 325 55 65
              </a>
            </div>
            <div className="contact-item">
              <span className="lbl">{u.email_label}</span>
              <a href="mailto:erginkarakoyun@gmail.com">erginkarakoyun@gmail.com</a>
            </div>
            <div className="contact-item">
              <span className="lbl">{u.instagram_label}</span>
              <a href="https://instagram.com/topkapipalacemuseum" target="_blank" rel="noopener">
                @topkapipalacemuseum
              </a>
            </div>
            <div className="contact-item">
              <span className="lbl">{u.meeting_label}</span>
              <span>{u.meeting}</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
