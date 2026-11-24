'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

const N = [1, 2, 3, 4, 5];

export default function BtsGallery({ label }: { label: string }) {
  const [open, setOpen] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d: number) => {
    setOpen((cur) => (cur === null ? cur : (cur + d + N.length) % N.length));
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close, step]);

  return (
    <>
      <div className="bts-marquee" aria-label={label}>
        <div className="bts-track">
          {[0, 1].map((half) => (
            <div className="bts-half" key={half} aria-hidden={half === 1}>
              {N.map((n, i) => (
                <button
                  key={n}
                  type="button"
                  className="bts-item"
                  tabIndex={half === 1 ? -1 : 0}
                  onClick={() => setOpen(i)}
                  aria-label={`${label} — ${n} / ${N.length}`}
                >
                  <img src={`/img/tabii-bts-${n}.jpg`} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
      {open !== null && (
        <div
          className="lb-root"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={close}
          onTouchStart={(e) => {
            touchX.current = e.touches[0].clientX;
          }}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            touchX.current = null;
            if (dx > 40) step(-1);
            else if (dx < -40) step(1);
          }}
        >
          <button type="button" className="lb-btn lb-close" onClick={close} aria-label="Close">
            ×
          </button>
          <button
            type="button"
            className="lb-btn lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous"
          >
            ‹
          </button>
          <img
            className="lb-img"
            src={`/img/tabii-bts-${N[open]}-lg.jpg`}
            alt=""
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lb-btn lb-next"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next"
          >
            ›
          </button>
          <span className="lb-count">
            {open + 1} / {N.length}
          </span>
        </div>
      )}
    </>
  );
}
