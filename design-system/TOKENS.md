# DeerWall — Design Tokens

The canonical source is **`source/tokens.css`**. This document mirrors it in human-readable form. **Always copy values from `tokens.css` rather than re-typing from this doc** — if there's ever a conflict, the CSS wins.

All tokens are namespaced `--dw-*`.

---

## Color

### Orange — primary brand
| Token | Hex | Use |
|---|---|---|
| `--dw-orange-950` | `#3D1A09` | Deep accent, rare |
| `--dw-orange-900` | `#5C2810` | Hover-on-dark, emphasis |
| `--dw-orange-800` | `#7E3814` | Heavy text on Sand |
| `--dw-orange-700` | `#A64A19` | Body-safe orange (AAA on Sand) |
| `--dw-orange-600` | `#D55C1F` | Button hover |
| **`--dw-orange-500`** | **`#EE6B1F`** | **Primary brand orange — buttons, key marks** |
| `--dw-orange-400` | `#F18843` | Highlight |
| `--dw-orange-300` | `#F5AB72` | Tint |
| `--dw-orange-200` | `#F8C8A1` | Soft fill |
| `--dw-orange-100` | `#FBE2CD` | Soft background |
| `--dw-orange-50`  | `#FDF1E6` | Faint wash |

### Forest — secondary
| Token | Hex | Use |
|---|---|---|
| `--dw-forest-900` | `#122319` | Deep |
| `--dw-forest-800` | `#1B3526` | Heavy |
| `--dw-forest-700` | `#254834` | Default forest, "dark surface" alt |
| `--dw-forest-600` | `#2F5C42` | Info semantic |
| `--dw-forest-500` | `#3D7553` | Brand forest, success semantic |
| `--dw-forest-300` | `#88AE96` | Soft |
| `--dw-forest-100` | `#D5E2D9` | Soft background |

### Ink — warm neutrals (near-black)
| Token | Hex | Use |
|---|---|---|
| `--dw-ink-950` | `#0B0907` | Deepest |
| `--dw-ink-900` | `#14110D` | Dark surface |
| **`--dw-ink-800`** | **`#1F1A14`** | **Brand black — body text, dark surfaces. NEVER use `#000`.** |
| `--dw-ink-700` | `#2A241D` | Hover-on-dark |
| `--dw-ink-600` | `#3D362C` | Strong text |
| `--dw-ink-500` | `#5A5246` | Secondary text |

### Sand — paper neutrals
| Token | Hex | Use |
|---|---|---|
| **`--dw-sand-50`** | **`#FAF6F0`** | **Page background. NEVER use `#FFF`.** |
| `--dw-sand-100` | `#F2EBDF` | Card alt, image placeholder bg |
| `--dw-sand-200` | `#E5DAC5` | Soft divider |
| `--dw-sand-300` | `#D2C4A8` | Border, faint |
| `--dw-stone-400` | `#A89F8C` | Disabled state |
| `--dw-stone-500` | `#7B7363` | Tertiary text, captions |
| `--dw-stone-600` | `#564F42` | Secondary text on Sand |
| `--dw-stone-700` | `#3A352B` | Strong support text |

### Semantic
| Token | Hex |
|---|---|
| `--dw-success` | `#3D7553` (= forest 500) |
| `--dw-warning` | `#D89B30` |
| `--dw-danger`  | `#B53626` |
| `--dw-info`    | `#2F5C42` (= forest 600) |

### Accessibility cheat-sheet (from `color.html`)
- **Body text on Sand 50:** use Ink 800 (14.8:1 AAA), Stone 600 (4.7:1 AA), or Orange 700 (5.9:1 AAA). **Never** Orange 500 for body — fails contrast.
- **Body text on Ink 800:** use Sand 50 (14.8:1 AAA).
- **Body on Forest 700:** use Sand 50 (9.2:1 AAA).
- **Buttons:** Orange 500 on white passes AA for large text (3.4:1) — fine for buttons & headlines >24px, never body.

---

## Typography

### Families
```css
--dw-font-display: 'Newsreader', 'Times New Roman', serif;
--dw-font-sans:    'Inter Tight', -apple-system, system-ui, sans-serif;
--dw-font-mono:    'JetBrains Mono', 'SF Mono', Menlo, monospace;
```

Load all three from Google Fonts. Required weights: Newsreader 400/500/600, Inter Tight 400/500/600/700, JetBrains Mono 400/500/600.

### Scale
| Token | Px | Use |
|---|---|---|
| `--dw-text-xs`   | 12px | Mono labels, fine print |
| `--dw-text-sm`   | 14px | UI body, small captions |
| `--dw-text-base` | 16px | Default body |
| `--dw-text-lg`   | 18px | Lead paragraph |
| `--dw-text-xl`   | 22px | Subhead |
| `--dw-text-2xl`  | 28px | H4 |
| `--dw-text-3xl`  | 36px | H3 |
| `--dw-text-4xl`  | 48px | H2 |
| `--dw-text-5xl`  | 64px | H1 |
| `--dw-text-6xl`  | 84px | Display |
| `--dw-text-7xl`  | 112px | Hero display |

