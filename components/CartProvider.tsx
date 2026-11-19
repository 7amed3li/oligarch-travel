'use client';
import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { CartItem } from '@/lib/cart';

interface CartCtx {
  items: CartItem[];
  count: number;
  add: (tourId: string, date: string, people: number, opts?: { ticket?: boolean; tier?: 'standard' | 'luxury' }) => void;
  remove: (idx: number) => void;
  update: (idx: number, patch: Partial<CartItem>) => void;
  clear: () => void;
}
const Ctx = createContext<CartCtx>({
  items: [],
  count: 0,
  add: () => {},
  remove: () => {},
  update: () => {},
  clear: () => {},
});
export const useCart = () => useContext(Ctx);

const KEY = 'oligarch_cart_v2';

export default function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
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

  const add = (tourId: string, date: string, people: number, opts?: { ticket?: boolean; tier?: 'standard' | 'luxury' }) =>
    setItems((prev) => [...prev, { tourId, date, people, ticket: opts?.ticket, tier: opts?.tier }]);
  const remove = (idx: number) => setItems((prev) => prev.filter((_, i) => i !== idx));
  const update = (idx: number, patch: Partial<CartItem>) =>
    setItems((prev) => prev.map((it, i) => (i === idx ? { ...it, ...patch } : it)));
  const clear = () => setItems([]);

  return (
    <Ctx.Provider value={{ items, count: items.length, add, remove, update, clear }}>
      {children}
    </Ctx.Provider>
  );
}
