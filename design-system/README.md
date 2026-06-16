# DeerWall — Brand & Web Design Handoff

> **For the developer:** This bundle is a **complete brand system + marketing-site reference** for DeerWall, a natural deer-repellent product line. Everything here was authored as static HTML prototypes. Your job is to **rebuild it in your target codebase's framework** (React, Next.js, Astro, Vue, SwiftUI, native — whatever the project actually uses) using the codebase's existing patterns, libraries, and conventions. **Do not ship the HTML files directly.** They are spec, not source.

---

## What's in this handoff

```
design_handoff_deerwall_brand/
├── README.md              ← you are here. Start with this.
├── TOKENS.md              ← every design token (color, type, space, radius, shadow, motion)
├── COMPONENTS.md          ← per-component specs (props, states, anatomy, exact CSS)
├── IMPLEMENTATION.md      ← framework-agnostic guidance: file structure, patterns, gotchas
└── source/                ← the HTML reference files (open in a browser to view the design)
    ├── index.html             — brand-book cover / table of contents
    ├── color.html             — color system, scales, semantic, accessibility ratios
    ├── typography.html        — type scale, families, hierarchy, in-use examples
    ├── logo.html              — primary mark, lockups, clear space, misuse
    ├── iconography.html       — icon set, stroke rules, sizing
    ├── imagery.html           — photography direction, treatment, do/don't
    ├── components.html        — UI library: buttons, forms, badges, cards, etc.
    ├── packaging.html         — bottle dielines, label anatomy, SKU system
    ├── strategy.html          — brand strategy, voice, audience
    ├── social.html            — social post templates, ad layouts
    ├── collateral.html        — print collateral, business cards, vehicle wrap
    ├── presentation.html      — investor deck (deck-stage based)
    ├── tokens.css             — the canonical design-token CSS (--dw-* custom properties)
    ├── shared.css             — shared brand-book chrome (page header, sidebar, etc.)
    ├── mobile.css             — responsive rules for the brand book itself
    ├── sidebar.jsx            — React sidebar used by the book (not a product component)
    ├── deck-stage.js          — slide-deck web component (for presentation.html only)
    └── assets/                — logos, bottle photos, hero photography
```

---

## Fidelity

**High-fidelity.** Every screen specifies exact hex values, type scale, spacing, border-radius, shadow, and motion tokens. Re-build pixel-accurately using the codebase's component primitives — don't approximate.

The only thing that is *not* hi-fi is the in-prototype "sidebar / page chrome" of the brand book itself (`shared.css`, `sidebar.jsx`). That chrome exists to navigate the book. **Do not port it.** Only port the actual brand artifacts (logo, components, packaging, marketing pages).

---

## What you're rebuilding

DeerWall is delivering two artifact families to production:

### 1. The brand system (foundational — port first)
- `tokens.css` → your codebase's token layer (Tailwind config / CSS vars / theme provider / SwiftUI `Color` extensions / etc.)
- The component library on `components.html` → your codebase's component primitives
- Logo and asset files → static asset pipeline

These power everything else. Don't build pages without these in place.

### 2. The deliverables (build on top of the system)
- **Marketing site** — adapt the strategy / imagery / presentation pages into a real responsive marketing site
- **E-commerce surface** — product pages, cart, checkout (use `components.html` as the kit)
- **Packaging dielines** — these are print artifacts, hand off the dielines from `packaging.html` to a print vendor; do not attempt to render them in the app
- **Investor deck** — `presentation.html` is the live deck; export to PDF for distribution

---

## Brand-at-a-glance (so you can sniff-test your build)

- **Voice:** confident, plain-spoken, slightly rural-American. "The natural way to keep deer away."
- **Color:** DeerWall Orange (`#EE6B1F`) on warm Sand (`#FAF6F0`) and warm Ink (`#1F1A14` — never `#000`). Forest green (`#3D7553`) is the secondary accent. Stone neutrals for support.
- **Type:** Newsreader (display, serif), Inter Tight (UI / body, sans), JetBrains Mono (data, labels).
- **Aesthetic:** editorial, warm, agricultural-but-modern. Generous whitespace. Mono labels in caps for metadata. Serif for moments of weight; sans for utility.
- **Avoid:** cool blues, cold grays, pure black, pure white as the page color, drop shadows on photography, gradient backgrounds, emoji.

If your build feels "tech-startup" or "SaaS-y," you've drifted. Pull it back toward editorial / agricultural.

---

## Order of operations

1. Read **TOKENS.md** end-to-end. Set up your token layer first.
2. Read **COMPONENTS.md**. Build the component primitives next.
3. Read **IMPLEMENTATION.md** for framework-agnostic patterns and the gotchas list.
4. Open `source/index.html` in a browser and click through the book to internalize the system.
5. Open the specific page you're building (`source/components.html`, etc.) side-by-side with your editor and rebuild.

---

## Assets

All raster assets live in `source/assets/`. Move them into your codebase's static asset pipeline (e.g. `public/`, `Assets.xcassets`, etc.). The naming convention:

- `dw-*` — full DeerWall wordmark (logos)
- `dw-s-*` — DeerWall "S" symbol mark (icon-only)
- `bottle-*` — product photography
- `img-*` — lifestyle photography
- `symbol-*` — symbol mark variants

Suffixes: `-color` (full-color), `-white` (white-only on dark), `-black-white` (black on light), `-orange-white` (orange + white, the "reversed" lockup).

**Photography note:** the photos in `assets/img-*.jpg` are placeholders representative of the intended direction (warm light, golden hour, real environments). Replace with real DeerWall-shot photography before launch.

---

## Questions / ambiguities

- **Anything not in the brand book** (notification toasts, empty states, error pages, dashboard layouts, etc.) — extend the system using the existing tokens and component patterns. Don't invent new colors or type styles.
- **Mobile breakpoints** — `mobile.css` has rough responsive rules for the brand book. Pages built for production should follow standard breakpoints (`640 / 768 / 1024 / 1280`).
- **Dark mode** — not yet defined. The brand has a "dark surface" treatment (Ink 800/900 backgrounds with Sand text) used selectively, but a full dark theme is out of scope.

When in doubt: re-open the relevant page in `source/`, lift the exact values, and ask the design team before deviating.
