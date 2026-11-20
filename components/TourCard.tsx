'use client';

import { useState, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import { RATINGS, TOURS, type Locale } from '@/data/tours';
import { fmtMoney } from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';

export default function TourCard({
  locale,
  tid,
  price,
  u,
}: {
  locale: Locale;
  tid: string;
  price: TourPrice;
  u: any;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const t = TOURS[tid];
  const c = t?.content[locale];
  const r = RATINGS[tid];

  if (!t || !c) return null;

  const isFree = price && price.perGroup === 0 && price.perPerson === 0;

  let priceMain = '';
  let priceUnit = '';
  if (price) {
    if (price.luxuryGroup) {
      priceMain = `${fmtMoney(price.currency, price.perGroup)}–${fmtMoney(price.currency, price.luxuryGroup)}`;
      priceUnit = u.per_group || '/ group';
    } else if (price.perPerson > 0 && price.perGroup === 0) {
      priceMain = fmtMoney(price.currency, price.perPerson);
      priceUnit = u.per_person || '/ person';
    } else if (price.perGroup > 0) {
      priceMain = fmtMoney(price.currency, price.perGroup);
      priceUnit = u.per_group || '/ group';
    }
  }

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D tilt calculation (dqnamo & React Bits pattern)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -3.2;
    const rotY = ((x - centerX) / centerX) * 3.2;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  const fastTrackText =
    locale === 'zh'
      ? '含免排队'
      : locale === 'de'
      ? 'Skip-the-Line'
      : locale === 'tr'
      ? 'Hızlı Giriş'
      : 'Fast-Track';

  return (
    <Link
      ref={cardRef}
      className="tcard-luxury"
      href={`/${locale}/tours/${tid}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-8px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
      }}
    >
      {/* React Bits Interactive Radial Spotlight Sheen */}
      <div
        className="tcard-spotlight"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(420px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 85, 51, 0.08), transparent 70%)`,
        }}
      />

      {/* Card Image Area with Overlays */}
      <div className="tcard-media">
        <img src={`/img/${t.img}`} alt={c.name} loading="lazy" />
        <div className="tcard-media-gradient" />

        {/* Floating Top Badges */}
        <div className="tcard-top-badges">
          {r?.badge ? (
            <span className="tcard-badge-excellence">
              <span className="tcard-badge-icon">★</span>
              <span>{r.badge[locale]}</span>
            </span>
          ) : (
            <span />
          )}

          {price?.ticket ? (
            <span className="tcard-badge-ticket">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>{fastTrackText}</span>
            </span>
          ) : null}
        </div>

        {/* Floating Duration Chip */}
        {c.duration ? (
          <div className="tcard-duration-chip">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{c.duration}</span>
          </div>
        ) : null}
      </div>

      {/* Card Content Area */}
      <div className="tcard-content">
        {/* Rating Row */}
        {r && r[locale] ? (
          <div className="tcard-rating-row">
            <span className="tcard-star">★</span>
            <span className="tcard-rating-val">{r[locale]}</span>
          </div>
        ) : null}

        {/* Tour Title */}
        <h3 className="tcard-title">{c.name}</h3>

        {/* Tour Specs / Group Size */}
        <div className="tcard-group-row">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <span>{c.group}</span>
        </div>

        {/* Clean Hairline Separator */}
        <div className="tcard-divider" />

        {/* Card Footer: Price Stack + The Kitchen dqnamo 3D Button */}
        <div className="tcard-footer">
          <div className="tcard-price-stack">
            {isFree ? (
              <div className="tcard-free-tag">{u.free || 'Free'}</div>
            ) : (
              <>
                <span className="tcard-from-label">{u.price_from || 'From'}</span>
                <div className="tcard-price-line">
                  <span className="tcard-amount">{priceMain}</span>
                  {priceUnit ? <span className="tcard-unit">{priceUnit}</span> : null}
                </div>
                {price?.ticket ? (
                  <span className="tcard-ticket-note">
                    + {u.tickets_word || 'ticket'} {u.per_person}
                  </span>
                ) : null}
              </>
            )}
          </div>

          <div className="tcard-action">
            <span className="tcard-dqnamo-btn">
              <span>{u.details_link || 'View details'}</span>
              <span className="tcard-btn-arrow">→</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
