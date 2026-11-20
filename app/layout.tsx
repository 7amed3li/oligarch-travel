import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import CartProvider from '@/components/CartProvider';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import SmartSplash from '@/components/SmartSplash';
import SmoothScroll from '@/components/SmoothScroll';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Istanbul Tours — Oligarch Travel',
  description:
    'Skip-the-line tickets and private guided tours of Hagia Sophia, Topkapi Palace, Grand Bazaar, and Bosphorus yacht cruises with licensed guide Ergin Karakoyun. Book direct — 25% deposit, confirmed on WhatsApp.',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var r=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;var p=location.pathname;var skip=p.indexOf('/admin')===0||p.indexOf('/design-board')===0;if(r||skip){document.documentElement.classList.add('splash-done');}}catch(e){}`,
          }}
        />
      </head>
      <body>
        <SmartSplash />
        <CartProvider>
          <SmoothScroll>
            {children}
            <FloatingWhatsApp />
          </SmoothScroll>
        </CartProvider>
      </body>
    </html>
  );
}
