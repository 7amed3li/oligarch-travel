'use client';
import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    if (typeof window === 'undefined') return;

    const reduceMotion =
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    // Use Lenis smooth wheel scroll only on fine-pointer desktops so mobile touch uses native 120Hz scrolling.
    const isDesktopPointer =
      window.matchMedia &&
      window.matchMedia('(pointer: fine)').matches;

    let lenis: Lenis | null = null;
    let tickerCallback: ((time: number) => void) | null = null;

    if (isDesktopPointer) {
      lenis = new Lenis({
        duration: 1.05,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      tickerCallback = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-content .kicker',
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', delay: 0.05 },
      );
      gsap.fromTo(
        '.hero-content h1',
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out', delay: 0.14 },
      );
      gsap.fromTo(
        '.hero-content .hero-sub',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', delay: 0.22 },
      );
      gsap.fromTo(
        '.bookbar',
        { opacity: 0, y: 16, scale: 0.985 },
        { opacity: 1, y: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.3 },
      );

      const trustItems = document.querySelectorAll('.trust-item');
      if (trustItems.length > 0) {
        gsap.fromTo(
          trustItems,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.48,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.trust-strip',
              start: 'top 92%',
              once: true,
            },
          },
        );
      }

      const cards = document.querySelectorAll('.tcard-luxury, .tcard');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.55,
            stagger: 0.05,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#tours',
              start: 'top 88%',
              once: true,
            },
          },
        );
      }
    });

    return () => {
      ctx.revert();
      if (tickerCallback) gsap.ticker.remove(tickerCallback);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}
