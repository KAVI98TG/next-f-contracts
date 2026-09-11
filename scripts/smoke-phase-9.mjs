import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const failures = [];
const passes = [];
const check = (name, condition, detail = "") => condition ? passes.push(name) : failures.push(`${name}${detail ? `: ${detail}` : ""}`);
function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(root);
for (const file of files.filter((item) => item.endsWith(".json"))) {
  try {
    JSON.parse(fs.readFileSync(file, "utf8"));
    passes.push(`JSON: ${path.relative(root, file)}`);
  } catch (error) {
    failures.push(`JSON parse: ${path.relative(root, file)}: ${error.message}`);
  }
}

for (const file of files.filter((item) => item.endsWith(".js") || item.endsWith(".mjs"))) {
  const result = spawnSync(process.execPath, ["--check", file], { encoding: "utf8" });
  check(`JS syntax: ${path.relative(root, file)}`, result.status === 0, (result.stderr || "").trim());
}

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const ids = [...html.matchAll(/\sid=["']([^"']+)["']/g)].map((match) => match[1]);
check("HTML IDs unique", ids.length === new Set(ids).size);

const refs = [...html.matchAll(/(?:href|src)=["'](\.\/[^"']*)["']/g)].map((match) => match[1].split(/[?#]/)[0]);
for (const ref of new Set(refs)) check(`HTML asset exists: ${ref}`, fs.existsSync(path.join(root, ref.slice(2))));

const registry = JSON.parse(fs.readFileSync(path.join(root, "registry/registry.json"), "utf8"));
const meta = JSON.parse(fs.readFileSync(path.join(root, "registry/registry-meta.json"), "utf8"));
const allowedRelationships = new Set(meta.allowedRelationshipTypes);
for (const item of registry.items) {
  check(`Registry source exists: ${item.id}`, fs.existsSync(path.join(root, item.source)), item.source);
  for (const relationship of item.relationships || []) {
    check(`Relationship type allowed: ${item.id}.${relationship.type}`, allowedRelationships.has(relationship.type), relationship.type);
  }
}

const marketingIndexPath = path.join(root, "registry/marketing/index.json");
const marketingIndex = JSON.parse(fs.readFileSync(marketingIndexPath, "utf8"));
check("Marketing index has 43 definitions", marketingIndex.definitionCount === 43, marketingIndex.definitionCount);
check("Marketing source definition count is 43", fs.readdirSync(path.join(root, "registry/marketing/definitions")).filter((name) => name.endsWith(".json")).length === 43);
check("Tracking vocabulary has 13 events", JSON.parse(fs.readFileSync(path.join(root, "registry/marketing/tracking-events.json"), "utf8")).events.length === 13);

const generated = fs.readFileSync(path.join(root, "js/generated-marketing-schemas.js"), "utf8");
const digest = crypto.createHash("sha256").update(fs.readFileSync(marketingIndexPath, "utf8")).digest("hex");
check("Marketing fallback digest synchronized", generated.includes(digest), digest);

const css = files.filter((file) => file.endsWith(".css")).map((file) => fs.readFileSync(file, "utf8")).join("\n");
check("Light theme declared", html.includes('content="light"'));
check("No dark color-scheme media query", !/@media\s*\([^)]*prefers-color-scheme\s*:\s*dark/i.test(css));
check("No backdrop-filter", !/backdrop-filter\s*:/i.test(css));
check("No CSS perspective/3D", !/perspective\s*:|rotate[XYZ]\s*\(/i.test(css));

console.log("NEXT F Contracts Phase 9 repository smoke test");
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if (failures.length) {
  console.error("\nFailures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log("PASS - repository structure, syntax, references, Marketing registry and light-only UI constraints are valid.");
