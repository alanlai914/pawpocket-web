import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const root = process.cwd();
const manifestPath = path.join(root, "public/assets/pawpocket/asset-manifest.json");
const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
const failures = [];

for (const asset of manifest.assets) {
  const filePath = path.join(root, asset.path);
  try {
    const bytes = await readFile(filePath);
    const sha256 = createHash("sha256").update(bytes).digest("hex");
    if (sha256 !== asset.sha256) failures.push(`${asset.path}: SHA-256 mismatch`);
  } catch {
    failures.push(`${asset.path}: missing`);
  }
}

if (failures.length) {
  console.error("PawPocket asset verification failed:\n" + failures.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}

console.log(`Verified ${manifest.assets.length} PawPocket runtime assets.`);
