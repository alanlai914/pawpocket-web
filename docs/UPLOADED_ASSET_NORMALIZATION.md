# PawPocket uploaded asset normalization report

Status: **CANDIDATE_NOT_APPROVED**

## Runtime candidates created

- `CAT-01B`: normalized from the uploaded transparent PNG.
- `COIN-01B`: renamed from the generic ChatGPT filename and normalized.
- `WAL-01-candidate`: the uploaded transparent file named `WAL-02.png` has no cat badge, so it is not accepted as WAL-02. It is retained only as a WAL-01 candidate.
- `WAL-02`: reconstructed from the packaged magenta QA render using a border-seeded foreground mask, one-pixel antialiasing, and edge-color decontamination. It includes the cat badge and now has a transparent PNG/WebP candidate.

## Remaining gate

`WAL-02` is no longer missing, but it remains a candidate until the user visually approves its edge QA and confirms that this packaged WAL-02 variant is the intended production master.

## Processing

- Alpha values below 8 were cleared to remove near-transparent generation haze.
- Detached low-alpha halos and broad ground shadows were removed while preserving edge antialiasing near the solid object.
- Each object was cropped to its visible alpha bounds and given a 64 px transparent safety margin.
- The RGB magenta WAL-02 QA render was converted to transparent RGBA with foreground segmentation and edge-color decontamination.
- PNG masters and lossless WebP runtime candidates were generated.
- Individual black, magenta, cream, wood, and alpha-mask QA files were generated.

No asset has been marked APPROVED or committed to the production runtime yet. The normalized binary package is available separately for user review.
