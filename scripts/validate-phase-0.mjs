import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.cwd());
const requiredFiles = [
  "VERSION","README.md","CHANGELOG.md","AGENTS.md",
  "standards/00-contract-constitution.md","standards/01-terminology.md","standards/02-naming-standard.md",
  "standards/03-architectural-rules.md","standards/04-ownership-boundaries.md","standards/05-security-boundaries.md",
  "standards/06-contract-lifecycle.md","standards/07-compatibility-policy.md","standards/08-codex-authority-rules.md",
  "registry/terminology.json","registry/reserved-terms.json","registry/naming-rules.json","registry/architectural-rules.json",
  "checks/phase-0-acceptance.json"
];

const failures = [];
const passes = [];
function check(name, condition, detail = "") {
  if (condition) passes.push(name);
  else failures.push(`${name}${detail ? `: ${detail}` : ""}`);
}
for (const rel of requiredFiles) check(`File exists: ${rel}`, fs.existsSync(path.join(root, rel)));
const repositoryVersion = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
function readJson(rel) {
  try { return JSON.parse(fs.readFileSync(path.join(root, rel), "utf8")); }
  catch (error) { failures.push(`Valid JSON: ${rel}: ${error.message}`); return null; }
}
const terminology = readJson("registry/terminology.json");
const reserved = readJson("registry/reserved-terms.json");
const naming = readJson("registry/naming-rules.json");
const rules = readJson("registry/architectural-rules.json");
const acceptance = readJson("checks/phase-0-acceptance.json");
const phase0Version = acceptance?.version ?? "0.1.0";
for (const [name, obj] of Object.entries({terminology, reserved, naming, rules})) {
  if (obj) check(`${name} version matches Phase 0 baseline`, obj.registryVersion === phase0Version);
}
if (terminology) {
  const ids = terminology.terms.map((x) => x.canonicalId);
  check("Terminology canonical IDs are unique", ids.length === new Set(ids).size);
  const requiredTerms = ["organization","site","workspace","module","capability","schema","event","webhook","permission","role","integration","connector","siteManifest","contract","contractVersion","apiVersion","commerceCustomer"];
  for (const term of requiredTerms) check(`Required term exists: ${term}`, ids.includes(term));
}
if (rules) {
  const ids = rules.rules.map((x) => x.id);
  check("Architectural rule IDs are unique", ids.length === new Set(ids).size);
  check("Architectural rules use AR-### IDs", ids.every((x) => /^AR-\d{3}$/.test(x)));
}
if (naming) {
  check("Field case is camelCase", naming.fieldCase === "camelCase");
  check("Permission pattern is fixed", naming.permissionPattern === "domain.resource.action");
  check("Canonical permission actions are unique", naming.canonicalPermissionActions.length === new Set(naming.canonicalPermissionActions).size);
}
if (acceptance) {
  check("Phase 0 acceptance version is 0.1.0", acceptance.version === "0.1.0");
  check("All Phase 0 acceptance checks passed", acceptance.checks.every((x) => x.passed === true));
}
console.log("NEXT F Contracts Phase 0 validation");
console.log(`Repository version: ${repositoryVersion}`);
console.log(`Phase 0 baseline: ${phase0Version}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if (failures.length) {
  console.error("Failures:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log("PASS - Phase 0 foundation is internally consistent.");
