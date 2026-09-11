import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(process.cwd());
const sourcePath = path.join(root, "registry/registry.json");
const outputPath = path.join(root, "js/generated-registry.js");
const raw = fs.readFileSync(sourcePath, "utf8");
const parsed = JSON.parse(raw);
const digest = crypto.createHash("sha256").update(raw).digest("hex");

const banner = `// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/registry.json\n// SHA-256: ${digest}\n`;
const body = `${banner}export const GENERATED_REGISTRY_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_REGISTRY = ${JSON.stringify(parsed, null, 2)};\n`;
fs.writeFileSync(outputPath, body, "utf8");
console.log(`Generated ${path.relative(root, outputPath)} from registry/registry.json`);
console.log(`SHA-256 ${digest}`);
