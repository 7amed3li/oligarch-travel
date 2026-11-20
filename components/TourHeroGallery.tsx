'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/data/tours';

interface TourHeroGalleryProps {
  locale: Locale;
  backLabel: string;
  title: string;
  tagline: string;
  duration: string;
  group: string;
  rating?: string;
  images: string[];
}

const LABELS: Record<
  Locale,
  { viewPhotos: string; close: string; prev: string; next: string }
> = {
  en: { viewPhotos: 'View photos', close: 'Close gallery', prev: 'Previous photo', next: 'Next photo' },
  de: { viewPhotos: 'Fotos ansehen', close: 'Galerie schließen', prev: 'Vorheriges Foto', next: 'Nächstes Foto' },
  zh: { viewPhotos: '查看大图', close: '关闭相册', prev: '上一张', next: '下一张' },
  tr: { viewPhotos: 'Fotoğrafları gör', close: 'Galeriyi kapat', prev: 'Önceki fotoğraf', next: 'Sonraki fotoğraf' },
};

export default function TourHeroGallery({
  locale,
  backLabel,
  title,
  tagline,
  duration,
  group,
  rating,
  images,
}: TourHeroGalleryProps) {
  const safeImages = images.length > 0 ? images : ['hero.webp'];
  const t = LABELS[locale] ?? LABELS.en;
  const [activeIdx, setActiveIdx] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const count = safeImages.length;
  const currentImg = safeImages[activeIdx] || safeImages[0];

  useEffect(() => {
    setActiveIdx(0);
    setLightboxOpen(false);
  }, [title, count]);

  useEffect(() => {
    if (!lightboxOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowRight' && count > 1) {
        setActiveIdx((i) => (i + 1) % count);
      } else if (e.key === 'ArrowLeft' && count > 1) {
        setActiveIdx((i) => (i - 1 + count) % count);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [lightboxOpen, count]);

  return (
    <>
      <div className="td-hero">
        <div className="td-hero-media">
          <img
            key={currentImg}
            src={`/img/${currentImg}`}
            alt={title}
            className="td-hero-bg"
            fetchPriority="high"
            decoding="async"
          />
          <div className="td-hero-scrim" aria-hidden="true" />
        </div>

        <div className="wrap td-hero-inner">
          <div className="td-hero-top">
            <Link href={`/${locale}#tours`} className="td-back-pill">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              <span>{backLabel}</span>
            </Link>

            {rating ? (
              <div className="td-rating-pill">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="#FF5533"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                <span>{rating}</span>
              </div>
            ) : null}
          </div>

          <div className="td-hero-bottom">
            <div className="td-hero-copy">
              <div className="td-hero-pills">
                <span>{duration}</span>
                <span className="td-dot" aria-hidden="true" />
                <span>{group}</span>
              </div>
              <h1 className="td-hero-title">{title}</h1>
              <p className="td-hero-tag">{tagline}</p>
            </div>

            <div className="td-hero-controls">
              {count > 1 ? (
                <div className="td-thumbs" role="tablist" aria-label={t.viewPhotos}>
                  {safeImages.map((img, idx) => (
                    <button
                      key={img}
                      type="button"
                      role="tab"
                      aria-selected={idx === activeIdx}
                      aria-label={`${title} (${idx + 1}/${count})`}
                      className={idx === activeIdx ? 'td-thumb is-active' : 'td-thumb'}
                      onClick={() => setActiveIdx(idx)}
                    >
                      <img src={`/img/${img}`} alt="" loading="lazy" decoding="async" width={56} height={40} />
                    </button>
                  ))}
                </div>
              ) : null}

              <button
                type="button"
                className="td-expand-btn"
                onClick={() => setLightboxOpen(true)}
                aria-label={t.viewPhotos}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
                <span>{count > 1 ? `${activeIdx + 1} / ${count}` : t.viewPhotos}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen ? (
        <div
          className="td-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={title}
          onClick={() => setLightboxOpen(false)}
        >
          <div className="td-lb-stage" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="td-lb-close"
              onClick={() => setLightboxOpen(false)}
              aria-label={t.close}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <img
              src={`/img/${currentImg}`}
              alt={`${title} (${activeIdx + 1}/${count})`}
              className="td-lb-img"
            />

            {count > 1 ? (
              <div className="td-lb-nav">
                <button
                  type="button"
                  className="td-lb-arrow"
                  onClick={() => setActiveIdx((i) => (i - 1 + count) % count)}
                  aria-label={t.prev}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <span className="td-lb-count">
                  {activeIdx + 1} / {count}
                </span>
                <button
                  type="button"
                  className="td-lb-arrow"
                  onClick={() => setActiveIdx((i) => (i + 1) % count)}
                  aria-label={t.next}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
