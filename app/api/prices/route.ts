import { NextResponse, type NextRequest } from 'next/server';
import { getPrices, savePrices, type PriceConfig } from '@/lib/prices';
import { isAdminRequest } from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    return NextResponse.json(getPrices());
  } catch (e: any) {
    return NextResponse.json({ error: String(e?.message || e) }, { status: 500 });
  }
}

// Saves price edits from /admin. Requires a logged-in admin session
// (see lib/auth.ts). Only price fields are writable — the tour list is fixed.
export async function PUT(req: NextRequest) {
  if (!isAdminRequest(req)) {
    return NextResponse.json(
      { error: 'Unauthorized — log in at /admin first.' },
      { status: 401 },
    );
  }
  try {
    const body = (await req.json()) as PriceConfig;
    const current = getPrices();
    if (!Array.isArray(body.tours)) throw new Error('tours missing');
    const num = (v: any, label: string) => {
      const n = Number(v);
      if (!Number.isFinite(n) || n < 0) throw new Error('invalid number: ' + label);
      return n;
    };
    const tours = current.tours.map((t) => {
      const inc = body.tours.find((x: any) => x.id === t.id);
      if (!inc) return t;
      const out: any = {
        ...t,
        perPerson: num(inc.perPerson, t.id + '.perPerson'),
        perGroup: num(inc.perGroup, t.id + '.perGroup'),
        minGuests: Math.max(1, Math.round(num(inc.minGuests, t.id + '.minGuests'))),
        maxGuests: Math.max(1, Math.round(num(inc.maxGuests, t.id + '.maxGuests'))),
      };
      if (inc.luxuryGroup !== undefined && inc.luxuryGroup !== null) {
        out.luxuryGroup = num(inc.luxuryGroup, t.id + '.luxuryGroup');
      }
      if (t.ticket) {
        const it: any = inc.ticket || {};
        out.ticket = {
          amount: num(it.amount ?? t.ticket.amount, t.id + '.ticket.amount'),
          currency: t.ticket.currency,
          premium: num(it.premium ?? t.ticket.premium, t.id + '.ticket.premium'),
        };
      }
      return out;
    });
    const depositPercent = Math.min(
      100,
      Math.max(0, num(body.depositPercent ?? current.depositPercent, 'depositPercent')),
    );
    const saved = savePrices({ ...current, tours, depositPercent });
    return NextResponse.json(saved);
  } catch (e: any) {
    return NextResponse.json({ error: String(e?.message || e) }, { status: 400 });
  }
}
