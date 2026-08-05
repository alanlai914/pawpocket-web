# Child Home Browser QA

Date: 2026-08-05 (UTC+8)

## Current status

`PASS_ENGINEERING_WITH_VISUAL_BLOCKER`

The application builds and runs, but the desktop child-home image assets are not yet acceptable for visual approval.

## Source of truth

- Locked product baseline: `docs/PRODUCT_SPEC.md`, `docs/DECISIONS.md`, `docs/COPY_DECK.md`.
- Approved visual direction: confirmed package `Home_Landscape_Approved_Direction.png`.
- Runtime asset manifest: `public/assets/pawpocket/asset-manifest.json`.

## Automated verification

GitHub Actions currently passes:

- dependency installation on Node.js 22;
- runtime asset restoration and SHA-256 verification;
- ESLint;
- Vitest;
- Next.js production build;
- live route smoke tests against `npm start`;
- headless Chrome screenshots at 1366×1024 and 390×844.

## Viewport review

| Viewport | Result |
|---|---|
| 1366×1024 landscape | Layout is complete and has no overflow, but character, wallet, navigation artwork, and scene edges are visibly soft. **Visual fail.** |
| 390×844 portrait | Dedicated compact layout now shows balance, cat, and all three primary entrances within the first viewport. No horizontal overflow. **Layout pass; final asset-quality review pending.** |

## Root cause of desktop blur

The first implementation compressed the child-home art into a 1000×700 atlas. The atlas entries were then enlarged beyond their source resolution:

- cat: 240×240 source, rendered up to about 560 CSS px;
- wallet: 300×200 source, rendered up to about 560 CSS px;
- wish/review: approximately 220×293 source, rendered around 330 CSS px;
- scene edges: 120×320 and 64×320 source, enlarged across the background.

This is an implementation error, not merely screenshot compression. The atlas must be replaced by high-resolution production assets or a properly sized 2×/3× atlas.

## Remediation prepared

The following higher-resolution replacements have been prepared from approved masters and deterministic extraction:

- cat: 960×960;
- balance wallet: 1100×734;
- navigation wallet: 900×600;
- wish entrance: 680×920;
- review entrance: 715×820;
- coins: 420×420;
- larger scene-edge crops.

They remain `DRAFT_EDGE_QA` until their blue-background edge review and browser replacement pass.

## Mobile layout correction

At 390×844 the page no longer reuses the iPad vertical stack. The compact layout now uses:

- balance and cat side by side;
- three 124px-tall primary entrance rows;
- touch targets at or above 64 CSS px;
- all three entrances visible in the first viewport.

## TTS status

- The locked baseline copy has been restored to `docs/COPY_DECK.md`.
- A revised review draft is in `docs/TTS_SCRIPT_REVIEW_v1.md`.
- The first six IndexTTS items are defined in `content/audio/tts-manifest.review.json`.
- Audio generation is blocked until copy and voice profile are approved.

## Remaining gates

1. Replace the low-resolution child-home atlas with the prepared high-resolution assets.
2. Re-run 1366×1024 and iPad 1024×768 visual comparisons.
3. Obtain manual edge approval for the transparent production assets.
4. Approve the TTS script and voice identity, then generate and review fixed audio.
5. Replace the temporary scene/background treatment when final BG-01/BG-02 are approved.
