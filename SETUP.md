# Həll Saatı

Docusaurus site for a competitive programming course — usaco.guide-style layout, fuzzy
search, local progress tracking, and an interactive prerequisite roadmap.

## Run locally

```bash
npm install
npm start          # dev server at http://localhost:3000
```

Note: full-text search (Pagefind) results only appear in a production build:

```bash
npm run build      # builds site + pagefind index
npm run serve
```

## Deploy to GitHub Pages

```bash
GIT_USER=<your-github-username> npm run deploy
```

## Project structure

- **src/css/custom.css** — theme (IBM Plex Sans/Mono, blue accent, light + dark).
- **src/data/lessons.js** — single source of truth: Giriş + 28 həll saatı in 6 sections,
  with tags, prerequisites and doc links.
- **src/pages/index.js** — homepage: section sidebar, progress bar, lesson rows
  with click-to-complete circles.
- **src/pages/roadmap.js** — interactive prerequisite map. Green = done,
  blue = available next, gray = locked. Lines are drawn from prerequisites.
- **src/lib/progress.js** — progress saved in localStorage (per browser).
- **src/components/Search/** + **src/lib/fuzzy.js** — Ctrl+K or "/" fuzzy search:
  typo-tolerant and Azerbaijani-letter-tolerant (ə→e etc.), instant over each
  lesson's full text (title, tags, section, and body/code — extracted at build
  time by `scripts/build-search-index.js`, works in dev too), plus Pagefind
  full-text results in production builds.
- **src/components/LessonMeta/** — "Mark completed" bar on each lesson page
  (wired in via src/theme/DocItem/Layout).

## Adding a lesson

1. Write `docs/MyLesson.md`.
2. In `src/data/lessons.js`, set the lesson's `docs: "/docs/MyLesson"`.
3. Done — homepage, roadmap, search and progress all update from that one file.
