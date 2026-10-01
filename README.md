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

`src/lib/enquiry-action.ts` validates on the server and emails the enquiry through Resend's API. Set the variables in `.env.example` (locally in `.env.local`, on Vercel in Project → Settings → Environment Variables). Until they are set, visitors are told plainly that the message was not sent.

## Deploying (Vercel)

1. Create a new Git repository for this folder and push it to GitHub.
2. Import it as a **new** Vercel project (do not reuse the MDR Law project).
3. Add the environment variables above (`NEXT_PUBLIC_SITE_URL=https://srdacademy.in`), deploy, and review the `.vercel.app` link.
4. In Vercel → Settings → Domains, add `srdacademy.in` (primary) and `www.srdacademy.in` (set to redirect to `srdacademy.in`).
5. In GoDaddy → My Products → srdacademy.in → DNS, add the records Vercel shows (usually an A record for `@` and a CNAME for `www`) and remove GoDaddy's parking A record for `@`.

Preview deployments are blocked from search engines by `src/app/robots.ts`.
