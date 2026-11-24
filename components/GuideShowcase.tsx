'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';
import { GUIDE_COPY, PERSONAL_GREETINGS, type PersonalLang } from '@/data/guide';
import type { Locale } from '@/data/tours';

interface GuideShowcaseProps {
  locale: Locale;
  title: string;
  paras: string[];
  tourNames: Record<string, string>;
  headingAs?: 'h1' | 'h2';
}

const LANG_KEYS: PersonalLang[] = ['en', 'de', 'zh'];

function FlipIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  );
}

function ArchEmblem() {
  return (
    <svg width="20" height="24" viewBox="0 0 72 84" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M10,78 L10,44 C10,26 20,15 36,13 C52,15 62,26 62,44 L62,78 Z M24,78 L24,46 A12,12 0 0 1 48,46 L48,78 Z"
      />
      <polygon points="30.5,17 41.5,17 36,4" />
    </svg>
  );
}

export default function GuideShowcase({
  locale,
  title,
  paras,
  tourNames,
  headingAs = 'h2',
}: GuideShowcaseProps) {
  const HeadingTag = headingAs;
  const copy = GUIDE_COPY[locale];
  const [flipped, setFlipped] = useState(false);
  const [activeLang, setActiveLang] = useState<PersonalLang>(
    locale === 'de' || locale === 'zh' ? locale : 'en',
  );
  const [activeStop, setActiveStop] = useState(0);
  const [videoOn, setVideoOn] = useState(false);
  const [natgeoOn, setNatgeoOn] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const routePathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (locale === 'de' || locale === 'zh' || locale === 'en') {
      setActiveLang(locale);
    }
  }, [locale]);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root || typeof window === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        // 1. Arch portrait entrance
        gsap.from('.gs-arch-img', {
          scale: 1.07,
          duration: 1.0,
          ease: 'power3.out',
          clearProps: 'scale',
          scrollTrigger: {
            trigger: '.gs-arch-frame',
            start: 'top 86%',
            once: true,
          },
        });

        // 2. Metrics numeric count-up
        const counters = root.querySelectorAll<HTMLElement>('[data-count]');
        counters.forEach((el) => {
          const target = parseInt(el.dataset.count || '0', 10);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.gs-metrics',
              start: 'top 90%',
              once: true,
            },
            onUpdate: () => {
              el.textContent = String(Math.round(obj.val));
            },
          });
        });

        // 3. Engraved stamps physical drop
        gsap.from('.gs-stamp', {
          scale: 1.32,
          opacity: 0,
          y: -10,
          duration: 0.48,
          stagger: 0.14,
          ease: 'power4.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.gs-stamps',
            start: 'top 90%',
            once: true,
          },
        });

        // 4. Heritage Route DrawSVG
        if (routePathRef.current) {
          gsap.fromTo(
            routePathRef.current,
            { drawSVG: '0% 0%' },
            {
              drawSVG: '0% 100%',
              duration: 1.35,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: '.gs-route',
                start: 'top 86%',
                once: true,
              },
            },
          );
        }

        gsap.from('.gs-stop', {
          y: 18,
          opacity: 0,
          duration: 0.55,
          stagger: 0.12,
          ease: 'power2.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: '.gs-route',
            start: 'top 86%',
            once: true,
          },
        });
      }, root);

      return () => ctx.revert();
    });

    // Desktop-only subtle parallax inside arch frame
    mm.add('(min-width: 960px) and (prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.to('.gs-arch-img', {
          yPercent: -5,
          ease: 'none',
          scrollTrigger: {
            trigger: '.gs-arch-frame',
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.8,
          },
        });
      }, root);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const currentGreeting = PERSONAL_GREETINGS[activeLang];

  return (
    <section id="about" ref={sectionRef} className="gs-section">
      <div className="wrap">
        <div className="gs-grid">
          {/* Left column: Arch portrait + coordinate plate + interactive 3D credential card */}
          <div className="gs-visual">
            <div className="gs-arch-frame">
              <div className="gs-arch-window">
                <img
                  className="gs-arch-img"
                  src="/img/portrait-v2.webp"
                  alt="Ergin Karakoyun, licensed tourist guide"
                  width={880}
                  height={1100}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="gs-coord-plate">
                <div className="gs-coord-left">
                  <span className="gs-coord-num">41.0065° N · 28.9802° E</span>
                  <span className="gs-coord-place">{copy.coordPlace}</span>
                </div>
                <span className="gs-coord-seal">TÜRSAB 14988</span>
              </div>
            </div>

            <div className="gs-cred-wrap">
              <button
                type="button"
                className={`gs-cred-card ${flipped ? 'is-flipped' : ''}`}
                onClick={() => setFlipped((f) => !f)}
                aria-pressed={flipped}
              >
                <span className="gs-cred-inner">
                  {/* Front face */}
                  <span className="gs-cred-face gs-cred-front">
                    <span className="gs-cred-top">
                      <span className="gs-cred-emblem">
                        <ArchEmblem />
                      </span>
                      <span className="gs-cred-kicker">{copy.cred.frontKicker}</span>
                    </span>
                    <span className="gs-cred-mid">
                      <strong className="gs-cred-name">Ergin Karakoyun</strong>
                      <span className="gs-cred-role">{copy.cred.frontRole}</span>
                    </span>
                    <span className="gs-cred-foot">
                      <span className="gs-cred-meta">1994 · 32 YRS · TÜRSAB 14988</span>
                      <span className="gs-cred-flip-cue">
                        <FlipIcon />
                        <span>{copy.cred.flipToBack}</span>
                      </span>
                    </span>
                  </span>

                  {/* Back face */}
                  <span className="gs-cred-face gs-cred-back">
                    <span className="gs-cred-back-head">
                      <strong>{copy.cred.backTitle}</strong>
                      <span className="gs-cred-flip-cue is-back">
                        <FlipIcon />
                        <span>{copy.cred.flipToFront}</span>
                      </span>
                    </span>
                    <span className="gs-cred-rows">
                      {copy.cred.rows.map(([k, v]) => (
                        <span className="gs-cred-row" key={k}>
                          <span className="gs-cred-row-k">{k}</span>
                          <span className="gs-cred-row-v">{v}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* Right column: Editorial bio, animated metrics, live language preview, engraved stamps */}
          <div className="gs-content">
            <p className="gs-overline">{copy.overline}</p>
            <HeadingTag className="sec gs-title">{title}</HeadingTag>

            {/* Editorial numeric strip */}
            <div className="gs-metrics">
              <div className="gs-metric">
                <div className="gs-metric-num">
                  <span data-count="32">32</span>
                </div>
                <div className="gs-metric-label">{copy.metrics.yearsLabel}</div>
              </div>
              <div className="gs-metric">
                <div className="gs-metric-num">
                  <span data-count="3">3</span>
                  <span className="gs-metric-sep">/</span>
                  <span data-count="9">9</span>
                </div>
                <div className="gs-metric-label">{copy.metrics.langsLabel}</div>
              </div>
              <div className="gs-metric">
                <div className="gs-metric-num">
                  <span data-count="2">2</span>
                </div>
                <div className="gs-metric-label">{copy.metrics.empiresLabel}</div>
              </div>
            </div>

            <div className="gs-paras">
              {paras.map((p) => (
                <p className="gs-text" key={p.slice(0, 24)}>
                  {p}
                </p>
              ))}
            </div>

            {/* Live language switcher */}
            <div className="gs-lang-box">
              <div className="gs-lang-head">
                <span className="gs-lang-heading">{copy.langSection.heading}</span>
                <span className="gs-team-pill">{copy.langSection.teamBadge}</span>
              </div>
              <div className="gs-lang-tabs" role="tablist" aria-label={copy.langSection.heading}>
                {LANG_KEYS.map((k) => {
                  const selected = activeLang === k;
                  return (
                    <button
                      key={k}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      className={`gs-lang-tab ${selected ? 'is-active' : ''}`}
                      onClick={() => setActiveLang(k)}
                    >
                      {PERSONAL_GREETINGS[k].native}
                    </button>
                  );
                })}
              </div>
              <div className="gs-lang-quote" key={activeLang}>
                <p className="gs-lang-quote-text" lang={activeLang}>
                  “{currentGreeting.quote}”
                </p>
                <span className="gs-lang-quote-by">— Ergin Karakoyun</span>
              </div>
            </div>

            {/* 3 Engraved SVG Passport/Heritage Stamps */}
            <div className="gs-stamps-wrap">
              <div className="gs-stamps-caption">{copy.stamps.caption}</div>
              <div className="gs-stamps">
                {/* Stamp 1: Circular 32-Year Field Seal */}
                <div className="gs-stamp">
                  <div className="gs-stamp-inner gs-tilt-1">
                    <svg viewBox="0 0 132 132" className="gs-stamp-svg" aria-label={copy.stamps.s1Main}>
                      <circle cx="66" cy="66" r="61" fill="none" stroke="#1A2B49" strokeWidth="2.2" />
                      <circle
                        cx="66"
                        cy="66"
                        r="54"
                        fill="none"
                        stroke="#FF5533"
                        strokeWidth="1.2"
                        strokeDasharray="4 3"
                      />
                      <line x1="22" y1="45" x2="110" y2="45" stroke="#1A2B49" strokeWidth="1" strokeOpacity="0.35" />
                      <line x1="22" y1="87" x2="110" y2="87" stroke="#1A2B49" strokeWidth="1" strokeOpacity="0.35" />
                      <text x="66" y="37" textAnchor="middle" fill="#5D6B82" fontSize="7.5" fontWeight="800" letterSpacing="1.2">
                        {copy.stamps.s1Top}
                      </text>
                      <text x="66" y="72" textAnchor="middle" fill="#1A2B49" fontSize="18" fontWeight="900" letterSpacing="0.5">
                        {copy.stamps.s1Main}
                      </text>
                      <text x="66" y="102" textAnchor="middle" fill="#1A2B49" fontSize="8" fontWeight="800" letterSpacing="1.4">
                        {copy.stamps.s1Bottom}
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Stamp 2: Rectangular Chamber Delegate Seal */}
                <div className="gs-stamp">
                  <div className="gs-stamp-inner gs-tilt-2">
                    <svg viewBox="0 0 164 106" className="gs-stamp-svg gs-stamp-rect" aria-label={copy.stamps.s2Top}>
                      <rect x="3" y="3" width="158" height="100" rx="10" fill="none" stroke="#1A2B49" strokeWidth="2.2" />
                      <rect x="8" y="8" width="148" height="90" rx="6" fill="none" stroke="#1A2B49" strokeWidth="0.9" strokeOpacity="0.45" />
                      <circle cx="20" cy="20" r="2.2" fill="#FF5533" />
                      <circle cx="144" cy="20" r="2.2" fill="#FF5533" />
                      <circle cx="20" cy="86" r="2.2" fill="#FF5533" />
                      <circle cx="144" cy="86" r="2.2" fill="#FF5533" />
                      <text x="82" y="34" textAnchor="middle" fill="#5D6B82" fontSize="8" fontWeight="800" letterSpacing="1.2">
                        {copy.stamps.s2Top}
                      </text>
                      <text x="82" y="60" textAnchor="middle" fill="#1A2B49" fontSize="16" fontWeight="900" letterSpacing="1">
                        {copy.stamps.s2Main}
                      </text>
                      <text x="82" y="81" textAnchor="middle" fill="#1A2B49" fontSize="8.2" fontWeight="800" letterSpacing="1.3">
                        {copy.stamps.s2Bottom}
                      </text>
                    </svg>
                  </div>
                </div>

                {/* Stamp 3: Framed TÜRSAB 14988 Seal */}
                <div className="gs-stamp">
                  <div className="gs-stamp-inner gs-tilt-3">
                    <svg viewBox="0 0 156 106" className="gs-stamp-svg gs-stamp-rect" aria-label="TÜRSAB 14988">
                      <rect x="3" y="3" width="150" height="100" rx="4" fill="none" stroke="#1A2B49" strokeWidth="2.2" />
                      <rect x="9" y="9" width="138" height="88" rx="2" fill="none" stroke="#FF5533" strokeWidth="1.2" strokeDasharray="5 3" />
                      <text x="78" y="34" textAnchor="middle" fill="#5D6B82" fontSize="8.2" fontWeight="800" letterSpacing="1.4">
                        {copy.stamps.s3Top}
                      </text>
                      <text x="78" y="61" textAnchor="middle" fill="#1A2B49" fontSize="18" fontWeight="900" letterSpacing="1.5">
                        {copy.stamps.s3Main}
                      </text>
                      <text x="78" y="81" textAnchor="middle" fill="#1A2B49" fontSize="8" fontWeight="800" letterSpacing="1.3">
                        {copy.stamps.s3Bottom}
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TV feature, designed as its own section in the page flow:
            section head in the route-head pattern, then a click-to-play
            facade (the video's own thumbnail + play button) so no YouTube
            iframe loads until the visitor chooses to watch — faster page,
            cleaner first paint. Playback starts at 0:25, where Ergin
            appears in the Topkapi Palace Night Museum programme. */}
        <div className="gs-video">
          <div className="gs-video-head">
            <span className="gs-route-kicker">{copy.video.kicker}</span>
            <h3 className="gs-route-title">{copy.video.title}</h3>
          </div>
          <div className="gs-video-frame">
            {videoOn ? (
              <iframe
                src="https://www.youtube-nocookie.com/embed/F_U0Zlypl54?start=25&autoplay=1&rel=0"
                title="Topkapi Palace Night Museum — TV feature with Ergin Karakoyun"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <button
                type="button"
                className="gs-video-facade"
                onClick={() => setVideoOn(true)}
                aria-label={copy.video.play}
              >
                <img
                  src="https://i.ytimg.com/vi/F_U0Zlypl54/maxresdefault.jpg"
                  alt=""
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.includes('hqdefault')) {
                      img.src = 'https://i.ytimg.com/vi/F_U0Zlypl54/hqdefault.jpg';
                    }
                  }}
                />
                <span className="gs-video-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <p className="gs-video-caption">{copy.video.caption}</p>
        </div>

        {/* National Geographic, 1996: Ergin's own archive clip of the
            channel broadcast — self-hosted file behind the same kind of
            click-to-play facade, so nothing heavy loads until clicked. */}
        <div className="gs-video">
          <div className="gs-video-head">
            <span className="gs-route-kicker">{copy.natgeo.kicker}</span>
            <h3 className="gs-route-title">{copy.natgeo.title}</h3>
          </div>
          <div className="gs-video-frame natgeo">
            {natgeoOn ? (
              <video
                src="/img/natgeo-1996.mp4"
                poster="/img/natgeo-1996-poster.jpg"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <button
                type="button"
                className="gs-video-facade"
                onClick={() => setNatgeoOn(true)}
                aria-label={copy.natgeo.play}
              >
                <img src="/img/natgeo-1996-poster.jpg" alt="" loading="lazy" />
                <span className="gs-video-play" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="30" height="30">
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          <p className="gs-video-caption">{copy.natgeo.caption}</p>
        </div>

        {/* Bottom full-width Heritage Route with GSAP DrawSVG */}
        <div className="gs-route">
          <div className="gs-route-head">
            <span className="gs-route-kicker">{copy.route.kicker}</span>
            <h3 className="gs-route-title">{copy.route.title}</h3>
          </div>

          {/* Desktop DrawSVG connecting route line */}
          <svg
            className="gs-route-svg"
            viewBox="0 0 900 36"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M 112.5 18 Q 225 4 337.5 18 T 562.5 18 T 787.5 18"
              stroke="#E3E8EF"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              ref={routePathRef}
              d="M 112.5 18 Q 225 4 337.5 18 T 562.5 18 T 787.5 18"
              stroke="#FF5533"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="112.5" cy="18" r="5" fill="#1A2B49" />
            <circle cx="337.5" cy="18" r="5" fill="#1A2B49" />
            <circle cx="562.5" cy="18" r="5" fill="#1A2B49" />
            <circle cx="787.5" cy="18" r="5" fill="#1A2B49" />
          </svg>

          <div className="gs-stops">
            {copy.route.stops.map((stop, idx) => (
              <div
                key={stop.era}
                className={`gs-stop ${activeStop === idx ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveStop(idx)}
                onFocus={() => setActiveStop(idx)}
              >
                <div className="gs-stop-era">{stop.era}</div>
                <h4 className="gs-stop-title">{stop.title}</h4>
                <p className="gs-stop-desc">{stop.desc}</p>
                <div className="gs-stop-links">
                  {stop.tourSlugs.map((slug) =>
                    tourNames[slug] ? (
                      <Link
                        key={slug}
                        href={`/${locale}/tours/${slug}`}
                        className="gs-stop-link"
                      >
                        <span>{tourNames[slug]}</span>
                        <span className="gs-stop-arrow" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    ) : null,
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
