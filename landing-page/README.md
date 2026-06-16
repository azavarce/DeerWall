# DeerWall — Ad-traffic landing page (static HTML)

The destination page for paid Google Ads. One purpose: convert exurban gardeners into first-time buyers across three SKUs (32oz, 1 Gal RTU, 1 Gal Concentrate).

## How to view

Open `index.html` directly in a browser. No build step. No dependencies beyond Google Fonts (loaded via CDN).

## Files

```
landing_page/
├── index.html       — semantic HTML5
├── tokens.css       — design system tokens (verbatim copy from design_handoff_deerwall_brand/source/tokens.css)
├── baseline.css     — minimal reset + body defaults
├── styles.css       — page-specific styles
├── README.md        — this file
└── assets/          — bottle photos, lifestyle photos, logo, favicon
```

## Section map

1. Topbar — logo + cart link only (no nav distractions on a paid LP)
2. Hero — orange-treated buck photo + Newsreader display headline + primary CTA → `#chooser`
3. Pain agitation — gardener POV, asymmetric layout
4. **SKU chooser** — the conversion engine (3 cards, middle is "Most popular")
5. How it works — 3 numbered steps
6. Karen testimonial — embedded YouTube (lazy-loaded) + pull-quote
7. Ingredients — Made-with / Free-of two-column credibility block
8. FAQ — accordion, 6 questions
9. Final CTA — Ink-900 dark band with the brand's poetic line
10. Footer — minimal

## Design system

Built strictly against the canonical handoff at `../design_handoff_deerwall_brand/`:
- Newsreader (display) / Inter Tight (UI) / JetBrains Mono (labels)
- Sand 50 page · Ink 800 body · Orange 500 accent · Forest 500 secondary
- Pill buttons, 8px cards, 4px inputs
- 16×16 line-art SVG icons (stroke 1.75, currentColor, no fill)
- `prefers-reduced-motion` respected throughout

## Accessibility

- WCAG AA across body copy and controls
- Focus-visible orange-500 outline on all interactive elements
- Semantic landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- Skip-to-content link
- `<details>` accordion for FAQ (works without JS)
- Keyboard-accessible YouTube lazy-load (Enter / Space)
- Reduced-motion: all transitions reduced to ≤1ms

## Mobile

Mobile-first. Breakpoints at `640 / 768 / 1024 / 1280`. Hero, chooser, FAQ tested for thumb-reach and tap-target sizes.

## Known TBDs / decisions to revisit

- **Headline copy.** "Keep deer out of your garden. *Without the chemicals.*" — open to rewrite.
- **Hero photo.** Currently `img-deer.jpg` per design system spec §6.1 (signature buck, brand-orange treatment). Alternative: `img-gardener.jpg` for emotional connection.
- **YouTube poster.** Currently `karen.png`. If we want a frame from the video itself, we can extract one.
- **Footer links.** Linked to `deerwall.global/pages/about`, `/pages/contact`, etc. — verify those pages exist on the live store.
- **Pollinator FAQ.** The answer is conservative. If we have a definitive position (e.g. "fully bee-safe per testing X"), strengthen it.

## Porting to Liquid

Once the design is locked, port to Shopify by:
1. New custom theme scaffold (`shopify theme init` from a minimal base)
2. `tokens.css` → `assets/tokens.css`, loaded in `theme.liquid`
3. Each section becomes a Liquid section under `sections/` with schema for editable copy/images
4. SKU cards drive cart-add via `<form action="/cart/add">` instead of product-page links
5. Hero/CTA copy and imagery exposed as section settings for marketing iteration without code changes
