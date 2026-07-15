# Hiba Fathima KT — Portfolio

Premium minimal portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before you deploy — replace these placeholders

1. **Projects** — `lib/data.ts` → `projects` array. Update the project cards
   with your actual repos and live demo URLs. The current portfolio projects
   should point to:
   - AI CCTV Threat Detection: https://github.com/Hiba-fathimakt/ai-cctv-threat-detection
   - Early Disease Predictor System: https://github.com/shahinakt/early-disease-predictor-system
   - Portfolio Website: https://github.com/hiba-fathimakt/portfoli-webiste
2. **Education & certifications** — `lib/data.ts` → `education` and
   `certifications`.
3. **Contact links** — `lib/data.ts` → `contactLinks` (GitHub, LinkedIn,
   email, location).
4. **Resume** — drop your PDF at `public/resume.pdf` (the Hero and About
   "Download Resume" buttons link to `/resume.pdf`).
5. **EmailJS** — `components/Contact.tsx` has three placeholders:
   `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`. Create a free
   account at https://www.emailjs.com/, set up an email service + template,
   and paste in your IDs. Until then, the form will show an error status on
   submit (visitors can still reach you via the direct email/GitHub/LinkedIn
   links, which work immediately).
6. **Metadata / OG image** — `app/layout.tsx` has base SEO metadata; add an
   `public/og-image.png` and reference it in `openGraph.images` if you want
   a custom social preview card.

## Deploying to Vercel

Push this to a GitHub repo, then import it at https://vercel.com/new — no
extra configuration needed. Add any EmailJS keys as environment variables
if you'd rather not commit them directly (swap the hardcoded strings in
`Contact.tsx` for `process.env.NEXT_PUBLIC_EMAILJS_*`).

## Design notes

- Palette: ink `#0B0F1A` / ivory `#F7F5F0` background, signal teal
  `#5EEAD4` and warm amber `#F2A65A` accents.
- Type: Fraunces (display), Inter (body), JetBrains Mono (data/code accents).
- The hero's typed SQL-style query line is the signature visual detail,
  tying the design directly to the backend/data subject matter rather than
  a generic gradient blob.
- Dark mode is the default; toggle persists via `localStorage`.
