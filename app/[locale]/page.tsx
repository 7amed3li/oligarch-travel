import { notFound } from 'next/navigation';
import HomePage from '@/components/HomePage';
import { LOCALES, type Locale } from '@/data/tours';
import { getPrices } from '@/lib/prices';

export const dynamic = 'force-dynamic';

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  return <HomePage locale={locale as Locale} prices={getPrices()} />;
}
