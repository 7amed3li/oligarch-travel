import type { ReactNode } from 'react';
import './globals.css';
import CartProvider from '@/components/CartProvider';

export const metadata = {
  title: 'Oligarch Travel — Hagia Sophia & Topkapi Tours, Istanbul',
  description:
    'Skip-the-line tickets and private guided tours of Hagia Sophia and Topkapi Palace with licensed guide Ergin Karakoyun. Book direct — 25% deposit, confirmed on WhatsApp.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
