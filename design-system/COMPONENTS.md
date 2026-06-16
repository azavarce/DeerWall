# DeerWall — Component Specs

These specs come from `source/components.html`. Open that file in a browser alongside this doc to see live examples.

All measurements are in `px` unless noted. Color values reference token names (see `TOKENS.md`).

---

## Buttons

Pill-shaped (`border-radius: 100px`), Inter Tight 600, with a 1.5px transparent border that's only colored on the outline variant.

### Anatomy
```
[ icon? ]  Label  [ icon? ]
←padding-x→     ←padding-x→
```

### Sizes
| Size | Padding | Font-size |
|---|---|---|
| `sm` | `8px 14px` | 13px |
| `md` (default) | `12px 20px` | 14px |
| `lg` | `16px 28px` | 16px |

Optional icons: 16×16 inline SVG, `stroke: currentColor`, `stroke-width: 1.75`, `stroke-linecap: round`, `stroke-linejoin: round`, `fill: none`. Gap between icon and label: `8px`.

### Variants
| Variant | Default | Hover |
|---|---|---|
| `primary`   | bg `orange-500`, text white | bg `orange-600` |
| `secondary` | bg `ink-800`, text white | bg `ink-700` |
| `outline`   | bg transparent, text `ink-800`, border `ink-800` | bg `ink-800`, text white |
| `ghost`     | bg transparent, text `ink-800` | bg `rgba(31,26,20,0.06)` |
| `link`      | bg transparent, text `orange-700`, `border-bottom: 1.5px currentColor`, padding 0 | (no hover treatment) |
| `disabled`  | bg `stone-400`, text white, `cursor: not-allowed` | — |

On dark surfaces: `outline` becomes white text + `rgba(255,255,255,0.4)` border; `ghost` becomes white text.

### Transition
`all 150ms cubic-bezier(0.2, 0.8, 0.2, 1)` (= `--dw-dur-fast` `--dw-ease`).

### React example
```tsx
<Button variant="primary" size="md" leadingIcon={<ShieldIcon />}>
  Shop now
</Button>
```

---

## Form fields

```
LABEL                          ← mono 11px, uppercase, letter-spacing 0.1em, color stone-600
[ input ]                      ← Inter Tight 15px, 12×14 padding, 1.5px border rgba(31,26,20,0.18), radius 4px
help text or err text          ← 12px, stone-500 (help) or danger (error)
```

- Focus: border-color → `orange-500`, no outline.
- Error state: `border-color: danger` (`#B53626`).
- Background: white. Inside dark cards, the field stays white.

Vertical gap between label / input / help: `6px` (use `flex-direction: column; gap: 6px`).

### Checkbox
- 18×18, border 1.5px `stone-500`, radius 4px.
- `on`: bg `orange-500`, border `orange-500`, white check (5×9 with rotated bottom-right border).

### Radio
- 18×18, border 1.5px `stone-500`, full circle.
- `on`: border `orange-500`, inner dot inset 3px, bg `orange-500`.

### Toggle
- 40×22 pill. `bg: stone-400`, `cursor: pointer`.
- Knob: 18×18 white circle, top 2 left 2.
- `on`: bg `orange-500`, knob slides to `left: 20px`.
- Transition: `150ms ease`.

---

## Badges

Inline-flex, `padding: 4px 10px`, JetBrains Mono 600, `font-size: 11px`, `letter-spacing: 0.06em`, `border-radius: 100px`. Optional 6px gap for an inline icon/dot.

| Variant | Bg | Text |
|---|---|---|
| `primary` | `orange-500` | white |
| `soft`    | `orange-100` | `orange-800` |
| `success` | `forest-100` | `forest-800` |
| `warning` | `#FBE9C2` | `#6B4818` |
| `danger`  | `#F8D9D5` | `#7E1F15` |
| `neutral` | `sand-200` | `stone-700` |
| `outline` | transparent | `ink-800`, border 1.5px `ink-800` |

---

## Pills (filter chips)

`8px 14px` padding, 1px border `rgba(31,26,20,0.18)`, radius 100px, `font-size: 13px`. Optional 8px-gap inline icon.
- Hover: border → `ink-800`.
- `on`: bg `ink-800`, text white, border `ink-800`.

---

## Cards

### Generic UI card
- bg white, border `--dw-border-thin`, radius 8px (`--dw-radius-lg`), padding 40px.
- Dark variant: bg `ink-900`, text `sand-50`, no border. Mono labels become `rgba(250,246,240,0.55)`.

### Product card (`card-product`)
- bg white, border `--dw-border-thin`, radius 8px, `overflow: hidden`.
- **Image well (`.ph`)**: aspect-ratio 4/3, bg `sand-100`, padding 24px. Image `object-fit: contain`, max-height/width 100%.
- **Meta** (`padding: 20px 24px 24px`):
  - Tag: mono 10px, uppercase, `letter-spacing: 0.15em`, color `orange-700`.
  - Title (`h4`): Newsreader 600, 20px, `letter-spacing: -0.01em`, margin `6px 0 6px`.
  - Description: 13px, `stone-600`, line-height 1.5, margin `0 0 16px`.

---

## Layout primitives

```css
.row-stack { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; }
.col-stack { display: flex; flex-direction: column; gap: 12px; }
.grid-2    { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
.grid-3    { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
```

These are scaffolding for the brand book. In your codebase, use the framework's idiomatic equivalents (Tailwind classes, styled-components, etc.). They demonstrate that gap-based layout is the norm — never use margin between siblings.

---

## "Mono label" pattern

Used everywhere as eyebrow / metadata / section tags:

```css
.label {
  font-family: var(--dw-font-mono);
  font-size: 11px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--dw-stone-500);
  font-weight: 600;
}
```

Variants:
- On orange/dark: color `rgba(255,255,255,0.7)`.
- As an "eyebrow" above headlines: `color: orange-700`, `letter-spacing: 0.15em`.

This is one of the brand's strongest signatures — use it generously above headlines, on cards, in nav.

---

## Section header pattern

The brand book uses a recurring section header structure. In production:

```
EYEBROW · MONO · ORANGE-700              ← optional
Big Newsreader headline                  ← display, 48–84px
Optional Inter Tight lead paragraph,     ← 18–22px, stone-600, max-width 65ch
65ch wide.
```

---

## Component checklist (what's specified vs. what you'll need to extend)

✅ **Specified in `components.html`:** buttons, inputs, textarea, select, checkbox, radio, toggle, badges, pills, product cards, generic UI cards.

⚠️ **Not yet specified — extend the system using the existing tokens:**
- Modals / dialogs (use `--dw-radius-xl` 14px, `--dw-shadow-xl`, `sand-50` bg)
- Toasts / notifications (badge-style with semantic colors)
- Tabs (likely the pill pattern)
- Tooltips (ink-800 bg, sand-50 text, mono small)
- Empty states (Newsreader headline + Inter Tight body, illustrative photo)
- Pagination (pill pattern)
- Breadcrumbs (mono separator)
- Tables (border-thin dividers, mono column headers)
- Navigation (see brand book sidebar for a reference, but production nav should be horizontal/site-style)

When extending: stay inside the token set. No new colors, no new radii, no new font families.
