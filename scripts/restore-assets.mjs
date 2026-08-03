import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const spriteDir = path.join(root, "public/assets/pawpocket/sprites");
const outputPath = path.join(spriteDir, "child-home-atlas_v1.webp");
const chunkPrefix = "child-home-atlas_v1.part";
const chunkCount = 6;

const chunks = [];
for (let index = 1; index <= chunkCount; index += 1) {
  const suffix = String(index).padStart(2, "0");
  chunks.push(await readFile(path.join(spriteDir, `${chunkPrefix}${suffix}.b64`), "utf8"));
}

await mkdir(spriteDir, { recursive: true });
await writeFile(outputPath, Buffer.from(chunks.join(""), "base64"));
console.log(`Restored ${path.relative(root, outputPath)} from ${chunkCount} source chunks.`);
