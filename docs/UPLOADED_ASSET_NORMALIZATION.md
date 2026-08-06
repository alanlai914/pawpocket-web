# PawPocket uploaded asset normalization report

Status: **CANDIDATE_NOT_APPROVED**

## Runtime candidates created

- `CAT-01B`: normalized from the uploaded transparent PNG.
- `COIN-01B`: renamed from the generic ChatGPT filename and normalized.
- `WAL-01-candidate`: the uploaded transparent file named `WAL-02.png` has no cat badge, so it is not accepted as WAL-02. It is retained only as a WAL-01 candidate.

## Blocker

`WAL-02` still requires a transparent master that includes the approved cat badge. None of the RGB QA renders can be promoted to a production transparent asset without a new mask/reconstruction.

## Processing

- Alpha values below 8 were cleared to remove near-transparent generation haze.
- Detached low-alpha halos and broad ground shadows were removed while preserving edge antialiasing near the solid object.
- Each object was cropped to its visible alpha bounds and given a 64 px transparent safety margin.
- PNG masters and lossless WebP runtime candidates were generated.
- Individual black, magenta, cream, wood, and alpha-mask QA files were generated.

No asset has been marked APPROVED or committed to the production runtime yet.
