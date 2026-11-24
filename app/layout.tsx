import type { ReactNode } from 'react';
import type { Viewport } from 'next';
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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata = {
  metadataBase: new URL('https://www.byzist.com'),
  verification: { google: 'hiAtP_AN7NeIWdt1nfNcLse_kD8yQHfoVcF9j_-Vdqw' },
  title: 'Istanbul Tours — BYZIST',
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