### Hierarchy patterns
- **Display headlines** — Newsreader 500–600, tight letter-spacing (`-0.02em`), line-height `1.0–1.05`.
- **Body** — Inter Tight 400, line-height `1.55`, max-width `~65ch`.
- **Mono labels** — JetBrains Mono 600, `text-transform: uppercase`, `letter-spacing: 0.1–0.18em`, used for metadata, eyebrows, section numbers.
- **Italic emphasis** — Newsreader italic for key brand phrases (e.g., *"away"* in the tagline). Use sparingly.

---

## Spacing scale
| Token | Px |
|---|---|
| `--dw-space-1` | 4px |
| `--dw-space-2` | 8px |
| `--dw-space-3` | 12px |
| `--dw-space-4` | 16px |
| `--dw-space-5` | 24px |
| `--dw-space-6` | 32px |
| `--dw-space-7` | 48px |
| `--dw-space-8` | 64px |
| `--dw-space-9` | 96px |
| `--dw-space-10` | 128px |

Use `gap:` (flex/grid) over margins. Vertical rhythm between sections is typically `--dw-space-9` (96px) on desktop, `--dw-space-7` (48px) on mobile.

---

## Radii
| Token | Value | Use |
|---|---|---|
| `--dw-radius-sm`   | 2px   | Tags, chips |
| `--dw-radius-md`   | 4px   | Inputs, small cards |
| `--dw-radius-lg`   | 8px   | Cards, panels |
| `--dw-radius-xl`   | 14px  | Hero cards, modals |
| `--dw-radius-pill` | 999px | Buttons, badges |

DeerWall is **not** a "rounded everything" brand. Buttons are pills, but cards are calmly rounded (8px), and hero panels at most 14px. Avoid 16px+ rounding except on bottle silhouettes.

---

## Shadows
```css
--dw-shadow-sm: 0 1px 2px rgba(31, 26, 20, 0.06), 0 1px 1px rgba(31, 26, 20, 0.04);
--dw-shadow-md: 0 4px 12px rgba(31, 26, 20, 0.08), 0 2px 4px rgba(31, 26, 20, 0.04);
--dw-shadow-lg: 0 18px 40px rgba(31, 26, 20, 0.14), 0 4px 12px rgba(31, 26, 20, 0.06);
--dw-shadow-xl: 0 30px 80px rgba(31, 26, 20, 0.18);
```

Shadow color is warm (matches `--dw-ink-800`), never neutral gray. Use shadows sparingly — the brand prefers borders and tonal contrast.

---

## Borders
```css
--dw-border-thin:   1px solid rgba(31, 26, 20, 0.10);
--dw-border-medium: 1px solid rgba(31, 26, 20, 0.18);
--dw-border-strong: 1px solid rgba(31, 26, 20, 0.32);
```

The brand uses borders heavily for editorial structure. Default card border is `--dw-border-thin`.

---

## Motion
```css
--dw-ease:     cubic-bezier(0.2, 0.8, 0.2, 1);   /* default */
--dw-ease-in:  cubic-bezier(0.4, 0, 1, 1);
--dw-dur-fast: 150ms;     /* hovers, toggles */
--dw-dur-base: 240ms;     /* most transitions */
--dw-dur-slow: 400ms;     /* page-level, scroll-triggered */
```

The brand is calm. Avoid spring physics, bounces, or anything over 500ms unless it's an intentional cinematic moment.

---

## Token mapping (for various target stacks)

### Tailwind v4 (`@theme`)
```css
@theme {
  --color-orange-500: #EE6B1F;
  --color-ink-800: #1F1A14;
  --color-sand-50: #FAF6F0;
  /* ...etc */
  --font-display: 'Newsreader', serif;
  --font-sans: 'Inter Tight', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
}
```

### CSS-in-JS theme object
```ts
export const theme = {
  colors: {
    orange: { 50: '#FDF1E6', 100: '#FBE2CD', /* ... */ 500: '#EE6B1F', /* ... */ 950: '#3D1A09' },
    forest: { 100: '#D5E2D9', /* ... */ 700: '#254834', /* ... */ 900: '#122319' },
    ink:    { 500: '#5A5246', /* ... */ 800: '#1F1A14', /* ... */ 950: '#0B0907' },
    sand:   { 50: '#FAF6F0', /* ... */ },
    stone:  { 400: '#A89F8C', /* ... */ 700: '#3A352B' },
    success: '#3D7553', warning: '#D89B30', danger: '#B53626', info: '#2F5C42',
  },
  font: { display: "'Newsreader', serif", sans: "'Inter Tight', sans-serif", mono: "'JetBrains Mono', monospace" },
  // ...
};
```

### SwiftUI
```swift
extension Color {
    static let dwOrange500 = Color(red: 0.933, green: 0.420, blue: 0.122) // #EE6B1F
    static let dwInk800    = Color(red: 0.122, green: 0.102, blue: 0.078) // #1F1A14
    static let dwSand50    = Color(red: 0.980, green: 0.965, blue: 0.941) // #FAF6F0
    // ...
}
```
