import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const spriteDir = path.join(root, "public/assets/pawpocket/sprites");
const outputPath = path.join(spriteDir, "child-home-atlas_v1.webp");
const sources = [
  ["child-home-atlas_v1.part01.b64", "97bee82dd42f3eaebb41d962ecafd0d33bbb9ff087fd367612db6b8e008cfac4"],
  ["child-home-atlas_v1.part02.b64", "cf5d0b52e62550249041eccea0605dd382120ec24dc236ea91c9e7a4dcd79ac9"],
  ["child-home-atlas_v1.part03.b64", "6e6001f251369856fdd64fab9e6aa83dfd6237a62a183a2a5fc7f844c41ef77e"],
  ["child-home-atlas_v1.part04a.b64", "062bc6403670e14df625e2a2830c8a68acce579be8b7b34b406342c8279a875f"],
  ["child-home-atlas_v1.part04b.b64", "d527a18b4ccd4e4f7e3d6b98b2135039ae82544b994c7558e0abca43ab97054e"],
  ["child-home-atlas_v1.part04c.b64", "254f5671a8619730c50533cf5e9af7214b5aa904b6e24b95c98d684d463f0b23"],
  ["child-home-atlas_v1.part04d.b64", "dd90276e5fe74ca8b79fc3b9ff9a1ae412b605218e460494a047c2b28167c1ff"],
  ["child-home-atlas_v1.part05.b64", "dcdf49b2abbc443dcde809fe006ae2320d27433748518bd6aa06030c220c85fe"],
  ["child-home-atlas_v1.part06.b64", "bd35205ee73dc27dc21a0e489df2ab288c8de5bf4a3ec23359da085e2543a521"],
];
const expectedAtlasHash = "4cf3b6799a0ff2a3aff4890f26b580455e754fdf758193ba6f2cd58d80e2589a";

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

const chunks = [];
for (const [filename, expectedHash] of sources) {
  const chunk = (await readFile(path.join(spriteDir, filename), "utf8")).trim();
  const actualHash = sha256(chunk);

  if (actualHash !== expectedHash) {
    throw new Error(`${filename} SHA-256 mismatch: ${actualHash}`);
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
console.log(`Restored and verified ${path.relative(root, outputPath)} from ${sources.length} source chunks.`);
