'use client';
import Link from 'next/link';
import { useCart } from './CartProvider';
import { MEETING_DEFAULT, type Locale } from '@/data/tours';

// Fixed bottom bar, Lucky Sushi style (Ergin, 2026-11-20: "Menü cart
// WhatsApp meerting point — en alttaki bu süper oturmuş"): Menu · Booking
// (cart, with count badge) · WhatsApp · Meeting Point. Mobile only — on
// desktop the header already carries the same entries.
export default function BottomBar({ locale, u }: { locale: Locale; u: any }) {
  const { count } = useCart();
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    MEETING_DEFAULT[locale] + ', Istanbul',
  )}`;
  return (
    <nav className="bottombar" aria-label="Quick actions">
      <Link className="bb-item" href={`/${locale}#tours`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h10" />
        </svg>
        <span>{u.menu_word || 'Menu'}</span>
      </Link>
      <Link className="bb-item" href={`/${locale}/booking`}>
        <span className="bb-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4M9 16l2 2 4-4" />
          </svg>
          {count > 0 ? <span className="bb-badge">{count}</span> : null}
        </span>
        <span>
          {u.booking}
          {count > 0 ? ` (${count})` : ''}
        </span>
      </Link>
      <a className="bb-item" href="https://wa.me/905553255565" target="_blank" rel="noopener">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11 0 4.47-3.64 8.12-8.11 8.12zm4.45-6.08c-.24-.12-1.44-.71-1.69-.79-.25-.09-.43-.13-.61.12-.18.25-.7.86-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.89-.16-.27-.02-.42.12-.55.12-.13.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.51-.84-2.06-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.79.34-.32.27-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.18.23 2.42 3.7 5.87 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.35-1.64.33-.81.33-1.51.23-1.65-.1-.14-.22-.23-.47-.35z" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <a className="bb-item" href={mapsUrl} target="_blank" rel="noopener">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
        <span>{u.meeting_label}</span>
      </a>
    </nav>
  );
}
