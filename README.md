# Tiny UX Decisions

**How much can one tiny interface change affect a decision?**

Five interactive tests. In each one you make the same choice twice, and one small thing changes in between: a “Most popular” badge, a pre-selected add-on, an “Only 2 left” warning, a longer cancellation flow, or a “Recommended for you” label. Then you try to spot the change, see how your answer moved, and read what the research and regulators say about it.

Made by [Moksha Agrawal](https://mokshaagrawal.vercel.app/), 2026.

```bash
npm install
npm run dev       # http://localhost:5173 (version 1: /v1.html)
npm run build     # static files in dist/
```

Deploys as a plain Vite site: build command `npm run build`, output directory `dist`.

## Pages

The site is split into views addressed by plain hashes, so the back button and shared links work:
`#home`, `#test-1` … `#test-5`, `#results`, `#patterns`, `#strip`, `#notes`.

| View | What it does |
| --- | --- |
| Tests 1–5 | Choose, choose again, spot the change, then compare. Each reveal has tabs: your result, why it works, and sourced “in the wild” context. |
| Results | Every answer, classed as moved toward the nudge, moved away, already agreed, not moved, or changed elsewhere. |
| Patterns | Twelve small interface patterns, filterable, each with a live sample. |
| Strip it back | A hotel listing with six persuasion layers you can hide one by one. |
| Notes | What I learned, and how it was made. |

## Two versions

- **Version 2** (`index.html`, `src/v2/`): the main site. A design-review layout: white page, grey canvas, a column listing what each test holds constant, and one magenta outline around the change.
- **Version 1** (`v1.html`, `src/App.jsx`, `src/styles.css`): the first, editorial version, kept for comparison. It looked AI-generated, which is why version 2 exists.

Both share the experiments, copy and fictional interfaces: `src/data/`, `src/components/interfaces/`, `src/interfaces.css`.

## Where things live

- `src/data/experiments.js`: the five tests, the pattern library, the Strip-it-back layers, setup notes.
- `src/data/outcomes.js`: what each pair of answers means.
- `src/data/wild.js`: the sourced real-world context for each test. Every number there was checked against its source; keep it that way.
- `src/v2/`: version 2's pages, test boards and styles.

## Principles

- No backend, accounts, analytics or AI. Answers live in page memory and vanish on reload.
- In each A/B pair, any space the change needs is reserved in both versions, so nothing else moves.
- Every brand and product in the tests is made up.
