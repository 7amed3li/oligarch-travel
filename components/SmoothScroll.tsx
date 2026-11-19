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

    gsap.registerPlugin(ScrollTrigger);

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCallback);
    gsap.ticker.lagSmoothing(0);

    // GSAP ScrollTrigger Animations for site elements (React Bits & GSAP feel)
    const ctx = gsap.context(() => {
      // Hero content entrance
      gsap.fromTo(
        '.hero-content .kicker',
        { opacity: 0, y: -14, filter: 'blur(4px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.7, ease: 'power2.out', delay: 0.1 }
      );
      gsap.fromTo(
        '.hero-content h1',
        { opacity: 0, y: 20, filter: 'blur(6px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.8, ease: 'power3.out', delay: 0.25 }
      );
      gsap.fromTo(
        '.hero-content .hero-sub',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', delay: 0.4 }
      );
      gsap.fromTo(
        '.bookbar',
        { opacity: 0, y: 25, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.2)', delay: 0.55 }
      );

      // Trust strip stagger
      const trustItems = document.querySelectorAll('.trust-item');
      if (trustItems.length > 0) {
        gsap.fromTo(
          trustItems,
          { opacity: 0, y: 16 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.trust-strip',
              start: 'top 92%',
              once: true,
            },
          }
        );
      }

      // Tour cards stagger reveal with smooth spring
      const cards = document.querySelectorAll('.tcard');
      if (cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 35, scale: 0.97 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            stagger: 0.07,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: '#tours',
              start: 'top 85%',
              once: true,
            },
          }
        );
      }

      // Why choose us items
      const whyItems = document.querySelectorAll('.why-item');
      if (whyItems.length > 0) {
        gsap.fromTo(
          whyItems,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: '.cols3',
              start: 'top 88%',
              once: true,
            },
          }
        );
      }
    });

    return () => {
      ctx.revert();
      gsap.ticker.remove(tickerCallback);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
