import fs from "node:fs";
import { spawnSync } from "node:child_process";
import { GENERATED_VALIDATION } from "../js/generated-validation.js";
import { validateManifestObject } from "../js/manifest-validation-core.js";

const pass = [];
const fail = [];
const ok = (name, condition) => condition ? pass.push(name) : fail.push(name);
const read = (rel) => JSON.parse(fs.readFileSync(rel, "utf8"));

ok("Version 1.1.0", fs.readFileSync("VERSION", "utf8").trim() === "1.1.0");
const access = read("registry/customer-access/index.json");
ok("Policies generated", access.policyCount === access.policies.length && access.policyCount > 0);
ok("All four modes represented", ["hidden", "read_only", "direct_edit", "approval_required"].every((mode) => access.modes[mode] > 0));
ok("No demo production writes", access.policies.every((policy) => policy.demoPolicy.productionWrites === false));
ok("Portal page", fs.existsSync("js/customer-access-pages.js"));
ok("Portal engine", fs.existsSync("js/customer-access-registry-engine.js"));
ok("Portal styles", fs.existsSync("css/customer-access.css"));
const baseManifest = structuredClone(GENERATED_VALIDATION.samples[0].manifest);
baseManifest.contracts.contractVersion = "1.1.0";
baseManifest.cms.customerAccess = {
  policyVersion: "1.1.0",
  restrictions: [{ policyRef: "customerAccess.policy.content.blogposts", mode: "read_only", disabledActions: ["publish"] }]
};
const restrictiveResult = validateManifestObject(baseManifest, GENERATED_VALIDATION);
ok("Restrictive manifest override accepted", restrictiveResult.valid);
const broadeningManifest = structuredClone(baseManifest);
broadeningManifest.cms.customerAccess.restrictions = [{ policyRef: "customerAccess.policy.webhooks.secrets", mode: "approval_required" }];
const broadeningResult = validateManifestObject(broadeningManifest, GENERATED_VALIDATION);
ok("Broadening manifest override rejected", !broadeningResult.valid && broadeningResult.diagnostics.some((item) => item.code === "customer-access.broadens-mode"));
ok("Registry detail integration", fs.readFileSync("js/router.js", "utf8").includes("hydrateRegistryCustomerAccess"));
const validation = spawnSync(process.execPath, ["scripts/validate-phase-38.mjs"], { encoding: "utf8" });
ok("Phase 38 validator", validation.status === 0);

console.log(`NEXT F Contracts Phase 38 smoke\nPasses: ${pass.length}\nFailures: ${fail.length}`);
if (fail.length) {
  console.error(fail.map((item) => `- ${item}`).join("\n"));
  if (validation.status !== 0) console.error((validation.stdout + validation.stderr).slice(-4000));
  process.exit(1);
}
console.log("PASS");
