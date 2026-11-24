'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Logo from './Logo';
import { useCart } from './CartProvider';
import { LOCALES, type Locale } from '@/data/tours';
import { DISP_CURS } from '@/lib/cart';

const LANG_LABEL: Record<Locale, string> = { en: 'EN', de: 'DE', zh: '中文', tr: 'TR' };
const LANG_NAME: Record<Locale, string> = { en: 'English', de: 'Deutsch', zh: '中文', tr: 'Türkçe' };
const LANG_FLAG: Record<Locale, string> = { en: '🇬🇧', de: '🇩🇪', zh: '🇨🇳', tr: '🇹🇷' };

export default function Header({
  locale,
  u,
  segment,
}: {
  locale: Locale;
  u: any;
  segment: string; // path after /{locale}/, e.g. '' | 'booking' | 'tours/hs-guided'
}) {
  const { count, currency, setCurrency } = useCart();
  const router = useRouter();
  const curRef = useRef<HTMLDetailsElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const base = `/${locale}`;
  const langRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (langRef.current?.open && !langRef.current.contains(target)) {
        langRef.current.removeAttribute('open');
      }
      if (curRef.current?.open && !curRef.current.contains(target)) {
        curRef.current.removeAttribute('open');
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        langRef.current?.removeAttribute('open');
        curRef.current?.removeAttribute('open');
        setMobileMenuOpen(false);
      }
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
        <Link href={base} aria-label="BYZIST" className="header-logo-link">
          <Logo />
        </Link>
        <nav className="main">
          <Link href={`${base}#tours`}>{u.nav_tours}</Link>
          <Link href={`${base}/guide`}>{u.nav_about}</Link>
          <Link href={`${base}#reviews`}>{u.nav_reviews}</Link>
          <Link href={`${base}#contact`}>{u.nav_contact}</Link>
        </nav>
        <div className="header-actions">
          <details
            className="lang-menu cur-menu"
            ref={curRef}
            onToggle={() => {
              if (curRef.current?.open) langRef.current?.removeAttribute('open');
            }}
          >
            <summary className="lang-btn" aria-label="Currency">
              <span>
                {DISP_CURS.find((c) => c.code === currency)?.symbol} {currency}
              </span>
              <svg className="lang-chev" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </summary>
            <div className="lang-panel">
              {DISP_CURS.map((c) => (
                <button
                  key={c.code}
                  type="button"
                  className={c.code === currency ? 'on' : ''}
                  onClick={() => {
                    setCurrency(c.code);
                    curRef.current?.removeAttribute('open');
                    setMobileMenuOpen(false);
                    router.refresh();
                  }}
                >
                  <span className="lang-flag" aria-hidden="true">{c.symbol}</span>
                  <span className="lang-opt-name">{c.code} · {c.name}</span>
                  {c.code === currency && (
                    <svg className="lang-check" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M4 12.5l5 5L20 6.5" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </details>
          <details
            className="lang-menu"
            ref={langRef}
            onToggle={() => {
              if (langRef.current?.open) curRef.current?.removeAttribute('open');
            }}
          >
            <summary className="lang-btn" aria-label="Language">
              <svg className="lang-globe" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
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
                  onClick={() => {
                    langRef.current?.removeAttribute('open');
                    setMobileMenuOpen(false);
                  }}
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
          <Link className="cart-link" href={`${base}/booking`} onClick={() => setMobileMenuOpen(false)}>
            {u.booking}
            {count > 0 ? ` (${count})` : ''}
          </Link>
          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="wrap mobile-nav-in">
            <Link href={`${base}#tours`} onClick={() => setMobileMenuOpen(false)}>
              {u.nav_tours}
            </Link>
            <Link href={`${base}/guide`} onClick={() => setMobileMenuOpen(false)}>
              {u.nav_about}
            </Link>
            <Link href={`${base}#reviews`} onClick={() => setMobileMenuOpen(false)}>
              {u.nav_reviews}
            </Link>
            <Link href={`${base}#contact`} onClick={() => setMobileMenuOpen(false)}>
              {u.nav_contact}
            </Link>
            <a
              href="https://wa.me/905553255565"
              target="_blank"
              rel="noopener"
              className="mobile-wa-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              WhatsApp: +90 555 325 55 65
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
