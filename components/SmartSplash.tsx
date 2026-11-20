'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function SmartSplash() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const closingRef = useRef(false);
  const closeTlRef = useRef<gsap.core.Timeline | null>(null);

  const openDoors = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;

    const root = rootRef.current;
    if (!root) {
      document.documentElement.classList.add('splash-done');
      setVisible(false);
      return;
    }

    // Unlock interaction underneath immediately while doors part
    root.style.pointerEvents = 'none';

    const tl = gsap.timeline({
      onComplete: () => {
        document.documentElement.classList.add('splash-done');
        setVisible(false);
      },
    });
    closeTlRef.current = tl;

    tl.to('.ss-center', {
      opacity: 0,
      scale: 0.94,
      duration: 0.24,
      ease: 'power2.in',
    })
      .to(
        '.ss-seam',
        {
          opacity: 0,
          duration: 0.18,
          ease: 'power1.out',
        },
        '<',
      )
      .to(
        '.ss-door-left',
        {
          xPercent: -102,
          duration: 0.68,
          ease: 'power4.inOut',
        },
        '-=0.1',
      )
      .to(
        '.ss-door-right',
        {
          xPercent: 102,
          duration: 0.68,
          ease: 'power4.inOut',
        },
        '<',
      );
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (document.documentElement.classList.contains('splash-done')) {
      setVisible(false);
      return;
    }

    const root = rootRef.current;
    if (!root) return;

    let cancelled = false;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ss-center',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.34, ease: 'power2.out' },
      );
      gsap.fromTo(
        '.ss-seam-fill',
        { scaleY: 0 },
        { scaleY: 1, duration: 0.45, ease: 'power2.out' },
      );
    }, root);

    const minDelay = new Promise<void>((resolve) => setTimeout(resolve, 420));
    const maxDelay = new Promise<void>((resolve) => setTimeout(resolve, 850));

    const fontsReady: Promise<unknown> =
      typeof document !== 'undefined' && document.fonts?.ready
        ? document.fonts.ready.catch(() => undefined)
        : Promise.resolve();

    const poster = document.querySelector<HTMLImageElement>('.hero-media img.poster');
    const posterReady =
      !poster || poster.complete
        ? Promise.resolve()
        : new Promise<void>((resolve) => {
            const done = () => resolve();
            poster.addEventListener('load', done, { once: true });
            poster.addEventListener('error', done, { once: true });
          });

    Promise.all([
      minDelay,
      Promise.race([Promise.all([fontsReady, posterReady]), maxDelay]),
    ]).then(() => {
      if (!cancelled) openDoors();
    });

    const safetyTimer = setTimeout(() => {
      if (!cancelled) openDoors();
    }, 2400);

    return () => {
      cancelled = true;
      clearTimeout(safetyTimer);
      closeTlRef.current?.kill();
      ctx.revert();
    };
  }, [openDoors]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="ss-root"
      role="presentation"
      aria-hidden="true"
      onClick={openDoors}
    >
      <div className="ss-door ss-door-left" />
      <div className="ss-door ss-door-right" />
      <div className="ss-seam">
        <div className="ss-seam-fill" />
      </div>
      <div className="ss-center">
        <svg className="ss-arch-svg" viewBox="0 0 72 84" aria-hidden="true">
          <path
            fill="#FFFFFF"
            fillRule="evenodd"
            d="M10,78 L10,44 C10,26 20,15 36,13 C52,15 62,26 62,44 L62,78 Z M24,78 L24,46 A12,12 0 0 1 48,46 L48,78 Z"
          />
          <polygon points="30.5,17 41.5,17 36,4" fill="#FF5533" />
        </svg>
        <div className="ss-wordmark">
          <strong>OLIGARCH</strong>
          <small>TRAVEL</small>
        </div>
        <span className="ss-loc">ISTANBUL · SULTANAHMET</span>
      </div>
    </div>
  );
}
