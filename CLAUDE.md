# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server at localhost:3000
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Stack

- **Next.js 16** with App Router and React 19
- **TypeScript 5** — all imports use the `@/*` path alias (maps to `src/*`)
- **Tailwind CSS v4** with PostCSS plugin — dark mode via `.dark` class, HSL color tokens
- **shadcn/ui** (Radix UI primitives + `cn()` utility in `src/lib/utils.ts`)
- **Framer Motion** for animations, **Lucide React** for icons

## Architecture

This is a single-page landing site. The only route is `src/app/page.tsx`, which composes section components in order. There are no API routes.

**Component layout:**
- `src/components/Common/` — Navbar, Footer, shared elements
- `src/components/Home/` — One file per page section (Hero, Services, ProductsScroll, Contact, JoinUs, etc.)
- `src/components/ui/` — Low-level reusable UI primitives (Spotlight, ShineBorder, HoverBorderGradient, etc.) — mostly Aceternity UI inspired

**Data:**
- `src/lib/projects.ts` — Static typed data for the four core products (Battle's Lounge, YSN, Connected Athlete, PlayerHub) used by `ProductsScrollSection`

**Assets:**
- Images under `public/static/landing-page/`
- Video files under `public/Vid/`
- Remote images from `assets.aceternity.com` are allowed in `next.config.ts`

## Conventions

- Class merging is always done with `cn()` from `src/lib/utils.ts`
- Component variants use `class-variance-authority`
- Animations are client-side via Framer Motion; add `"use client"` to any component that uses hooks or browser APIs
- Tailwind custom tokens (colors, border radius, animations) are defined in `tailwind.config.ts`
