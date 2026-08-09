# Implementation Status

Updated: 2026-08-05 (UTC+8)

Branch: `feat/production-assets-and-first-slice`

## Workflow

Approved masters → independent production assets → repository integration → browser implementation and QA → optional Figma sync.

## Engineering state

- Next.js App Router + TypeScript baseline is running.
- Runtime asset restoration and SHA-256 checks pass.
- ESLint, Vitest, production build, live route smoke tests, and browser screenshot capture pass in GitHub Actions.
- Draft PR: #1.

## Child-home state

### iPad / landscape

- Information hierarchy and routes are implemented.
- The current 1000×700 atlas is too small for the rendered desktop sizes.
- Desktop visual status is `FAIL_BLURRY_ASSETS`, even though engineering checks pass.
- High-resolution replacement assets have been prepared and require repository integration plus edge review.

### Phone / 390×844

- A dedicated compact composition is implemented.
- Balance and cat appear side by side.
- 钱包、愿望、回顾 all appear within the first viewport.
- No horizontal overflow; primary targets remain at least 64 CSS px.

## Copy and audio

- The confirmed package already contained a locked `COPY_DECK.md`; it has now been restored to the repository.
- `docs/TTS_SCRIPT_REVIEW_v1.md` contains the review draft for all core child flows.
- `content/audio/tts-manifest.review.json` defines the six-file first IndexTTS batch.
- Audio has not been generated because the copy and voice identity are not yet approved.

## Remaining blockers

1. Replace the low-resolution child-home atlas with high-resolution assets.
2. Approve transparent edges and re-run iPad visual QA.
3. Approve the TTS script and select/authorize a voice reference.
4. Connect the approved manifest to the local IndexTTS deployment and review generated WAV files.
5. Approve final BG-01/BG-02 scene layers.
