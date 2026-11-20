import Link from 'next/link';
import Logo from './Logo';
import FooterMeetingCard from './FooterMeetingCard';
import { MEETING_DEFAULT, type Locale } from '@/data/tours';

const WA_PATH =
  'M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.34C9.36 7.34 9.09 7.4 8.87 7.65C8.65 7.89 8.02 8.49 8.02 9.71C8.02 10.93 8.91 12.11 9.03 12.28C9.15 12.44 10.74 15 13.25 16C15.34 16.83 15.77 16.66 16.22 16.62C16.67 16.58 17.67 16.02 17.88 15.44C18.09 14.85 18.09 14.35 18.03 14.24C17.96 14.14 17.8 14.08 17.55 13.96C17.3 13.83 16.08 13.23 15.85 13.15C15.63 13.06 15.46 13.02 15.3 13.27C15.13 13.51 14.66 14.08 14.51 14.24C14.37 14.41 14.22 14.43 13.97 14.31C13.73 14.18 12.93 13.92 11.99 13.08C11.26 12.42 10.76 11.61 10.62 11.37C10.47 11.12 10.6 11 10.73 10.87C10.84 10.76 10.98 10.58 11.1 10.44C11.23 10.3 11.27 10.19 11.35 10.03C11.43 9.86 11.39 9.72 11.33 9.6C11.27 9.47 10.78 8.27 10.58 7.78C10.38 7.3 10.18 7.36 10.03 7.35C9.88 7.34 9.71 7.34 9.53 7.34Z';

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="ft-icon" aria-hidden="true">
      {children}
    </span>
  );
}

function ExternalArrow() {
  return (
    <span className="ft-arrow" aria-hidden="true">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7" />
        <path d="M9 7h8v8" />
      </svg>
    </span>
  );
}

export default function Footer({ locale, u }: { locale: Locale; u: any }) {
  const base = `/${locale}`;
  const year = new Date().getFullYear();
  return (
    <footer id="contact" className="site">
      <div className="wrap">
        <div className="ft-grid">
          <div className="ft-brand">
            <Logo />
            <p>{u.footer_line}</p>
          </div>

          <nav className="ft-col ft-nav" aria-label="Footer">
            <h4>{u.nav_tours}</h4>
            <div className="ft-nav-links">
              <Link href={`${base}#tours`}>{u.tours_title}</Link>
              <Link href={`${base}#about`}>{u.nav_about}</Link>
              <Link href={`${base}#reviews`}>{u.nav_reviews}</Link>
              <Link href={`${base}/booking`}>{u.booking}</Link>
            </div>
          </nav>

          <div className="ft-col ft-contact">
            <h4>{u.nav_contact}</h4>
            <div className="ft-list">
              <a className="ft-row" href="https://wa.me/905553255565" target="_blank" rel="noopener noreferrer">
                <IconTile>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d={WA_PATH} />
                  </svg>
                </IconTile>
                <span className="ft-row-text">
                  <small>{u.phone_label}</small>
                  <b>+90 555 325 55 65</b>
                </span>
                <ExternalArrow />
              </a>

              <a className="ft-row" href="mailto:erginkarakoyun@gmail.com">
                <IconTile>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2.5" />
                    <path d="M3.5 7.5l8.5 6 8.5-6" />
                  </svg>
                </IconTile>
                <span className="ft-row-text">
                  <small>{u.email_label}</small>
                  <b>erginkarakoyun@gmail.com</b>
                </span>
                <ExternalArrow />
              </a>

              <a
                className="ft-row"
                href="https://instagram.com/topkapipalacemuseum"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconTile>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                </IconTile>
                <span className="ft-row-text">
                  <small>{u.instagram_label}</small>
                  <b>@topkapipalacemuseum</b>
                </span>
                <ExternalArrow />
              </a>
            </div>
          </div>

          <div className="ft-col ft-location">
            <h4>{u.meeting_label}</h4>
            <FooterMeetingCard
              locale={locale}
              address={MEETING_DEFAULT[locale]}
              meetingNote={u.meeting}
              label={u.meeting_label}
            />
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
