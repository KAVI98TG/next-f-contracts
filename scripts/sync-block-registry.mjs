import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
const dir = path.join(root, "registry/blocks/definitions");
const files = fs.readdirSync(dir).filter((name) => name.endsWith(".json")).sort();
const schemas = files
  .map((name) => JSON.parse(fs.readFileSync(path.join(dir, name), "utf8")))
  .sort((a, b) => a.$id.localeCompare(b.$id));

const index = {
  registryVersion: version,
  schemaVersion: "1.0.0",
  title: "NEXT F Block Contract Registry",
  description: "Generated index of authoritative Phase 6 reusable Block Contract definitions.",
  definitionCount: schemas.length,
  sectionBlockCount: schemas.filter((item) => item.blockModel.kind === "section").length,
  embeddedSchemaCount: schemas.filter((item) => item.blockModel.kind === "embedded").length,
  sourceDirectory: "registry/blocks/definitions",
  schemas
};

const indexPath = path.join(root, "registry/blocks/index.json");
const raw = JSON.stringify(index, null, 2) + "\n";
fs.writeFileSync(indexPath, raw, "utf8");

const digest = crypto.createHash("sha256").update(raw).digest("hex");
fs.writeFileSync(
  path.join(root, "js/generated-blocks.js"),
  `// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/blocks/index.json\n// SHA-256: ${digest}\nexport const GENERATED_BLOCKS_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_BLOCKS = ${JSON.stringify(index, null, 2)};\n`,
  "utf8"
);

const registryPath = path.join(root, "registry/registry.json");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "blocks-sync");

for (const schema of schemas) {
  const key = schema.$id
    .split(".", 2)[1]
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();

  registry.items.push({
    id: schema.$id,
    name: schema.name,
    domain: "blocks",
    type: schema.blockModel.kind === "section" ? "block" : "schema",
    version: schema.version,
    status: schema.status,
    description: schema.description,
    source: `registry/blocks/definitions/${key}.json`,
    phase: 6,
    introducedIn: "0.7.0",
    tags: [
      "block-contract",
      schema.category,
      schema.blockModel.kind,
      ...schema.fields.map((field) => field.key).slice(0, 6)
    ],
    relationships: [
      {
        type: "implements",
        target: "blocks.blockContractStandard",
        description: "Implements the Phase 6 Block Contract standard."
      },
      ...schema.relationships
    ],
    permissions: [],
    events: [],
    managedBy: "blocks-sync"
  });
}

registry.items.sort((a, b) => a.id.localeCompare(b.id));
fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2) + "\n", "utf8");

const result = spawnSync(
  process.execPath,
  [path.join(root, "scripts/generate-registry-bootstrap.mjs")],
  { stdio: "inherit" }
);
if (result.status !== 0) process.exit(result.status ?? 1);

console.log(`Synchronized ${schemas.length} Block Contracts.`);
