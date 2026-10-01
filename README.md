# SRD Academy website

Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript. Static pages, one server action for enquiries.

## Run locally

```bash
npm install
npm run dev
```

`npm run build && npm run start` for a production check. `npm run lint` before committing.

## Where to edit content

| What | File |
| --- | --- |
| Address, phone, email, hours, socials, in-person flag | `src/lib/site.ts` |
| IELTS / TOEFL / PTE page content | `src/lib/tests.ts` |
| Home-page FAQs | `src/lib/faqs.ts` |
| Blog articles and categories | `src/lib/posts.ts` |
| Colours and type | `src/app/globals.css` (`@theme`) |

Values left as `null` in `site.ts` render as a yellow "to be added" placeholder and are omitted from structured data. Search the codebase for `<Placeholder>` to find the rest (About story/team, destinations, privacy details).

## Blog drafts

All starter articles have `draft: true`. Drafts:
- show a "check before publishing" box listing facts to verify,
- are `noindex` and excluded from the sitemap,
- are hidden entirely on Vercel production (`VERCEL_ENV=production`), but visible locally and on preview deployments.

Verify each item, set a real author, then set `draft: false`.

## Enquiry form

`src/components/EnquiryForm.tsx` is client-side only. It checks the name and service, then opens WhatsApp (`site.whatsapp` in `src/lib/site.ts`) with the enquiry pre-written; the visitor presses send in WhatsApp. No server, email service or API key is involved, and the site stores nothing.

## Deploying (Vercel)

1. Create a new Git repository for this folder and push it to GitHub.
2. Import it as a **new** Vercel project (do not reuse the MDR Law project).
3. Add `NEXT_PUBLIC_SITE_URL=https://srdacademy.in` as an environment variable, deploy, and review the `.vercel.app` link.
4. In Vercel → Settings → Domains, add `srdacademy.in` (primary) and `www.srdacademy.in` (set to redirect to `srdacademy.in`).
5. In GoDaddy → My Products → srdacademy.in → DNS, add the records Vercel shows (usually an A record for `@` and a CNAME for `www`) and remove GoDaddy's parking A record for `@`.

Preview deployments are blocked from search engines by `src/app/robots.ts`.
