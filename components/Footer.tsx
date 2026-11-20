import Link from 'next/link';
import Logo from './Logo';
import { MEETING_DEFAULT, type Locale } from '@/data/tours';

export default function Footer({ locale, u }: { locale: Locale; u: any }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();
  return (
    <footer className="site">
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-brand">
            <Logo />
            <p>{u.footer_line}</p>
          </div>

          <nav className="ft-col" aria-label="Footer">
            <h4>{u.nav_tours}</h4>
            <Link href={`${base}#tours`}>{u.tours_title}</Link>
            <Link href={`${base}#about`}>{u.nav_about}</Link>
            <Link href={`${base}#reviews`}>{u.nav_reviews}</Link>
            <Link href={`${base}/booking`}>{u.booking}</Link>
          </nav>

          <div className="ft-col">
            <h4>{u.nav_contact}</h4>
            <a href="https://wa.me/905553255565" target="_blank" rel="noopener">
              WhatsApp: +90 555 325 55 65
            </a>
            <a href="mailto:erginkarakoyun@gmail.com">erginkarakoyun@gmail.com</a>
          </div>

          <div className="ft-col">
            <h4>{u.meeting_label}</h4>
            <span className="ft-text">{MEETING_DEFAULT[locale]}</span>
          </div>
        </div>

        <div className="ft-bottom">
          <span>{u.legal_line}</span>
          <span>&copy; {year} Oligarch Travel</span>
        </div>
      </div>
    </footer>
  );
}
