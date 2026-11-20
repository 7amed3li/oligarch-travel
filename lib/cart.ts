import type { TourPrice } from './prices';

// Pure cart math — shared by client components and tests.
// Restaurant model (Ergin, 2026-11-19): every tour is ONE flat price per
// group. Entrance tickets are an optional per-person add-on: the museum's
// normal price + a €2.50 skip-the-line premium per ticket. Totals are
// computed per currency component (all tours and tickets priced in EUR).
export interface CartItem {
  tourId: string;
  date: string; // yyyy-mm-dd or ''
  people: number;
  ticket?: boolean; // entrance tickets added for everyone in the group
  tier?: 'standard' | 'luxury'; // yacht only
}

export const PREMIUM_CURRENCY = 'EUR';

const round2 = (n: number) => Math.round(n * 100) / 100;

// The money components of one cart line: currency -> amount.
export function lineComponents(tp: TourPrice, it: CartItem): Record<string, number> {
  const out: Record<string, number> = {};
  const add = (cur: string, n: number) => {
    if (n) out[cur] = round2((out[cur] || 0) + n);
  };
  const group = it.tier === 'luxury' && tp.luxuryGroup ? tp.luxuryGroup : tp.perGroup;
  add(tp.currency, group + tp.perPerson * it.people);
  if (it.ticket && tp.ticket) {
    add(tp.ticket.currency, tp.ticket.amount * it.people);
    add(PREMIUM_CURRENCY, tp.ticket.premium * it.people);
  }
  return out;
}

export function mergeComponents(
  target: Record<string, number>,
  src: Record<string, number>,
): Record<string, number> {
  for (const k of Object.keys(src)) target[k] = round2((target[k] || 0) + src[k]);
  return target;
}

export interface CurrencyTotal {
  subtotal: number;
  deposit: number;
  remainder: number;
}

export function cartTotals(
  items: CartItem[],
  byId: Record<string, TourPrice>,
  depositPercent: number,
): Record<string, CurrencyTotal> {
  const comp: Record<string, number> = {};
  for (const it of items) {
    const tp = byId[it.tourId];
    if (!tp) continue;
    mergeComponents(comp, lineComponents(tp, it));
  }
  const out: Record<string, CurrencyTotal> = {};
  for (const k of Object.keys(comp)) {
    const subtotal = comp[k];
    const deposit = Math.round(subtotal * depositPercent) / 100;
    out[k] = { subtotal, deposit, remainder: round2(subtotal - deposit) };
  }
  return out;
}

const SYMBOLS: Record<string, string> = { EUR: '€', USD: '$' };
export function sym(currency: string): string {
  return SYMBOLS[currency] || currency + ' ';
}

// €1,234.50-style formatting: thousands separators, cents only when needed.
export function fmtMoney(currency: string, n: number): string {
  const rounded = Math.round(n * 100) / 100;
  const hasCents = Math.abs(rounded % 1) > 0.001;
  const s = rounded.toLocaleString('en-US', {
    minimumFractionDigits: hasCents ? 2 : 0,
    maximumFractionDigits: 2,
  });
  return sym(currency) + s;
}

// What one skip-the-line ticket costs per person, e.g. "€27.50" or "€52.50".
export function ticketPerPersonDisplay(tp: TourPrice): string {
  if (!tp.ticket) return '';
  const t = tp.ticket;
  if (t.currency === PREMIUM_CURRENCY) return fmtMoney(t.currency, t.amount + t.premium);
  return `${fmtMoney(t.currency, t.amount)} + ${fmtMoney(PREMIUM_CURRENCY, t.premium)}`;
}

// Card / page price line, localized via UI strings.
export function priceDisplay(tp: TourPrice, ui: any): string {
  if (tp.perGroup === 0 && tp.perPerson === 0) {
    return ui.free_word || ui.free || 'Free';
  }
  let base: string;
  if (tp.luxuryGroup) {
    base = `${fmtMoney(tp.currency, tp.perGroup)}–${fmtMoney(tp.currency, tp.luxuryGroup)} ${ui.per_group}`;
  } else if (tp.perPerson > 0 && tp.perGroup === 0) {
    base = `${fmtMoney(tp.currency, tp.perPerson)} ${ui.per_person}`;
  } else {
    base = `${fmtMoney(tp.currency, tp.perGroup)} ${ui.per_group}`;
    if (tp.perPerson > 0) base += ` + ${fmtMoney(tp.currency, tp.perPerson)} ${ui.per_person}`;
  }
  if (tp.ticket) base += ` + ${ui.tickets_word || 'ticket'} ${ui.per_person}`;
  return base;
}
