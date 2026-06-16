# Design

## Visual Theme

Editorial / agricultural-modern. Warm neutrals (Sand, Stone, Ink) on a Sand-50 page, with DeerWall Orange as the load-bearing accent and Forest as the secondary accent. Mono-uppercase eyebrows above serif display headlines, sans-body for utility. Generous gap-based layout. Photography sits flush, never with shadows or rounded corners > 8px.

**Theme scene sentence:** *A Westchester gardener at 7am, mug in hand, opens this page on her phone after walking out to find the hosta bed ravaged again. Overcast morning light, slight chill, looking for a fix that won't poison the dog.*

That sentence forces **light theme** as the default; an Ink-900 dark surface appears once (the final CTA band) for editorial weight.

## Color Strategy

**Restrained-with-Committed-orange.** Sand+Ink+Stone neutrals carry 80% of surfaces. DeerWall Orange (`#EE6B1F`) is the committed accent, used decisively in the hero word block, the chooser CTAs, and the final CTA. One Forest accent on credibility moments. No gradients. No cool grays. Never `#000` / `#FFF`.

| Token | Hex | Role |
|---|---|---|
| `--dw-sand-50` | `#FAF6F0` | Page background |
| `--dw-sand-100` | `#F2EBDF` | Image wells, alt cards |
| `--dw-sand-200` | `#E5DAC5` | Soft dividers |
| `--dw-ink-800` | `#1F1A14` | Body text |
| `--dw-ink-900` | `#14110D` | Final CTA band |
| `--dw-orange-500` | `#EE6B1F` | Primary CTA, key marks |
| `--dw-orange-600` | `#D55C1F` | Button hover |
| `--dw-orange-700` | `#A64A19` | Eyebrows on Sand (AAA) |
| `--dw-forest-500` | `#3D7553` | Secondary accent |
| `--dw-stone-600` | `#564F42` | Secondary body text |
| `--dw-stone-500` | `#7B7363` | Tertiary, mono labels |

## Typography

- **Display (Newsreader 500/600, italic 400/500/600):** Hero headline, section headlines, pull-quotes. Letter-spacing `-0.02em`, line-height `1.0–1.05`. Italic reserved for emphasis verbs ("without the *chemicals*", "the animal you *respect*").
- **Body / UI (Inter Tight 400/500/600/700):** All body, all controls. Body line-height `1.55`, max width `~65ch`.
- **Mono labels (JetBrains Mono 600):** Uppercase, letter-spacing `0.10–0.18em`. Eyebrows in orange-700 above headlines; metadata in stone-500 on cards.

**Scale (px):** 12 / 14 / 16 / 18 / 22 / 28 / 36 / 48 / 64 / 84 / 112. ≥1.25 ratio between steps. Hero display fluid-clamps so it never feels timid on mobile.

## Components

- **Buttons:** pill (radius 100px), Inter Tight 600, 12×20 padding (md), 16×28 (lg). Primary = orange-500 → orange-600 hover. Secondary = ink-800 → ink-700.
- **Cards:** 8px radius, 1px ink-800 @ 10% border, 40px padding. Product cards: `aspect-ratio: 4/3` image well on sand-100, then 24px meta block.
- **Inputs:** 4px radius, 1.5px border, focus ring becomes orange-500.
- **Mono labels:** 11px, uppercase, letter-spacing 0.18em, weight 600.
- **Icons:** 16×16 inline SVG, stroke 1.75, currentColor, fill: none, round caps/joins.

## Motion

`cubic-bezier(0.2, 0.8, 0.2, 1)`, 150 / 240 / 400ms. No bounce. No spring. Fade-in + slight translate on scroll-revealed sections (≤16px Y, never on layout properties — uses `transform`/`opacity` only). All motion respects `prefers-reduced-motion`.

## Layout

- **Asymmetric editorial 12-col grid** for narrative sections (hero, pain, testimonial). Avoid centered stacks.
- **Strict 3-up grid** for the SKU chooser; middle card lifts (translate -4px, border darken).
- **Always `gap:`** for spacing between siblings; never margin.
- **Section rhythm:** 96px (`--dw-space-9`) between sections desktop, 48px (`--dw-space-7`) mobile.
- **Container max-width:** 1200px, with 24px gutters scaling to 32px @ ≥1024px.

## Imagery

- **Hero:** `img-deer.jpg` (signature buck) with brand-orange treatment per imagery.html §6.4 Treatment 02 ("Multiply Orange-500 at 65%, hero only").
- **Pain:** `img-gardener.jpg` (real gardener, golden-hour).
- **Testimonial:** `karen.png` (real customer photo) + embedded YouTube `4b1_n16GrDs` (lazy-loaded).
- All photos sit flush; no drop shadows, no rounded > 8px corners.
- No stock photography substitutions; we have what we need.

## Breakpoints

`640 / 768 / 1024 / 1280`. Hero, chooser, FAQ must be flawless on mobile (most ad clicks land there).
