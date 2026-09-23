import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "dist");
const maxAssetBytes = 25 * 1024 * 1024;
const maxAssetFiles = 20_000;

const publicDirectories = [
  "css",
  "developer",
  "examples",
  "js",
  "registry",
  "standards",
  "starters"
];

const publicFiles = [
  "404.html",
  "CHANGELOG.md",
  "index.html",
  "NEXT-F-WEBSITE-DEVELOPMENT-STANDARD.md",
  "README.md",
  "VERSION"
];

// Cloudflare Static Assets limits individual files to 25 MiB. Contract Diff
// already falls back to js/generated-diff.js when this source file is absent.
const excludedFiles = new Set([
  "registry/diff/snapshots.json",
  "registry/diff/release-manifests.json"
]);

let fileCount = 0;
let totalBytes = 0;
let largestAsset = { path: "", bytes: 0 };

function copyFile(relativePath) {
  const normalized = relativePath.replaceAll("\\", "/");
  if (excludedFiles.has(normalized)) return;

  const source = path.join(root, relativePath);
  const destination = path.join(output, relativePath);
  const stats = fs.statSync(source);
  if (stats.size > maxAssetBytes) {
    throw new Error(`${normalized} is ${(stats.size / 1024 / 1024).toFixed(2)} MiB; Cloudflare permits at most 25 MiB per static asset.`);
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
  fileCount += 1;
  totalBytes += stats.size;
  if (stats.size > largestAsset.bytes) largestAsset = { path: normalized, bytes: stats.size };
}

function copyDirectory(relativeDirectory) {
  const sourceDirectory = path.join(root, relativeDirectory);
  for (const entry of fs.readdirSync(sourceDirectory, { withFileTypes: true })) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`Deployment input cannot contain a symbolic link: ${relativePath}`);
    if (entry.isDirectory()) copyDirectory(relativePath);
    else if (entry.isFile()) copyFile(relativePath);
  }
}

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });

for (const directory of publicDirectories) copyDirectory(directory);
for (const file of publicFiles) copyFile(file);

const headers = `/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: DENY
  Permissions-Policy: camera=(), geolocation=(), microphone=()

/index.html
  Cache-Control: no-cache

/404.html
  Cache-Control: no-cache
`;
fs.writeFileSync(path.join(output, "_headers"), headers, "utf8");
fileCount += 1;
totalBytes += Buffer.byteLength(headers);

if (!fs.existsSync(path.join(output, "js", "generated-diff.js"))) {
  throw new Error("The generated Contract Diff fallback is missing from the deployment.");
}
if (fileCount > maxAssetFiles) {
  throw new Error(`Deployment contains ${fileCount} assets; the Cloudflare Workers free-plan limit is ${maxAssetFiles}.`);
}

console.log("Cloudflare deployment assets prepared.");
console.log(`Output: ${output}`);
console.log(`Assets: ${fileCount}`);
console.log(`Total: ${(totalBytes / 1024 / 1024).toFixed(2)} MiB`);
console.log(`Largest: ${largestAsset.path} (${(largestAsset.bytes / 1024 / 1024).toFixed(2)} MiB)`);
console.log("Excluded: registry/diff/snapshots.json, registry/diff/release-manifests.json (generated browser fallbacks retained)");
