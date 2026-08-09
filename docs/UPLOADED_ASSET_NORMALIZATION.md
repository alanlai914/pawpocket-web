# PawPocket uploaded asset normalization report

Status: **APPROVED_BY_USER_PENDING_BINARY_IMPORT**

## Approved runtime assets

The user approved the normalized transparent runtime assets and their individual QA:

- `CAT-01B.webp`
- `COIN-01B.webp`
- `WAL-01.webp` — promoted from the uploaded no-badge wallet candidate
- `WAL-02.webp` — approved cat-badge wallet reconstructed from the packaged WAL-02 group

## Runtime integration

`components/ChildHome.tsx` now prefers the four independent assets from:

```text
public/assets/pawpocket/home-v1/
```

The mapping is:

- Balance wallet body → `WAL-01.webp`
- Balance and wallet-entry coin → `COIN-01B.webp`
- Wallet navigation entry → `WAL-02.webp`
- Home character → `CAT-01B.webp`

A runtime error fallback preserves the previous atlas sprite only when an approved independent file is missing. The old atlas therefore no longer owns these four visual regions once the files are present.

## Binary integrity

The exact required names, dimensions, byte sizes and SHA-256 values are recorded in `public/assets/pawpocket/home-v1/manifest.candidate.json`.

The approved binary package is `PawPocket_Home_Runtime_Approved_v1.zip`; its ZIP SHA-256 is:

```text
c192551cce99806131f1e72c3e06f6626e4346d92f0f5e58c1510c36ff96c140
```

## Remaining mechanical step

The GitHub connector used in this chat can write repository text and Git objects, but it does not expose a local-file parameter for uploading binary files from the runtime. The four approved WebP files still need to be placed at the exact paths above. Until that happens, the fallback prevents a broken page and the manifest keeps the branch state explicit.
