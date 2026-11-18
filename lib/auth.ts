import crypto from 'crypto';
import { cookies } from 'next/headers';
import type { NextRequest } from 'next/server';

// Admin gate for /admin and PUT /api/prices.
//
// The password comes ONLY from the ADMIN_PASSWORD environment variable,
// set by the site owner at deploy time — it is never stored in the repo.
// If ADMIN_PASSWORD is not set, the admin is disabled entirely (fail closed).
//
// After login the browser holds an httpOnly cookie whose value is an HMAC
// of a fixed label, keyed by the password. The password itself never
// leaves the server, and changing ADMIN_PASSWORD invalidates old cookies.
export const ADMIN_COOKIE = 'oligarch_admin';
const LABEL = 'oligarch-admin-v1';
export const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export function adminPassword(): string | null {
  const p = process.env.ADMIN_PASSWORD;
  return p && p.length > 0 ? p : null;
}

export function adminEnabled(): boolean {
  return adminPassword() !== null;
}

export function expectedToken(): string | null {
  const p = adminPassword();
  if (!p) return null;
  return crypto.createHmac('sha256', p).update(LABEL).digest('hex');
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && crypto.timingSafeEqual(ba, bb);
}

export function passwordMatches(candidate: string): boolean {
  const p = adminPassword();
  return p !== null && safeEqual(candidate, p);
}

export function tokenValid(token: string | undefined | null): boolean {
  const exp = expectedToken();
  return !!exp && !!token && safeEqual(token, exp);
}

// For route handlers (API routes).
export function isAdminRequest(req: NextRequest): boolean {
  return tokenValid(req.cookies.get(ADMIN_COOKIE)?.value);
}

// For server components (the /admin page gate).
export async function isAdminSession(): Promise<boolean> {
  const store = await cookies();
  return tokenValid(store.get(ADMIN_COOKIE)?.value);
}
