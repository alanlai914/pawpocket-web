# PawPocket Implementation Status

Updated: 2026-08-03 (UTC+8)

## Workflow

Approved masters → independent transparent production assets → repository integration → browser implementation and QA → optional Figma sync.

## Current state

- GitHub App installation and repository write access verified.
- `main` initialized with the project README.
- Construction branch: `feat/production-assets-and-first-slice`.
- Phase 1 production asset package exists outside the repository and remains in edge-QA status.
- First implementation target: iPad-landscape child home screen with three top-level actions: 钱包、愿望、回顾.

## Product constraints

- Amounts, labels, buttons, and pressed states remain code-native.
- Approved contact sheets are not used as interactive page backgrounds.
- Child primary touch targets are at least 64×64 CSS pixels.
- Runtime AI is disabled in v1; fixed audio assets will be integrated separately.

## Pending

- Commit optimized runtime assets.
- Integrate the locked Next.js baseline.
- Run browser QA at 1024×768, 768×1024, 412×915, and 360×800.
- Sync only approved key screens back to Figma after browser acceptance.
