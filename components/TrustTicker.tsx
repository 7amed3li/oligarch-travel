'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function TrustTicker({ items }: { items: [string, string][] }) {
  const stripRef = useRef<HTMLDivElement>(null);
  const trackWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const strip = stripRef.current;
    const trackWrap = trackWrapRef.current;
    if (!strip || !trackWrap || typeof window === 'undefined') return;

    const mm = gsap.matchMedia();

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const tween = gsap.fromTo(
        trackWrap,
        { xPercent: 0 },
        {
          xPercent: -50,
          duration: 24,
          ease: 'none',
          repeat: -1,
        },
      );

      const slowDown = () => gsap.to(tween, { timeScale: 0, duration: 0.45, ease: 'power2.out' });
      const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.6, ease: 'power2.inOut' });

      strip.addEventListener('pointerenter', slowDown);
      strip.addEventListener('pointerleave', resume);
      strip.addEventListener('touchstart', slowDown, { passive: true });
      strip.addEventListener('touchend', resume, { passive: true });
      strip.addEventListener('touchcancel', resume, { passive: true });

      return () => {
        strip.removeEventListener('pointerenter', slowDown);
        strip.removeEventListener('pointerleave', resume);
        strip.removeEventListener('touchstart', slowDown);
        strip.removeEventListener('touchend', resume);
        strip.removeEventListener('touchcancel', resume);
        tween.kill();
        gsap.set(trackWrap, { clearProps: 'transform' });
      };
    });

    return () => mm.revert();
  }, [items]);

  return (
    <div className="trust-strip" ref={stripRef}>
      <div className="wrap trust-in" ref={trackWrapRef}>
        <div className="trust-track">
          {items.map(([v, l]) => (
            <div className="trust-item" key={l}>
              <div className="trust-val">{v}</div>
              <div className="trust-lbl">{l}</div>
            </div>
          ))}
        </div>
        <div className="trust-track trust-track-dup" aria-hidden="true">
          {items.map(([v, l]) => (
            <div className="trust-item" key={`dup-${l}`}>
              <div className="trust-val">{v}</div>
              <div className="trust-lbl">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
