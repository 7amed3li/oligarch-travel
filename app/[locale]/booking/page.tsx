import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BookingClient from '@/components/BookingClient';
import { LOCALES, UI, type Locale } from '@/data/tours';
import { getPrices, pricesById } from '@/lib/prices';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  return { title: `${UI[locale as Locale].your_booking} — BYZIST`, robots: { index: false, follow: true } };
}

export default async function BookingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  const prices = getPrices();
  return (
    <section>
      <div className="wrap">
        <h2 className="sec">{UI[loc].your_booking}</h2>
        <div style={{ marginTop: 22 }}>
          <BookingClient locale={loc} u={UI[loc]} prices={prices} byId={pricesById(prices)} />
        </div>
      </div>
    </section>
  );
}
