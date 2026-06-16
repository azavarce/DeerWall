# DeerWall

Source repository for the **DeerWall** brand — all-natural, pet-safe deer-repellent
spray made in Alabama. Sold direct-to-consumer at [deerwall.global](https://deerwall.global).

## Repository layout

| Path | What lives here |
|---|---|
| [`landing-page/`](./landing-page/) | The high-converting Google-Ads landing page (static HTML + CSS, pre-Liquid port). Token-driven, no raw hex outside `tokens.css`. |
| [`design-system/`](./design-system/) | Canonical brand design handoff — tokens, components, imagery rules, implementation notes. Source of truth for visual decisions. |
| [`PRODUCT.md`](./PRODUCT.md) | Audience, brand personality, anti-references, design principles. |
| [`DESIGN.md`](./DESIGN.md) | Visual theme, color strategy, typography, layout, motion. |
| `All Product Images/` | Photo library. |
| `DeerWall pics/` | Legacy reference materials. |

## Brand source of truth

The **design handoff** in [`design-system/`](./design-system/) is the canonical
brand system — editorial typography (Newsreader / Inter Tight / JetBrains Mono),
Sand + Ink + Orange (`#EE6B1F`) palette, restrained-with-committed-orange
strategy. Earlier print-style brand sheets are not load-bearing for digital work.

## Landing page

See [`landing-page/`](./landing-page/) for the current iteration. The page is
authored as static HTML/CSS today; the next milestone is a Shopify Liquid port
so the page can ship on `deerwall.global` with editable sections and a real
`/cart/add` checkout flow.
