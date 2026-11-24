'use client';

import { useState, useRef, MouseEvent } from 'react';
import Link from 'next/link';
import { RATINGS, TOURS, type Locale } from '@/data/tours';
import { fmtMoney } from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';

const IMG_POS: Record<string, string> = {
  'hagia-sophia': 'center 58%',
  'topkapi-palace': 'center 35%',
  'basilica-cistern': 'center 50%',
  'sultanahmet-hippodrome': 'center 20%',
  'full-day-istanbul': 'center 40%',
  'half-day-istanbul': 'center 45%',
  'bazaars-tour': 'center 20%',
};

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
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // Subtle 3D tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotX = ((y - centerY) / centerY) * -3;
    const rotY = ((x - centerX) / centerX) * 3;
    setRotation({ x: rotX, y: rotY });
  };

  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <Link
      ref={cardRef}
      className="tcard-luxury"
      href={`/${locale}/tours/${tid}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={
        isHovered
          ? {
              transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) translateY(-6px)`,
            }
          : undefined
      }
    >
      {/* Radial Spotlight Sheen */}
      <div
        className="tcard-spotlight"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 85, 51, 0.08), transparent 70%)`,
        }}
      />

      {/* Card Image */}
      <div className="tcard-media">
        <img
          src={`/img/${t.img}`}
          alt={c.name}
          loading="lazy"
          decoding="async"
          style={IMG_POS[tid] ? { objectPosition: IMG_POS[tid] } : undefined}
        />
        {r?.badge ? (
          <span className="tcard-badge-excellence">
            {r.badge[locale]}
          </span>
        ) : null}
        {tid === 'half-day-istanbul' ? (
          <span
            className="tcard-tabii"
            role="link"
            aria-label="tabii — Like a Dream: Istanbul"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              window.open('https://www.tabii.com/ar/watch/182973', '_blank', 'noopener');
            }}
          >
            <svg viewBox="0 0 24 24" width="10" height="10" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
            tabii
          </span>
        ) : null}
      </div>

      {/* Card Content Area */}
      <div className="tcard-content">
        {/* Rating Line */}
        {r && r[locale] ? (
          <div className="tcard-rating-row">
            <span className="tcard-star">★</span>
            <span className="tcard-rating-val">{r[locale]}</span>
          </div>
        ) : null}

        {/* Tour Title */}
        <h3 className="tcard-title">{c.name}</h3>

        {/* Meta: Duration and Group */}
        <div className="tcard-meta-line">
          {c.duration} · {c.group}
        </div>

        {/* Skip the line hint if available */}
        {price?.ticket && u.tickets_available ? (
          <div className="tcard-ticket-hint">
            {u.tickets_available}
          </div>
        ) : null}

        {/* Fine Hairline Separator */}
        <div className="tcard-divider" />

        {/* Card Footer: Price Stack + Tactile 3D Button */}
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
