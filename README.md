# Oligarch Travel — Ergin Karakoyun tour-booking site

Next.js 15 (App Router, TypeScript), `output: 'standalone'`. Styling is a single
hand-written design system in `app/globals.css` (GetYourGuide-style marketplace
clarity: white base, navy ink `#1A2B49`, one accent `#FF5533`).

## Run

```bash
npm install
npm run build
ADMIN_PASSWORD='choose-a-strong-password' ./start.sh
                      # standalone server on :3000 (copies public/, .next/static, data/ into .next/standalone)
# or: npm run dev     # development
```

`ADMIN_PASSWORD` must be set in the server's environment at start time —
Hamed picks the real password at deploy time; it is never committed.

## Structure

- `app/[locale]/…` — en (default, also served at `/`), de, zh. Home, tour pages,
  booking page. Pages are dynamic so price edits show immediately.
- `app/design-board` — design presentation page (vision, palette, logo, live homepage).
- `app/admin` + `app/api/prices` — price-only admin. Reads/writes `data/prices.json`
  on the server; edits persist across restarts and reflect site-wide.
  **Password-protected:** `/admin` shows a login form and `PUT /api/prices`
  rejects requests without a valid admin session (401). The password is read
  from the **`ADMIN_PASSWORD` environment variable** — it is never stored in
  this repo. Login sets an httpOnly cookie (HMAC token, 7 days). If
  `ADMIN_PASSWORD` is not set, the admin is disabled entirely (fail closed).
  Login/logout endpoints: `app/api/admin/login`, `app/api/admin/logout`;
  logic in `lib/auth.ts`.
- `data/tours.ts` — all tour content + UI strings in EN/DE/ZH (tour list is fixed).
- `data/prices.json` — the ONE price config (per-person / per-group, currency,
  min/max guests, deposit %, WhatsApp number). In the standalone deployment the
  live copy sits at `.next/standalone/data/prices.json` (start.sh seeds it from
  `data/` on first run; admin edits write there).
- `public/img/` — Ergin's real photos (portrait: the TripAdvisor guide portrait he chose).

## Booking flow

Basket-style cart (localStorage): add one or several tours, set date + guests per
tour, combined total per currency, 25% deposit + remainder due on the day.
"Confirm" opens WhatsApp to +90 555 325 55 65 with the full summary. No card payment.

## Deploy (go-live)

1. On the host: `npm install && npm run build`.
2. Set the admin password in the environment: `export ADMIN_PASSWORD='…'`
   (Hamed chooses it — never write it into this repo or into `data/`).
3. Start: `./start.sh` (standalone server on `:3000`; put Nginx/Caddy in
   front for HTTPS + the real domain). `PORT`/`HOSTNAME` env vars override.
4. Point the domain (hagiasophiaticket.online) at the host.
5. Log in at `/admin` with the password, verify the prices, done.
   Price edits persist in `.next/standalone/data/prices.json` — back that
   file up; it is seeded from `data/prices.json` only on first start.

## Hero video

Wikimedia Commons Hagia Sophia clip (480p VP9) streamed from upload.wikimedia.org,
with Ergin's sunset photo as poster/fallback.

## Production environment (Vercel)

Set on the Vercel project (Production + Preview); a new deployment is required
after any change:

- `ADMIN_PASSWORD` — enables the price admin at `/admin`.
- `RESEND_API_KEY` — server-only key used by `app/api/contact` to send the
  contact form by email.
- `CONTACT_TO_EMAIL` — server-only recipient for contact-form messages; the
  address is never rendered on the site.
