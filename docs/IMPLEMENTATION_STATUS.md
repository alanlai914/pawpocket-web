# Implementation Status

Branch: `feat/production-assets-and-first-slice`
Draft PR: `#1`

## Completed in this slice

- Repository initialized from the locked `PawPocket_Baseline_v2_Locked` source package.
- Approved child-home character, wallet, coin, wish, review, and scene-edge art consolidated into one transparent WebP atlas.
- Atlas source is committed as SHA-256-verified text-safe chunks and restored automatically before dev, verification, and build.
- `/child` implemented as the first iPad-first visual slice.
- Parent entry, balance, three primary navigation targets, focus states, pressed feedback, touch sizes, reduced-motion handling, and narrow-screen layout implemented.
- Constrained route boundaries added for wallet, wishes, wish detail, weekly review, and parent unlock.
- PWA manifest metadata added.
- GitHub Actions run `30788213769` passed:
  - dependency installation
  - runtime asset restoration and SHA-256 verification
  - ESLint
  - Vitest
  - Next.js production build
  - live Next.js route smoke tests
  - headless Chrome screenshots at 1366×1024 and 390×844

## Source hierarchy

The authoritative documents remain in the confirmed source package for this slice:

1. `PRODUCT_SPEC.md`
2. `DECISIONS.md`
3. `USER_FLOWS.md`
4. `DATA_MODEL.md`
5. `SCREEN_INVENTORY.md`
6. `COPY_DECK.md`
7. `ASSET_MANIFEST.md`

Implementation evidence in this repository:

- `docs/QA_REPORT.md`
- `public/assets/pawpocket/asset-manifest.json`
- `.github/workflows/ci.yml`

## Intentional deviations / remaining gates

- Approved IndexTTS audio files do not yet exist. The speaker button exposes fixed copy as a visual fallback and does not synthesize speech at runtime.
- Final BG-01/BG-02 production scene layers are not approved yet. The implementation uses an approved paper texture sample, approved scene-edge crops, and a temporary code-native wood surface.
- JAR-01A/B/C are excluded because transparent glass cleanup is not yet approved.
- Phase 1 transparent assets remain `DRAFT_EDGE_QA` until manual edge inspection is signed off.
- The PR remains draft until those product-asset gates are resolved or explicitly deferred.
