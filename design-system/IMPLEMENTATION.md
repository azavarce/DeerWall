# DeerWall — Implementation Guide

Framework-agnostic guidance for porting the DeerWall brand system to a real codebase. Read after `README.md`, `TOKENS.md`, and `COMPONENTS.md`.

---

## Recommended file structure

```
src/
├── styles/
│   ├── tokens.css         ← copy verbatim from source/tokens.css
│   └── globals.css        ← font imports, body defaults, ::selection
├── components/
│   ├── primitives/        ← Button, Input, Badge, Toggle, etc. (1:1 with COMPONENTS.md)
│   ├── layout/            ← Container, Stack, Grid, Section
│   └── marks/             ← Logo, Symbol, Wordmark
├── lib/
│   └── theme.ts           ← typed token re-exports if using TS
└── assets/
    ├── logo/              ← all dw-*.png variants
    ├── product/           ← bottle-*.png
    └── photography/       ← img-*.jpg
```

If you're using Next.js / Astro / Remix, put `tokens.css` in your global stylesheet entry. If you're using Tailwind, mirror the tokens in your `tailwind.config` (or `@theme` block in v4) — see `TOKENS.md` for the mapping.

---

## Font loading

The brand uses three Google Fonts. Load all three at the top of every page:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" />
```

(The italic axis on Newsreader matters — the brand uses italic for emphasis.)

In Next.js, prefer `next/font/google` to self-host:

```ts
import { Newsreader, Inter_Tight, JetBrains_Mono } from 'next/font/google';
export const newsreader = Newsreader({ subsets: ['latin'], style: ['normal', 'italic'], weight: ['400','500','600'] });
export const interTight = Inter_Tight({ subsets: ['latin'], weight: ['400','500','600','700'] });
export const jetbrains = JetBrains_Mono({ subsets: ['latin'], weight: ['400','500','600'] });
```

---

## Page baseline

Every page should establish:

```css
html, body {
  margin: 0;
  background: var(--dw-sand-50);     /* never #fff */
  color: var(--dw-ink-800);          /* never #000 */
  font-family: var(--dw-font-sans);
  font-size: var(--dw-text-base);
  line-height: 1.55;
  -webkit-font-smoothing: antialiased;
}
* { box-sizing: border-box; }
::selection { background: var(--dw-orange-500); color: white; }
img { max-width: 100%; }
```

The `::selection` rule is part of the brand — keep it.

---

## Composition patterns to follow

### 1. Mono label + serif headline + sans body
The brand's most repeated structure:
```tsx
<header>
  <span className="eyebrow">Field-tested · 2024</span>
  <h1 className="display">The natural way to keep deer <em>away</em>.</h1>
  <p className="lead">DeerWall is a botanical, USDA-organic deer repellent…</p>
</header>
```

### 2. Editorial grid
Long-form content uses an asymmetric 12-column grid where the headline spans 5–6 columns and the body spans 5–6 columns offset, with a mono caption in the gutter. Don't center everything — the brand has editorial rhythm.

### 3. Generous gap, never margins between siblings
Always `display: flex` or `display: grid` with `gap:`. This is mandatory — see the README in `tokens.css`'s host project.

### 4. Italic for emphasis on key brand phrases
The tagline italicizes "*away*". Use `<em>` and let Newsreader's italic do the work.

---

## Things to NOT do

- ❌ Don't use `#000` or `#FFF` anywhere. Always Ink 800 / Sand 50.
- ❌ Don't add gradients to backgrounds. The brand is flat-tonal.
- ❌ Don't use emoji in UI. The brand uses photography and the orange/ink color block instead.
- ❌ Don't drop-shadow photography. Photos sit flush against Sand or Ink.
- ❌ Don't use cool grays (e.g. `slate`, `zinc`). All neutrals are Stone (warm).
- ❌ Don't round inputs to 8px+. They're 4px. Buttons are pills (100px). Cards are 8px. Hero panels max 14px.
- ❌ Don't add bouncy animations or springs. The brand uses `--dw-ease` (a calm ease-out cubic).
- ❌ Don't invent new fonts. Three families, no exceptions.
- ❌ Don't reproduce the brand-book sidebar in production. It's a navigation aid for the spec, not a product nav.

