'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Logo from './Logo';
import { useCart } from './CartProvider';
import { LOCALES, type Locale } from '@/data/tours';

const LANG_LABEL: Record<Locale, string> = { en: 'EN', de: 'DE', zh: '中文' };
const LANG_NAME: Record<Locale, string> = { en: 'English', de: 'Deutsch', zh: '中文' };
const LANG_FLAG: Record<Locale, string> = { en: '🇬🇧', de: '🇩🇪', zh: '🇨🇳' };

export default function Header({
  locale,
  u,
  segment,
}: {
  locale: Locale;
  u: any;
  segment: string; // path after /{locale}/, e.g. '' | 'booking' | 'tours/hs-guided'
}) {
  const { count } = useCart();
  const base = `/${locale}`;
  // Progressive enhancement only: the dropdown itself is a native
  // <details> element and opens/selects with zero JavaScript (the
  // static preview snapshot strips scripts). JS just adds
  // close-on-outside-click and close-on-Escape.
  const langRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const el = langRef.current;
    if (!el) return;
    const onDocClick = (e: MouseEvent) => {
      if (el.open && !el.contains(e.target as Node)) el.removeAttribute('open');
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') el.removeAttribute('open');
    };
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);
  return (
    <header className="site">
      <div className="wrap header-in">
        <Link href={base} aria-label="Oligarch Travel">
          <Logo />
        </Link>
        <nav className="main">
          <Link href={`${base}#tours`}>{u.nav_tours}</Link>
          <Link href={`${base}#about`}>{u.nav_about}</Link>
          <Link href={`${base}#reviews`}>{u.nav_reviews}</Link>
          <Link href={`${base}#contact`}>{u.nav_contact}</Link>
        </nav>
        <details className="lang-menu" ref={langRef}>
          <summary className="lang-btn" aria-label="Language">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18" />
              <path d="M12 3c2.5 2.6 3.9 5.7 3.9 9s-1.4 6.4-3.9 9c-2.5-2.6-3.9-5.7-3.9-9S9.5 5.6 12 3z" />
            </svg>
            <span className="lang-cur-full">{LANG_NAME[locale]}</span>
            <span className="lang-cur-short">{LANG_LABEL[locale]}</span>
            <svg className="lang-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </summary>
          <div className="lang-panel">
            {LOCALES.map((l) => (
              <Link
                key={l}
                className={l === locale ? 'on' : ''}
                href={`/${l}${segment ? '/' + segment : ''}`}
                aria-current={l === locale ? 'true' : undefined}
              >
                <span className="lang-flag" aria-hidden="true">{LANG_FLAG[l]}</span>
                <span className="lang-opt-name">{LANG_NAME[l]}</span>
                {l === locale && (
                  <svg className="lang-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M4 12.5l5 5L20 6.5" />
                  </svg>
                )}
              </Link>
            ))}
          </div>
        </details>
        <Link className="cart-link" href={`${base}/booking`}>
          {u.booking}
          {count > 0 ? ` (${count})` : ''}
        </Link>
      </div>
    </header>
  );
}
