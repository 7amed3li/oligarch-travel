import Logo from './Logo';
import type { Locale } from '@/data/tours';

export default function Footer({ locale, u }: { locale: Locale; u: any }) {
  return (
    <footer className="site">
      <div className="wrap">
        <Logo />
        <p style={{ maxWidth: 560 }}>{u.footer_line}</p>
        <p className="small" style={{ color: '#93A3BC' }}>
          WhatsApp: +90 555 325 55 65 · erginkarakoyun@gmail.com
        </p>
      </div>
    </footer>
  );
}
