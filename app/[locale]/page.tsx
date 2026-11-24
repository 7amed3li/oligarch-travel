import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HomePage from '@/components/HomePage';
import { LOCALES, UI, type Locale } from '@/data/tours';
import { altFor } from '@/lib/seo';
import { getPrices } from '@/lib/prices';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) return {};
  const loc = locale as Locale;
  return {
    title: `${UI[loc].hero_title} — BYZIST`,
    description: UI[loc].hero_sub,
    alternates: altFor('', loc),
    openGraph: {
      title: `${UI[loc].hero_title} — BYZIST`,
      description: UI[loc].hero_sub,
      url: `/${loc}`,
      siteName: 'BYZIST',
      type: 'website',
    },
  };
}

export default async function LocaleHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  return <HomePage locale={locale as Locale} prices={getPrices()} />;
}
