# Child Home Browser QA

Date: 2026-08-03 (UTC+8)

## Source of truth

- Locked product baseline: `docs/PRODUCT_SPEC.md`, `docs/DECISIONS.md`, `docs/COPY_DECK.md`.
- Approved visual direction: `public/approved-masters/child-home.png`.
- Runtime assets: `public/assets/pawpocket/asset-manifest.json`.

## Verification method

The current execution environment could not install npm packages because its configured package registry returned missing packages/timeouts. Therefore this pass did **not** claim a successful `next build`.

For visible browser QA, a static mirror using the same HTML structure, CSS and runtime asset files was loaded into Chromium through Playwright `page.set_content`. The temporary static mirror is not committed; only the resulting evidence images are retained.

## Viewports checked

| Viewport | Result |
|---|---|
| 1366×1024 iPad landscape | No horizontal overflow; all three primary cards visible; parent and voice controls visible. |
| 390×844 mobile portrait | No horizontal overflow; cards stack vertically; all primary touch targets meet 64 CSS px. |

## Measured interaction targets

### iPad landscape

- Navigation cards: approximately 371×410 px each.
- Parent entry: approximately 164×74 px.
- Voice control: 92×92 px.

### Mobile portrait

- Navigation cards: 358×360 px each.
- Parent entry: approximately 123×64 px.
- Voice control: 72×72 px.

All measured primary targets meet the locked 64×64 CSS px minimum.

## Fidelity ledger

| Comparison point | Approved direction | Browser render | Status |
|---|---|---|---|
| Primary composition | Wallet/balance at upper left; waving cat at upper right | Same hierarchy and relative placement | Pass |
| Main navigation | Three large yellow/pink/green entrances | Same three entrances and order: 钱包、愿望、回顾 | Pass |
| Code-native information | Amount and labels must not be baked into images | `10元`, navigation labels, parent label and progress are HTML/CSS | Pass |
| Character and money art | Approved tricolour cat, wallet and cat coins | Uses Phase 1 extracted WebP assets from approved masters | Pass |
| Child interaction size | Large fixed targets, no text-only primary action | Illustrated cards, short labels and 64 px+ targets | Pass |
| Scene material | Cream paper, warm light and wood table | Paper sample and temporary code-native wood surface | Partial — final BG layers pending |
| Voice experience | Fixed, user-triggered audio | User-triggered control exposes fixed copy; no approved audio file yet | Intentional deviation |

## Syntax and structural checks

- Parsed 33 TypeScript/TSX files using the TypeScript parser: zero syntax errors.
- Runtime asset files have SHA-256 entries in the asset manifest.
- Three primary navigation links are present.
- Reduced-motion and visible keyboard focus styles are implemented.

## Remaining gates

1. Install dependencies and run `npm run build`, `npm run lint`, and `npm test` in CI/Codex.
2. Replace the temporary wood surface with approved BG-02.
3. Add reviewed IndexTTS audio files and verify tap-to-play behavior.
4. Perform manual edge QA and approve Phase 1 assets currently marked `DRAFT_EDGE_QA`.
5. Validate the actual Next.js render against the retained screenshots before merging.
