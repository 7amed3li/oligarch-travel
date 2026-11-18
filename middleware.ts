import { NextResponse, type NextRequest } from 'next/server';

// Exposes the current pathname to layouts (used for language-switcher links).
export function middleware(req: NextRequest) {
  const headers = new Headers(req.headers);
  headers.set('x-pathname', req.nextUrl.pathname);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ['/((?!_next|api|favicon.ico).*)'] };
