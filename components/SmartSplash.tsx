'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin';

export default function SmartSplash() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement>(null);
  const yearRef = useRef<HTMLSpanElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const openedRef = useRef(false);

  const finishSplash = useCallback(() => {
    document.documentElement.classList.add('splash-done');
    setVisible(false);
  }, []);

  const triggerOpen = useCallback(() => {
    if (openedRef.current) return;
    openedRef.current = true;

    const root = rootRef.current;
    if (root) root.style.pointerEvents = 'none';

    const tl = tlRef.current;
    if (tl && tl.labels && typeof tl.labels.open === 'number') {
      if (tl.time() < tl.labels.open) {
        tl.play('open');
      } else {
        tl.play();
      }
    } else {
      finishSplash();
    }
  }, [finishSplash]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (document.documentElement.classList.contains('splash-done')) {
      setVisible(false);
      return;
    }

    const root = rootRef.current;
    if (!root) return;

    // Reset state cleanly across React StrictMode double invocation
    openedRef.current = false;
    root.style.pointerEvents = 'auto';

    gsap.registerPlugin(DrawSVGPlugin);

    const ctx = gsap.context(() => {
      const yearState = { y: 1994 };

      gsap.set('.ss-draw', { drawSVG: '0% 0%' });
      gsap.set('.ss-light-slit', { scaleY: 0, scaleX: 1, opacity: 0 });
      gsap.set('.ss-door-left', { xPercent: 0 });
      gsap.set('.ss-door-right', { xPercent: 0 });

      const tl = gsap.timeline({
        onComplete: finishSplash,
      });
      tlRef.current = tl;

      // Stage 1 (0.00s -> 0.56s): Immediate arch drawing + year ticker + sunlight slit ignition
      tl.to(
        '.ss-draw',
        {
          drawSVG: '0% 100%',
          duration: 0.54,
          stagger: 0.05,
          ease: 'power2.inOut',
        },
        0,
      )
        .to(
          yearState,
          {
            y: 2026,
            duration: 0.54,
            ease: 'power2.out',
            onUpdate: () => {
              if (yearRef.current) {
                yearRef.current.textContent = String(Math.round(yearState.y));
              }
            },
          },
          0,
        )
        .to(
          '.ss-light-slit',
          {
            scaleY: 1,
            opacity: 1,
            duration: 0.44,
            ease: 'power2.out',
          },
          0.12,
        )
        // Stage 2 (0.52s -> 0.64s): Unlatch anticipation — pulls gleam & sunlight widens through crack
        .to(
          '.ss-pull',
          {
            opacity: 1,
            scaleY: 1.15,
            transformOrigin: 'center',
            duration: 0.14,
            ease: 'power2.out',
          },
          0.5,
        )
        .to(
          '.ss-light-slit',
          {
            scaleX: 3.5,
            duration: 0.16,
            ease: 'power2.in',
          },
          0.5,
        )
        // Stage 3 ('open' at 0.64s): Doors sweep open smoothly carrying split arch, pulls, moldings & coords
        .addLabel('open', 0.64)
        .call(
          () => {
            openedRef.current = true;
            if (rootRef.current) {
              rootRef.current.style.pointerEvents = 'none';
            }
          },
          undefined,
          'open',
        )
        .to(
          '.ss-hud',
          {
            opacity: 0,
            y: -10,
            duration: 0.22,
            ease: 'power2.in',
          },
          'open',
        )
        .to(
          '.ss-light-slit',
          {
            opacity: 0,
            duration: 0.22,
            ease: 'power1.out',
          },
          'open',
        )
        .to(
          '.ss-door-left',
          {
            xPercent: -102,
            duration: 0.72,
            ease: 'power4.inOut',
          },
          'open+=0.04',
        )
        .to(
          '.ss-door-right',
          {
            xPercent: 102,
            duration: 0.72,
            ease: 'power4.inOut',
          },
          'open+=0.04',
        );
    }, root);

    const safetyTimer = setTimeout(finishSplash, 2600);

    return () => {
      clearTimeout(safetyTimer);
      tlRef.current?.kill();
      tlRef.current = null;
      ctx.revert();
    };
  }, [finishSplash]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="ss-root"
      role="presentation"
      aria-hidden="true"
      onClick={triggerOpen}
    >
      {/* Left Palace Door Leaf */}
      <div className="ss-door ss-door-left">
        <div className="ss-panel-frame" />
        <svg className="ss-arch-half ss-arch-left" viewBox="0 0 100 220" aria-hidden="true">
          <path
            className="ss-draw"
            d="M 100 22 C 52 24 22 64 22 126 L 22 204 L 100 204"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="ss-draw"
            d="M 100 56 C 70 58 52 84 52 126 L 52 204"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d="M 100 6 L 88 26 L 100 26 Z" fill="#FF5533" />
          <rect
            className="ss-pull"
            x="86"
            y="114"
            width="4"
            height="32"
            rx="2"
            fill="#FFFFFF"
            opacity="0.72"
          />
        </svg>
        <span className="ss-coord ss-coord-l">41.0086° N</span>
      </div>

      {/* Right Palace Door Leaf */}
      <div className="ss-door ss-door-right">
        <div className="ss-panel-frame" />
        <svg className="ss-arch-half ss-arch-right" viewBox="0 0 100 220" aria-hidden="true">
          <path
            className="ss-draw"
            d="M 0 22 C 48 24 78 64 78 126 L 78 204 L 0 204"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            className="ss-draw"
            d="M 0 56 C 30 58 48 84 48 126 L 48 204"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d="M 0 6 L 12 26 L 0 26 Z" fill="#FF5533" />
          <rect
            className="ss-pull"
            x="10"
            y="114"
            width="4"
            height="32"
            rx="2"
            fill="#FFFFFF"
            opacity="0.72"
          />
        </svg>
        <span className="ss-coord ss-coord-r">28.9802° E</span>
      </div>

      {/* Warm Sunlight Crack Along Center Seam */}
      <div className="ss-light-slit" />

      {/* Top Brand Wordmark & Bottom Live Year Counter */}
      <div className="ss-hud">
        <div className="ss-brand-top">
          <strong>OLIGARCH</strong>
          <small>TRAVEL</small>
        </div>
        <div className="ss-year-bar">
          <span ref={yearRef}>1994</span>
          <span className="ss-year-sep" aria-hidden="true">·</span>
          <span>ISTANBUL OLD CITY</span>
        </div>
      </div>
    </div>
  );
}
