# Lens & Light — Landscape Photography Website

A cinematic, photo-aware personal portfolio + daily photoblog built with **Astro + TypeScript**.
Every photograph carries metadata (category, dominant colors, mood, focal point) that drives its own
animation preset — sunsets glow, forests mist, night skies drift.

> **Status: Stage 1 (website) complete and working. Stage 2 (AI curation pipeline) is a roadmap item
> and NOT yet implemented — do not assume it works.**

## Quick start (VS Code)

1. Install **Node.js 18 or newer** from [nodejs.org](https://nodejs.org) (choose LTS).
2. Install **VS Code**, then open this folder (File > Open Folder).
3. In VS Code, open the terminal (Terminal > New Terminal) and run:

```bash
npm install
npm run dev
```

4. Open http://localhost:4321 in your browser. Press `Ctrl+C` to stop.

## Production build

```bash
npm run build     # outputs to dist/
npm run preview   # preview the built site locally
```

## Project structure

| Path | Purpose |
|---|---|
| `src/pages/` | Homepage, portfolio, journal, about, contact, 404 |
| `src/layouts/Base.astro` | Shared shell: SEO, nav, footer, theme toggle, reveal engine |
| `src/lib/photo.ts` | Typed photo metadata structure |
| `src/lib/animation-registry.ts` | Category → animation preset registry (edit motion here only) |
| `src/data/photos.ts` | Your photo list — one entry per photograph |
| `src/content/journal/` | Blog posts as Markdown files |
| `src/components/` | PhotoCard, Lightbox |
| `public/images/` | Your photographs (WebP/JPEG) |
| `scripts/find-duplicates.mjs` | Exact-duplicate detector for incoming batches |

## How to add a photograph

1. Copy your photo into `public/images/` (WebP or JPEG recommended).
2. Open `src/data/photos.ts`, duplicate an entry, and fill in:
   - `src`, `title`, `category`, `tags`, `colors` (first color = UI accent)
   - `focalPoint` (where the subject sits, in %) — optional
   - `preset` — optional override, e.g. `preset: 'astro'` on a city shot
3. Captions, alt text, locations, dates, camera settings must be **factual**.
   Leave anything unknown out or mark it unknown — never invent metadata.

## How to add a journal post

Create `src/content/journal/my-post.md`:

```markdown
---
title: 'My Post Title'
date: 2026-10-24
cover: '/images/my-photo.webp'
description: 'One-line summary.'
tags: ['sunset', 'sea']
location: 'Goa'        # optional — omit to keep it private
camera: 'Z5 · 24-70mm · f/8'  # optional
preset: 'sunset'       # optional animation override
---

Your story in Markdown here.
```

## Animation presets

`sunset` (warm scale-fade + glow) · `forest` (mist + clip reveal) · `water` (wave mask) ·
`astro` (slow drift + stars) · `mountain` (expansive expand) · `macro` · `city` (precise expand).

Tune speed/parallax/colors in `src/lib/animation-registry.ts` — components read from it automatically.
Accessibility: `prefers-reduced-motion` disables all animation; parallax is skipped on touch devices.

## Duplicate checking

```bash
node scripts/find-duplicates.mjs ./incoming
```

Groups exact duplicates (SHA-256) so the same frame is never published twice.

## Deploy to Vercel

1. This project is on GitHub. Merge the `dev/initial-build` branch into `main`
   (or download the repo ZIP: green **Code** button > Download ZIP, then unzip).
2. Go to [vercel.com](https://vercel.com) > Add New > Project > Import your repository.
3. Framework preset: **Astro** (auto-detected). Build command `npm run build`, output `dist/`. Deploy.
4. Later: attach your custom domain in Vercel > Settings > Domains.

## Environment variables

Copy `.env.example` to `.env` and fill real values. **Never commit `.env`.**
Used today: `PUBLIC_SITE_URL`, `PUBLIC_INSTAGRAM`, `PUBLIC_EMAIL`.
Reserved for Stage 2: `VISION_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`.

## Stage 2 roadmap (not yet implemented)

- Vision-AI analysis: tags, moods, dominant colors, ranking (needs a vision API key).
- Near-duplicate grouping, sharpness/exposure checks (OpenCV/Python worker).
- Supabase Postgres + Storage curation state, idempotent publish jobs, kill switch,
  budget limits, logs, and rollback.
