import { LOCALES, type Locale } from '@/data/tours';

export function altFor(path: string, loc: Locale) {
  const languages: Record<string, string> = {};
  for (const l of LOCALES) languages[l] = `/${l}${path}`;
  languages['x-default'] = `/en${path}`;
  return { canonical: `/${loc}${path}`, languages };
}
