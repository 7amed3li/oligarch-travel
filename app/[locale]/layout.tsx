import type { ReactNode } from 'react';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomBar from '@/components/BottomBar';
import { LOCALES, UI, type Locale } from '@/data/tours';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!LOCALES.includes(locale as Locale)) notFound();
  const loc = locale as Locale;
  // Path segment after /{locale}/ for language-switcher links.
  const h = await headers();
  const pathname = h.get('x-pathname') || `/${loc}`;
  const segment = pathname.replace(new RegExp(`^/${loc}/?`), '');
  return (
    <>
      <Header locale={loc} u={UI[loc]} segment={segment} />
      <main>{children}</main>
      <Footer locale={loc} u={UI[loc]} />
      <BottomBar locale={loc} u={UI[loc]} />
    </>
  );
}