---

## Photography & imagery

Photography direction (from `source/imagery.html`):
- Warm, golden-hour or overcast natural light.
- Real environments: backyards, gardens, edges of woods, rural America.
- Subjects: deer (whitetail), gardeners (real, not stock), product in-context.
- No studio shots, no isolation backgrounds, no fake bokeh.

Treatment:
- Slight warm color grade.
- Never add filters, frames, or rounded corners > 8px.
- When pairing with text, use the orange-on-ink color block beside the photo (not over it).

The placeholder photos in `source/assets/img-*.jpg` are representative — replace with real DeerWall photography before launch.

---

## Logo usage

From `source/logo.html`:
- Primary: full wordmark on Sand or white background.
- Reversed: orange + white wordmark on Ink 800 / Forest 700.
- Symbol-only ("S" mark): app icons, favicons, social avatars, packaging where wordmark won't fit.
- Clear space: minimum = the height of the "D" cap on all four sides.
- Minimum size: wordmark 80px wide for digital, 0.75" for print. Symbol 24px digital.

Don't:
- Stretch, skew, or rotate.
- Recolor (only the four official lockups: color, black-on-white, white-on-dark, orange-on-white).
- Place on busy photography without the orange/ink color block underneath.

---

## Pages to build (production)

In rough priority order:

1. **Landing / home** — adapt `strategy.html` hero patterns + product photography from `imagery.html`.
2. **Product pages** — use `card-product` from `components.html` as the listing primitive; build the PDP using the editorial grid + spec table pattern.
3. **Cart / checkout** — straight component-library work; nothing brand-specific beyond the system.
4. **About / story** — heavy editorial pattern, big Newsreader display, photography-led.
5. **Where to buy / locator** — map + list using pill filters.
6. **Press / investor** — use `presentation.html` as a starting point; can also export to PDF directly.

Packaging (`packaging.html`) and collateral (`collateral.html`) are **print artifacts**, not web pages. Hand the dielines to a print vendor — don't try to render them in the app.

---

## Validation checklist

Before shipping, verify:

- [ ] All colors come from `--dw-*` tokens. No raw hex in component code.
- [ ] All type sizes come from `--dw-text-*` tokens. No `font-size: 17px` one-offs.
- [ ] Page bg is `--dw-sand-50`, body text is `--dw-ink-800`.
- [ ] All three font families are loaded with their required weights.
- [ ] Mono labels are uppercase, letter-spaced, used for metadata/eyebrows.
- [ ] Buttons are pill-shaped, 12×20 padding (md), with the proper variant colors.
- [ ] Forms use the spec'd label-on-top, mono-uppercase pattern.
- [ ] Layout uses `gap:` not `margin` between siblings.
- [ ] No emoji, no gradients, no cool grays, no `#000`, no `#FFF`.
- [ ] Photography is unframed, warm, photographic (no illustrations as primary imagery).
- [ ] Color contrast passes — see `TOKENS.md` accessibility cheat-sheet.

---

## Questions for design

When you hit something not specified — modals, toasts, tables, dashboard layouts, dark mode, mobile-specific patterns — **ask the design team before extending**. The system has strong opinions; guessing wrong is more expensive than asking.

A short list of likely first-questions:
- Dark mode: is it a full theme or just dark-surface accents?
- Mobile breakpoints: standard 640/768/1024/1280, or custom?
- Empty states: photographic or illustrative?
- Loading: skeleton (sand-100 blocks) or spinner (orange-500)?
- Error pages: editorial 404 with photography, or terse system page?
