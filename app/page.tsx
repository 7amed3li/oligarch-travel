import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/components/HomePage';
import { UI } from '@/data/tours';
import { getPrices } from '@/lib/prices';

export const dynamic = 'force-dynamic';

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
