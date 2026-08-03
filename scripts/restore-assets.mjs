import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const spriteDir = path.join(root, "public/assets/pawpocket/sprites");
const outputPath = path.join(spriteDir, "child-home-atlas_v1.webp");
const chunkPrefix = "child-home-atlas_v1.part";
const expectedChunkHashes = [
  "97bee82dd42f3eaebb41d962ecafd0d33bbb9ff087fd367612db6b8e008cfac4",
  "cf5d0b52e62550249041eccea0605dd382120ec24dc236ea91c9e7a4dcd79ac9",
  "6e6001f251369856fdd64fab9e6aa83dfd6237a62a183a2a5fc7f844c41ef77e",
  "209c0f88d1f511b07bc548c9153cc5c48e51cfb90cc4010e1b3ff4a942a630fc",
  "dcdf49b2abbc443dcde809fe006ae2320d27433748518bd6aa06030c220c85fe",
  "bd35205ee73dc27dc21a0e489df2ab288c8de5bf4a3ec23359da085e2543a521",
];
const expectedAtlasHash = "4cf3b6799a0ff2a3aff4890f26b580455e754fdf758193ba6f2cd58d80e2589a";

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

const chunks = [];
for (let index = 1; index <= expectedChunkHashes.length; index += 1) {
  const suffix = String(index).padStart(2, "0");
  const chunkPath = path.join(spriteDir, `${chunkPrefix}${suffix}.b64`);
  const chunk = (await readFile(chunkPath, "utf8")).trim();
  const actualHash = sha256(chunk);

  if (actualHash !== expectedChunkHashes[index - 1]) {
    throw new Error(`Atlas source chunk ${suffix} SHA-256 mismatch: ${actualHash}`);
  }

  chunks.push(chunk);
}

const atlas = Buffer.from(chunks.join(""), "base64");
const atlasHash = sha256(atlas);
if (atlasHash !== expectedAtlasHash) {
  throw new Error(`Restored atlas SHA-256 mismatch: ${atlasHash}`);
}

await mkdir(spriteDir, { recursive: true });
await writeFile(outputPath, atlas);
console.log(`Restored and verified ${path.relative(root, outputPath)} from ${chunks.length} source chunks.`);
