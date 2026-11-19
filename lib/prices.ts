import fs from 'fs';
import path from 'path';

// Prices live in ONE file — data/prices.json — read/written by the server.
// The /admin page edits it through /api/prices; edits persist across restarts
// and are reflected site-wide (pages are rendered dynamically).
export interface TourPrice {
  id: string;
  currency: string; // 'EUR' | 'USD'
  perPerson: number;
  perGroup: number;
  minGuests: number;
  maxGuests: number;
}
export interface PriceConfig {
  depositPercent: number;
  whatsapp: string;
  version?: number;
  tours: TourPrice[];
}

const FILE = path.join(process.cwd(), 'data', 'prices.json');

export function getPrices(): PriceConfig {
  const raw = fs.readFileSync(FILE, 'utf-8');
  return JSON.parse(raw) as PriceConfig;
}

export function savePrices(cfg: PriceConfig): PriceConfig {
  const tmp = FILE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(cfg, null, 1), 'utf-8');
  fs.renameSync(tmp, FILE);
  return cfg;
}

export function priceOf(cfg: PriceConfig, tourId: string): TourPrice {
  const t =
    cfg.tours.find((x) => x.id === tourId) ||
    (tourId === 'bosphorus-yacht'
      ? cfg.tours.find((x) => x.id === 'bosphorus-yacht-standard')
      : undefined);
  if (!t) throw new Error('unknown tour ' + tourId);
  return t;
}

export function pricesById(cfg: PriceConfig): Record<string, TourPrice> {
  const m: Record<string, TourPrice> = {};
  for (const t of cfg.tours) m[t.id] = t;
  if (!m['bosphorus-yacht'] && m['bosphorus-yacht-standard']) {
    m['bosphorus-yacht'] = m['bosphorus-yacht-standard'];
  }
  return m;
}
