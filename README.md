# InkHold

Deposit-first tattoo booking for solo artists: Instagram bio → intake → Stripe deposit → digital waiver.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Without Stripe keys, checkout runs in **demo mode** (deposit marked paid, jumps to waiver).

## Stripe (optional)

Copy `.env.local.example` → `.env.local` and add test keys from the Stripe dashboard.

## Demo paths

| Path | What |
|------|------|
| `/` | Landing |
| `/a/maya-rivera` | Client booking + deposit |
| `/dashboard/maya-rivera` | Artist booking list |
| `/seattle` | Seattle GTM plan |

## Stack

Next.js App Router · TypeScript · Tailwind · Stripe Checkout · Zod · JSON file store (`.data/bookings.json`)
