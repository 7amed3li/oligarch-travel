'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useCart } from './CartProvider';
import { MEETING_DEFAULT, type Locale } from '@/data/tours';
import { displayTotals, fmtMoneyD } from '@/lib/cart';
import type { TourPrice } from '@/lib/prices';

// Fixed bottom bar, Lucky Sushi style (Ergin, 2026-11-20: "Menü cart
// WhatsApp meerting point — en alttaki bu süper oturmuş"): Booking
// (cart, with count badge) · Discover Istanbul (the guide's own page,
// added 2026-11-21) · WhatsApp · Meeting Point. The Menu item was
// removed on 2026-11-24 at the owner's request. Mobile only — on
// desktop the header already carries the same entries.
export default function BottomBar({ locale, u }: { locale: Locale; u: any }) {
  const { items, count, currency } = useCart();
  void currency; // re-render on currency change; amounts format via fmtMoneyD
  const navRef = useRef<HTMLElement>(null);
  const [priceMap, setPriceMap] = useState<{ byId: Record<string, TourPrice>; dep: number } | null>(null);

  // Prices are admin-editable, so the bar reads them from the public API
  // once, then shows the live cart total in the guest's display currency
  // under the Booking label (owner's request, 2026-11-24: the guest must
  // SEE the money, e.g. how many euros they have put together so far).
  useEffect(() => {
    let live = true;
    fetch('/api/prices')
      .then((r) => r.json())
      .then((cfg) => {
        if (!live || !cfg || !Array.isArray(cfg.tours)) return;
        const byId: Record<string, TourPrice> = {};
        for (const t of cfg.tours) byId[t.id] = t;
        setPriceMap({ byId, dep: typeof cfg.depositPercent === 'number' ? cfg.depositPercent : 25 });
      })
      .catch(() => {});
    return () => {
      live = false;
    };
  }, []);

  const total =
    priceMap && items.length > 0
      ? displayTotals(items, priceMap.byId, priceMap.dep).subtotal
      : 0;

  // Rev 9f: last-resort guarantee. On the owner's phone the bar stayed
  // hidden through stylesheet rules AND an inline <style> block, so the
  // critical styles are also forced onto the element itself from JS
  // with !important priority once the component mounts.
  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    const apply = () => {
      if (window.innerWidth <= 900) {
        el.style.setProperty('display', 'grid', 'important');
        el.style.setProperty('grid-template-columns', 'repeat(4,minmax(0,1fr))', 'important');
        el.style.setProperty('position', 'fixed', 'important');
        el.style.setProperty('bottom', '0', 'important');
        el.style.setProperty('left', '0', 'important');
        el.style.setProperty('right', '0', 'important');
        el.style.setProperty('z-index', '200', 'important');
        el.style.setProperty('visibility', 'visible', 'important');
        el.style.setProperty('background', '#fff', 'important');
        el.style.setProperty('border-top', '1px solid #E3E8EF', 'important');
      } else {
        el.style.removeProperty('display');
        el.style.removeProperty('position');
      }
    };
    apply();
    window.addEventListener('resize', apply);
    return () => window.removeEventListener('resize', apply);
  }, []);
  const mapsUrl = "https://maps.app.goo.gl/vTuGMLWqoP2tgWH59";
  return (
    <>
    {/* The bar's full CSS travels inline with the component (Rev 9e):
        on the owner's phone the external stylesheet rules for the bar
        were somehow not being applied, so the bar now carries its own
        styles in the HTML itself and cannot be lost with the bundle. */}
    <style>{`
.otqnav{display:none}
@media(max-width:900px){
.otqnav{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr));position:fixed!important;bottom:0!important;left:0!important;right:0!important;z-index:200!important;visibility:visible!important;background:#fff;border-top:1px solid #E3E8EF;box-shadow:0 -4px 18px rgba(26,43,73,.10);padding-bottom:env(safe-area-inset-bottom,0px)}
.otq-item{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:3px;min-width:0;min-height:56px;padding:7px 2px 6px;text-decoration:none;color:#1A2B49;font-size:10.5px;font-weight:600;line-height:1.15;-webkit-tap-highlight-color:transparent}
.otq-item>span:last-child{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-align:center}
.otq-item:active{color:#C93A1B}
.otq-item svg{width:20px;height:20px;flex:none}
.otq-ic{position:relative;display:inline-flex}
.otq-badge{position:absolute;top:-6px;right:-10px;background:#C93A1B;color:#fff;font-size:10.5px;font-weight:800;min-width:17px;height:17px;border-radius:9px;display:flex;align-items:center;justify-content:center;padding:0 4px}
.otq-total{display:block;font-size:11.5px;font-weight:800;color:#C93A1B;line-height:1.2}
}
`}</style>
    <nav className="otqnav" aria-label="Quick actions" ref={navRef}>
      <Link className="otq-item" href={`/${locale}/booking`}>
        <span className="otq-ic">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4M9 16l2 2 4-4" />
          </svg>
          {count > 0 ? <span className="otq-badge">{count}</span> : null}
        </span>
        <span>
          {u.booking}
          {count > 0 ? ` (${count})` : ''}
          {total > 0 ? <span className="otq-total">{fmtMoneyD('EUR', total)}</span> : null}
        </span>
      </Link>
      <Link className="otq-item" href={`/${locale}/guide`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <polygon points="16.2 7.8 13.8 13.8 7.8 16.2 10.2 10.2" />
        </svg>
        <span>{u.discover_title || 'Meet your guide'}</span>
      </Link>
      <a className="otq-item" href="https://wa.me/905553255565" target="_blank" rel="noopener">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.11 8.16-8.11 4.47 0 8.11 3.64 8.11 8.11 0 4.47-3.64 8.12-8.11 8.12zm4.45-6.08c-.24-.12-1.44-.71-1.69-.79-.25-.09-.43-.13-.61.12-.18.25-.7.86-.86 1.03-.16.18-.32.2-.59.07-.27-.13-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.89-.16-.27-.02-.42.12-.55.12-.13.27-.32.41-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.51-.84-2.06-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.79.34-.32.27-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.18.23 2.42 3.7 5.87 5.18.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.35-1.64.33-.81.33-1.51.23-1.65-.1-.14-.22-.23-.47-.35z" />
        </svg>
        <span>WhatsApp</span>
      </a>
      <a className="otq-item" href={mapsUrl} target="_blank" rel="noopener">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.6" />
        </svg>
        <span>{u.meeting_label}</span>
      </a>
    </nav>
    </>
  );
}
