import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const pass = [];
const fail = [];
const ok = (name, condition, detail = "") => condition ? pass.push(name) : fail.push(`${name}${detail ? `: ${detail}` : ""}`);
const run = (name, args) => { const result = spawnSync(process.execPath, args, { cwd: root, encoding: "utf8" }); ok(name, result.status === 0, (result.stdout + result.stderr).trim().slice(-1600)); };
run("Phase 41 validator", ["scripts/validate-phase-41.mjs"]);
for (const rel of fs.readdirSync(path.join(root, "registry/marketing/fixtures/valid"))) {
  if (!["browser-page-view.json", "spa-route-change.json", "commerce-observations.json", "consent-denied-receipt.json", "duplicate-receipt.json", "staging-batch.json", "tracking-disabled.json", "server-form-conversion.json"].includes(rel)) continue;
  try { JSON.parse(fs.readFileSync(path.join(root, "registry/marketing/fixtures/valid", rel), "utf8")); ok(`Fixture parses ${rel}`, true); } catch (error) { ok(`Fixture parses ${rel}`, false, error.message); }
}
const standard = fs.readFileSync(path.join(root, "standards/49-first-party-tracking-platform-standard.md"), "utf8");
ok("Standard preserves observation boundary", standard.includes("Domain Events remain authoritative"));
ok("Standard forbids browser secrets", standard.includes("credentials are prohibited in browser code"));
ok("Standard makes runtime non-claim", standard.includes("does not claim that a production SDK"));
console.log(`NEXT F Contracts Phase 41 smoke\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if (fail.length) { console.error(fail.map((item) => `- ${item}`).join("\n")); process.exit(1); }
console.log("PASS");
