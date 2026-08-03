# Child Home Browser QA

Date: 2026-08-03 (UTC+8)

## Source of truth

- Locked product baseline: `PawPocket_Baseline_v2_Locked` confirmed source package.
- Approved visual direction: `public/approved-masters/child-home.png` inside the locked package.
- Runtime assets: `public/assets/pawpocket/asset-manifest.json`.

## Verification method

GitHub Actions run `30788213769` executed the actual Next.js application on Node.js 22.

The workflow completed:

- `npm install --no-audit --no-fund`
- `npm run verify:assets`
- `npm run lint`
- `npm test`
- `npm run build`
- `npm start`
- live HTTP checks for `/child`, wallet, wish detail, review, and parent unlock routes
- headless Chrome screenshots of the live production build

The browser QA screenshots are retained in the `pawpocket-browser-qa` artifact from that run.

## Viewports checked

| Viewport | Result |
|---|---|
| 1366×1024, iPad landscape ratio | No horizontal overflow; balance, character, parent entry, voice control, and all three primary cards visible. |
| 390×844, phone portrait | No horizontal overflow; the screen continues vertically and primary cards stack below the first viewport. |

## Interaction targets

### iPad landscape

- Navigation cards: approximately 371×410 CSS px each.
- Parent entry: approximately 164×74 CSS px.
- Voice control: 92×92 CSS px.

### Phone portrait

- Navigation cards: approximately 358×360 CSS px each.
- Parent entry: approximately 123×64 CSS px.
- Voice control: 72×72 CSS px.

All measured primary targets meet the locked 64×64 CSS px minimum.

## Fidelity ledger

| Comparison point | Approved direction | Live browser render | Status |
|---|---|---|---|
| Primary composition | Large wallet/balance upper left; prominent waving cat upper right | Same hierarchy; scale was increased after first browser review | Pass |
| Main navigation | Three large yellow/pink/green entrances | Same order and dominant color roles: 钱包、愿望、回顾 | Pass |
| Code-native information | Amount, labels, controls, and changing state must not be baked into images | `10元`, labels, parent entry, progress, focus, and pressed states are HTML/CSS | Pass |
| Character and money art | Approved tricolour cat, wallet, and cat coins | Uses the transparent atlas derived from approved masters | Pass |
| Chinese typography | Readable rounded Chinese interface labels | CI installs Noto CJK for Linux Chrome; iPad uses PingFang SC fallback | Pass |
| Child interaction size | Large fixed targets and no text-only primary action | Illustrated entrances, short labels, and 64 CSS px+ targets | Pass |
| Scene material | Cream paper, warm light, and wood table | Approved paper/edge art plus temporary code-native wood surface | Partial — final BG layers pending |
| Voice experience | Fixed, user-triggered audio | User-triggered control exposes fixed copy; approved audio file is not yet available | Intentional deviation |

## Material issues fixed during QA

1. Long Base64 source transfer corrupted one atlas segment. The segment was split into four smaller SHA-256-verified chunks; final atlas restoration now passes.
2. Linux Chrome initially rendered Chinese labels as missing-glyph boxes. Noto CJK was added to the visual-QA environment and font stack.
3. The character and wallet were too small compared with the approved master. Landscape composition and overlap were adjusted before the final screenshots.
4. The missing `/child/wishes/[id]` route was added so all visible primary navigation paths return successful responses.

## Remaining gates

1. Replace the temporary wood surface and paper sample with approved final BG-01/BG-02 layers.
2. Add reviewed IndexTTS fixed audio files and verify explicit tap-to-play behavior.
3. Perform manual edge QA and approve Phase 1 assets currently marked `DRAFT_EDGE_QA`.
4. Decide whether the remaining product-asset gates block merging the code slice or are deferred to a follow-up PR.
