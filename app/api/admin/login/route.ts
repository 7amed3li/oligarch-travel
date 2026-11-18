import { NextResponse, type NextRequest } from 'next/server';
import {
  ADMIN_COOKIE,
  SESSION_MAX_AGE,
  adminEnabled,
  expectedToken,
  passwordMatches,
} from '@/lib/auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// POST { password } — checks ADMIN_PASSWORD (env) and, on success, sets the
// httpOnly admin session cookie used by /admin and PUT /api/prices.
export async function POST(req: NextRequest) {
  if (!adminEnabled()) {
    return NextResponse.json(
      { error: 'Admin is disabled: ADMIN_PASSWORD is not set on the server.' },
      { status: 503 },
    );
  }
  const body = await req.json().catch(() => ({}));
  if (!passwordMatches(String((body as any)?.password ?? ''))) {
    return NextResponse.json({ error: 'Wrong password.' }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, expectedToken()!, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE,
    // Secure only when actually served over HTTPS, so login still works on a
    // plain-HTTP staging URL.
    secure: req.nextUrl.protocol === 'https:',
  });
  return res;
}
