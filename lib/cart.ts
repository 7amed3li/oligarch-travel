import type { TourPrice } from './prices';

// Pure cart math — shared by client components and tests.
export interface CartItem {
  tourId: string;
  date: string; // yyyy-mm-dd or ''
  people: number;
  tier?: string;
}

export function lineTotal(tp: TourPrice, people: number): number {
  return tp.perGroup + tp.perPerson * people;
}

export interface CurrencyTotal {
  subtotal: number;
  deposit: number;
  remainder: number;
}

const round2 = (n: number) => Math.round(n * 100) / 100;

export function cartTotals(
  items: CartItem[],
  byId: Record<string, TourPrice>,
  depositPercent: number,
): Record<string, CurrencyTotal> {
  const out: Record<string, CurrencyTotal> = {};
  for (const it of items) {
    const tp = byId[it.tourId] || (it.tourId === 'bosphorus-yacht' ? byId['bosphorus-yacht-standard'] : undefined);
    if (!tp) continue;
    const cur = (out[tp.currency] ||= { subtotal: 0, deposit: 0, remainder: 0 });
    cur.subtotal = round2(cur.subtotal + lineTotal(tp, it.people));
  }
  for (const k of Object.keys(out)) {
    const t = out[k];
    t.deposit = Math.round(t.subtotal * depositPercent) / 100;
    t.remainder = round2(t.subtotal - t.deposit);
  }
  return out;
}

const SYMBOLS: Record<string, string> = { EUR: '€', USD: '$' };
export function sym(currency: string): string {
  return SYMBOLS[currency] || currency + ' ';
}

export function fmtMoney(currency: string, n: number): string {
  if (n === 0) return '€0';
  const s = n.toFixed(2).replace(/\.?0+$/, '');
  return sym(currency) + s;
}

// "€80 / group + €28 / person" style display, localized via UI strings.
export function priceDisplay(tp: TourPrice, ui: any): string {
  if (tp.perGroup === 0 && tp.perPerson === 0) {
    return ui.free || 'Free';
  }
  const parts: string[] = [];
  if (tp.perGroup > 0) parts.push(`${sym(tp.currency)}${tp.perGroup} ${ui.per_group}`);
  if (tp.perPerson > 0)
    parts.push(`${tp.perGroup > 0 ? '+ ' : ''}${sym(tp.currency)}${tp.perPerson} ${ui.per_person}`);
  return parts.join(' ');
}
