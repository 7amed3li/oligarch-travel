import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import { UI } from '@/data/tours';
import { getPrices } from '@/lib/prices';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: `${UI.en.hero_title} — BYZIST`,
  description: UI.en.hero_sub,
};

// Root URL serves the default (English) site.
export default function RootPage() {
  const prices = getPrices();
  return (
    <>
      <Header locale="en" u={UI.en} segment="" />
      <main>
        <HomePage locale="en" prices={prices} />
      </main>
      <Footer locale="en" u={UI.en} />
    </>
  );
}
