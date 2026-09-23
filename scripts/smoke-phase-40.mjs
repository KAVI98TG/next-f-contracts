import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const pass = [];
const fail = [];
const ok = (name, condition, detail = "") => condition ? pass.push(name) : fail.push(`${name}${detail ? `: ${detail}` : ""}`);
const run = (name, args) => {
  const r = spawnSync(process.execPath, args, { cwd: root, encoding: "utf8" });
  ok(name, r.status === 0, (r.stdout + r.stderr).trim().slice(-1400));
};

run("Phase 40 validator", ["scripts/validate-phase-40.mjs"]);
run("Software starter validation", ["bin/nextf-contract.mjs", "validate", "starters/software/nextf.site.json", "--json"]);
run("Software starter compatibility", ["bin/nextf-contract.mjs", "compatibility", "starters/software/nextf.site.json", "--json"]);

const invalid = [
  "registry/software/fixtures/invalid/browser-trusted-price.json",
  "registry/software/fixtures/invalid/raw-license-public-projection.json",
  "registry/software/fixtures/invalid/automatic-renewal-launch.json"
];
for (const rel of invalid) {
  try { JSON.parse(fs.readFileSync(path.join(root, rel), "utf8")); ok(`Invalid fixture parse ${rel}`, true); }
  catch (error) { ok(`Invalid fixture parse ${rel}`, false, error.message); }
}

const standard = fs.readFileSync(path.join(root, "standards/48-software-contract-standard.md"), "utf8");
ok("Standard says redirect is not payment evidence", standard.includes("success redirect is never payment evidence"));
ok("Standard reserves automatic renewal", standard.includes("Automatic renewal is reserved"));
ok("Standard forbids remote disable on expiry", standard.includes("must not remotely disable"));

console.log(`NEXT F Contracts Phase 40 smoke\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if (fail.length) {
  console.error(fail.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}
console.log("PASS");
