# Jonas Webstudio — portfolio site

The studio's own site, with four client showcases built into it. One project,
one dev server, one build.

| Route | What it is |
| --- | --- |
| `/` | Studio home — services, work, process, pricing, contact |
| `/pricing` | Pricing packages and the inquiry form |
| `/work/barrington-cole` | Barrington & Cole — law firm site |
| `/work/ember-oak` | Ember & Oak — restaurant site |
| `/work/iron-comb` | Iron & Comb — barbershop site (about, services, gallery, booking) |
| `/work/meridian` | Meridian Properties — estate agency (listings, about, services, contact) |

Each showcase keeps the design system it was built with — its own palette,
type and radii — and every showcase page carries a "Back to portfolio" link.

## Running it

Requires [Node.js](https://nodejs.org) 20 or newer.

```bash
npm install
```

```bash
npm run dev
```

The dev server prints a local URL (usually http://localhost:5173).

Other scripts:

```bash
npm run build
```

```bash
npm run preview
```

```bash
npm run lint
```

## Deploying to Vercel

Push this folder to a GitHub repository, then in Vercel choose **Add New →
Project** and import that repo. The defaults in `vercel.json` are enough — no
framework preset, `npm install`, `npm run build`. The build writes
`.vercel/output`, which Vercel deploys directly.

```bash
git init
```

```bash
git add . && git commit -m "Jonas Webstudio portfolio"
```

```bash
git remote add origin https://github.com/<you>/<repo>.git && git push -u origin main
```

`.env` is deliberately not committed. Add the variables from the table below in
**Project → Settings → Environment Variables** — at minimum `RESEND_API_KEY`, or
the contact form has nowhere to deliver to. Redeploy after adding them.

To build for a different host, set `NITRO_PRESET` (for example `node-server`,
`netlify` or `cloudflare-module`).

## Inquiries

Nothing is sold on the site. The pricing tiers are examples, and both the
contact form and the pricing inquiry dialog post to one server function that
stores the inquiry and emails it to the studio.

Delivery is configured with server-side environment variables in `.env` — never
`VITE_*`, since those are exposed to the browser:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | API key from [Resend](https://resend.com); required to send mail |
| `INQUIRY_TO_EMAIL` | Studio inbox; defaults to `jonas.webstudio@gmail.com` |
| `INQUIRY_FROM_EMAIL` | Verified sender, e.g. `Jonas Webstudio <hello@yourdomain.com>` |
| `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY` | Optional; stores a copy of each inquiry in the `contact_messages` table |

With none of these set the form still works — the inquiry is written to the
server log and the visitor gets a confirmation — so a missing key never shows a
broken form. If a transport *is* configured and delivery fails, the visitor is
told, rather than the message being silently dropped.

## Stack

TanStack Start (React 19, file-based routing, SSR), Tailwind CSS v4,
shadcn/ui components, Lucide icons.

```
src/
  routes/            file-based routes; routes/work/* are the client showcases
  components/        studio components + shared shadcn/ui
  showcase/          per-showcase components, assets and translations
  lib/               i18n, site data, inquiry server function, email transport
  styles.css         one design system per site, scoped by [data-site]
```

The studio site is translated into 19 languages (`src/lib/i18n.tsx`); the
Barrington & Cole and Meridian showcases carry their own translations.
