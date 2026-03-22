# MALL for Lifelong Learning — Interactive Research Showcase

An interactive, scroll-driven website showcasing Jihye Kim's doctoral dissertation research on older adults using Duolingo for self-directed language learning.

## About the Research

**Full Title:** MALL for Lifelong Learning: Older Adults' Self-Directed Language Learning via Duolingo
**Researcher:** Jihye Kim, Ph.D.
**Institution:** University of South Florida, Department of World Languages
**Year:** 2026

The research examines how adults aged 60–83 use Duolingo in informal, self-directed contexts — challenging deficit-based narratives about older adults and technology. 15 participants, 10 weeks, 6 in-depth case studies.

## Tech Stack

- **Bun** — runtime and package manager
- **Vite** — build tool
- **React 19** (TypeScript) — UI
- **Tailwind CSS v4** — styling with custom design tokens
- **Motion** (formerly Framer Motion) — scroll animations, entrance transitions, number tickers
- **Lenis** — smooth scroll

## Development

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
```

## Design

Warm cream editorial palette (light mode) with navy and gold accents — modeled after premium print journals. Newsreader serif for headlines, Manrope sans-serif for body. Dark navy sections used selectively for visual rhythm contrast.

Custom Tailwind tokens are defined in `src/index.css` via `@theme` and map to semantic names: `bg-cream`, `text-navy`, `text-gold`, `text-gold-bright`, etc.

## Content

All copy, quotes, stats, and participant data live in `src/data/content.ts`.
