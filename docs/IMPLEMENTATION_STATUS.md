# Implementation Status

Branch: `feat/production-assets-and-first-slice`

## Completed in this slice

- Repository initialized from `PawPocket_Baseline_v2_Locked`.
- Phase 1 transparent character, wallet, and coin assets copied into runtime paths.
- NAV-02 and NAV-03 normal-state art extracted from approved masters; labels and press feedback remain code-native.
- `/child` rebuilt as the first iPad-first visual slice.
- Parent entry, balance, three primary navigation targets, focus states, touch sizes, reduced-motion handling, and narrow-screen layout implemented.
- PWA manifest metadata added.

## Source hierarchy

1. `docs/PRODUCT_SPEC.md`
2. `docs/DECISIONS.md`
3. `docs/USER_FLOWS.md`
4. `docs/DATA_MODEL.md`
5. `docs/SCREEN_INVENTORY.md`
6. `docs/COPY_DECK.md`
7. `docs/ASSET_MANIFEST.md`

## Intentional deviations / blockers

- Approved IndexTTS audio files do not yet exist. The speaker button exposes fixed copy as a visual fallback and does not synthesize speech at runtime.
- BG-01/BG-02 production scene layers are not approved yet. The implementation uses an approved paper texture sample, approved decorative edge crops, and a code-native temporary wood surface.
- JAR-01A/B/C are excluded because transparent glass cleanup is not yet approved.
- Local package installation is blocked in the current execution environment by registry availability; browser QA is performed with a static mirror and Chromium until CI can install dependencies.

## GitHub binary transfer note

The code and asset files were prepared together locally. The expected paths and SHA-256 values are recorded in `public/assets/pawpocket/asset-manifest.json`; merge remains blocked until those paths exist and `npm run verify:assets` passes.
