'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { setDisplayCurrency, type CartItem, type DispCur } from '@/lib/cart';

// Booking meta chosen FIRST, before any tour is added (Ergin, 2026-11-20):
// the guest sets the tour date and the number of people at the top, then
// adds tours like dishes from a menu; ticket prices auto-calculate from
// the people count.
export interface BookingMeta {
  date: string; // yyyy-mm-dd or ''
  people: number;
  lang: string; // guide language the guest picks: 'en' | 'de' | 'zh' (Ergin, 2026-11-20)
}

interface CartCtx {
  items: CartItem[];
  count: number;
  meta: BookingMeta;
  setMeta: (patch: Partial<BookingMeta>) => void;
  currency: DispCur;
  setCurrency: (c: DispCur) => void;
  add: (tourId: string, date: string, people: number, opts?: { ticket?: boolean; skip?: boolean; tier?: 'standard' | 'luxury' }) => void;
  remove: (idx: number) => void;
  update: (idx: number, patch: Partial<CartItem>) => void;
  clear: () => void;
}
const Ctx = createContext<CartCtx>({
  items: [],
  count: 0,
  meta: { date: '', people: 2, lang: 'en' },
  setMeta: () => {},
  currency: 'EUR',
  setCurrency: () => {},
  add: () => {},
  remove: () => {},
  update: () => {},
  clear: () => {},
});
export const useCart = () => useContext(Ctx);

const KEY = 'oligarch_cart_v2';
const META_KEY = 'oligarch_meta_v1';
const CUR_KEY = 'oligarch_cur_v1';
const DISP_CURS_LIST: DispCur[] = ['EUR', 'USD', 'TRY', 'CNY'];

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [meta, setMetaState] = useState<BookingMeta>({ date: '', people: 2, lang: 'en' });
  const [currency, setCurrencyState] = useState<DispCur>('EUR');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
      const savedCur = localStorage.getItem(CUR_KEY) as DispCur | null;
      if (savedCur && DISP_CURS_LIST.includes(savedCur)) {
        setCurrencyState(savedCur);
        setDisplayCurrency(savedCur);
      }
      const m = localStorage.getItem(META_KEY);
      if (m) {
        const parsed = JSON.parse(m);
        if (parsed && typeof parsed.people === 'number') {
          setMetaState({
            date: parsed.date || '',
            people: Math.min(46, Math.max(1, parsed.people)),
            lang: ['en', 'de', 'zh'].includes(parsed.lang) ? parsed.lang : 'en',
          });
        }
      }
    } catch {}
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(KEY, JSON.stringify(items));
      } catch {}
    }
  }, [items, loaded]);

  useEffect(() => {
    if (loaded) {
      try {
        localStorage.setItem(META_KEY, JSON.stringify(meta));
      } catch {}
    }
  }, [meta, loaded]);

  const setMeta = (patch: Partial<BookingMeta>) =>
    setMetaState((prev) => ({
      date: patch.date !== undefined ? patch.date : prev.date,
      people:
        patch.people !== undefined
          ? Math.min(46, Math.max(1, patch.people || prev.people))
          : prev.people,
      lang: patch.lang !== undefined ? patch.lang : prev.lang,
    }));

  const add = (tourId: string, date: string, people: number, opts?: { ticket?: boolean; skip?: boolean; tier?: 'standard' | 'luxury' }) =>
    setItems((prev) => [
      ...prev,
      { tourId, date, people, ticket: opts?.ticket, skip: opts?.skip, tier: opts?.tier },
    ]);
  const remove = (idx: number) => setItems((prev) => prev.filter((_, i) => i !== idx));
  const update = (idx: number, patch: Partial<CartItem>) =>
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  const clear = () => setItems([]);

  const setCurrency = (c: DispCur) => {
    setCurrencyState(c);
    setDisplayCurrency(c);
    try {
      localStorage.setItem(CUR_KEY, c);
      document.cookie = `oligarch_cur=${c}; path=/; max-age=31536000; SameSite=Lax`;
    } catch {}
  };

  return (
    <Ctx.Provider value={{ items, count: items.length, meta, setMeta, currency, setCurrency, add, remove, update, clear }}>
      {children}
    </Ctx.Provider>
  );
}
