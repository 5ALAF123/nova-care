<div align="center">
  <img src="public/logo.svg" alt="Nova Care logo" width="220" />
  <h1>NOVA CARE — Advanced Medicine. Human Care.</h1>
  <p>Premium fictional hospital website — portfolio project</p>
  <p>
    <img src="https://img.shields.io/badge/Next.js-16-black?style=flat-square" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-5-blue?style=flat-square" alt="TS" />
    <img src="https://img.shields.io/badge/Tailwind-4-06b6d4?style=flat-square" alt="Tailwind" />
    <img src="https://img.shields.io/badge/Framer%20Motion-✓-ff69b4?style=flat-square" alt="Motion" />
  </p>
</div>

A high-end, patient-first hospital website for **NOVA CARE**, a fictional multispecialty hospital. Designed to feel like a real, trustworthy, premium healthcare institution — not a dashboard or SaaS template.

Live: `https://nova-care.example` (fictional) • Repo: `https://github.com/5ALAF123/nova-care`

---

## Brand Identity

**Logo system** (`src/components/ui/logo.tsx:1`):

- **Mark**: 36px rounded square `#0f1e3a` with white medical cross + cyan nova sparkle (`#22d3ee` / `#06b6d4`) at top-right. Subtle gradient highlight for premium feel.
- **Wordmark**: `NOVA CARE` in Manrope ExtraBold, tracking 0.13em, `ADVANCED MEDICINE` in Inter SemiBold 10px, tracking 0.18em.
- **Variants**: `light` (navy on white) for header, `dark` (white on navy) for footer. Sizes `sm`/`md`/`lg`, `iconOnly` for favicon.

**Assets**:

```
public/logo.svg        # horizontal light (header, OG)
public/logo-dark.svg   # horizontal dark (footer)
public/logo-mark.svg   # icon only
public/favicon.svg     # 32px favicon
src/app/icon.svg       # Next.js App Router icon (→ /icon)
src/app/apple-icon.svg # 180px Apple touch
```

Colors: navy `#0f1e3a` / `#0f2a5a`, cyan `#06b6d4` → `#22d3ee`, slate, white/off-white `#fcfcf9`. Rounded 2xl, soft shadows, large typography.

---

## Features

- Sticky header with top bar (24/7, phone), `⌘K` search (doctors/departments/services/articles), mobile drawer + bottom bar
- Hero with floating cards (24/7, 150+ specialists, 98%), Emergency banner, Quick Actions (4)
- About with animated counters, Departments (12) → `/departments/[slug]`, Doctors → `/doctors` (search/filter/sort) → `/doctors/[id]`
- Services, Why Choose Us, Testimonials, Health Library → `/health-library/[slug]`, FAQ, Map placeholder
- **Booking flow** `/book-appointment`: 6 steps — Department → Doctor → Date (14 days) → Time (9 slots) → Patient (RHF+Zod) → Confirm → Success `NC-xxxxx` + Add to Calendar
- Contact with RHF+Zod + map, responsive, accessible, SEO metadata per route

## Tech Stack

Next.js 16 App Router, TypeScript, Tailwind 4, shadcn/ui, Lucide, Framer Motion, React Hook Form + Zod

## Getting Started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build (43 routes)
npm run lint
```

## Deploy on Vercel

Import `https://github.com/5ALAF123/nova-care` in Vercel → `npm run build` — no env vars. Fictional data only.

## License

Portfolio demo — fictional hospital, all doctors/addresses are mock.

---

© 2026 Nova Care. Fictional portfolio project.
