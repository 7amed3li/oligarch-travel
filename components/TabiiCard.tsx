'use client';

import { useEffect, useState } from 'react';
import { UI, type Locale } from '@/data/tours';

const TABII_URL = 'https://www.tabii.com/tr/watch/182973';

// Ergin (2026-11-24): the tabii card must not feel like leaving the site.
// The streaming player cannot be embedded, so the card now opens an
// in-page window with the scene and episode info; only the final
// "Watch on tabii" button goes out to tabii.
export default function TabiiCard({ locale }: { locale: Locale }) {
  const u = UI[locale];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open ]);

  return (
    <>
      <button
        type="button"
        className="tabii-card"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
      >
        <img
          className="tabii-scene"
          src="/img/tabii-scene-v2.jpg"
          alt="Like a Dream: Istanbul — TRT tabii"
          loading="lazy"
        />
        <img className="tabii-badge" src="/img/tabii-badge.jpg" alt="" aria-hidden="true" />
      </button>

      {open && (
        <div
          className="tabii-modal-backdrop"
          onClick={() => setOpen(false)}
          role="presentation"
        >
          <div
            className="tabii-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Like a Dream: Istanbul — TRT tabii"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="tabii-modal-x"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img className="tabii-modal-img" src="/img/tabii-scene-v2.jpg" alt="" />
            <div className="tabii-modal-body">
              <h3>Like a Dream: Istanbul</h3>
              <p>{u.tabii_modal_text}</p>
              <a
                className="tabii-modal-btn"
                href={TABII_URL}
                target="_blank"
                rel="noopener"
              >
                {u.tabii_watch}
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
