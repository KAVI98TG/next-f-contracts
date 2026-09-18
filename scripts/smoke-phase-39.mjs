import fs from "node:fs";
import { spawnSync } from "node:child_process";

const pass = [];
const fail = [];
const ok = (name, condition, detail = "") => condition ? pass.push(name) : fail.push(`${name}${detail ? `: ${detail}` : ""}`);
const read = (rel) => JSON.parse(fs.readFileSync(rel, "utf8"));

const version = fs.readFileSync("VERSION", "utf8").trim();
const gaming = read("registry/gaming/index.json");
const modules = read("registry/modules/index.json");
const starter = read("starters/gaming/nextf.site.json");
const validation = read("registry/validation/index.json");

ok("Version 1.2.0", version === "1.2.0", version);
ok("Gaming registry generated", gaming.registryVersion === "1.2.0" && gaming.schemas.length === 15);
ok("Gaming module visible", modules.modules.some((module) => module.moduleId === "gaming"));
ok("Gaming capabilities complete", modules.capabilities.filter((capability) => capability.moduleId === "gaming").length === 13);
ok("Starter pins current", starter.contracts.contractVersion === "1.2.0");
ok("Starter has gaming site type", starter.site.siteType === "gaming");
ok("Validation bundle is current", validation.currentContractVersion === "1.2.0");
ok("Validation supports gaming site type", validation.manifestSchema.$defs.siteDescriptor.properties.siteType.enum.includes("gaming"));
ok("Validation knows gaming module", validation.modules.some((module) => module.moduleId === "gaming"));
ok("Validation knows gaming APIs", validation.apiGroups.some((group) => group.apiId === "api.gaming-public"));
ok("Validation knows gaming events", validation.events.includes("gaming.order-created"));
ok("Validation knows gaming connectors", validation.connectors.includes("integrations.fazerCards"));
ok("No fake webhooks module in starter", !starter.modules.some((module) => module.moduleId === "webhooks"));

const manifestCheck = spawnSync(process.execPath, ["bin/nextf-contract.mjs", "validate", "starters/gaming/nextf.site.json", "--json"], { encoding: "utf8" });
ok("Gaming starter validates", manifestCheck.status === 0, (manifestCheck.stdout + manifestCheck.stderr).slice(-1200));
const compatibility = spawnSync(process.execPath, ["bin/nextf-contract.mjs", "compatibility", "starters/gaming/nextf.site.json", "--json"], { encoding: "utf8" });
ok("Gaming starter compatibility", compatibility.status === 0, (compatibility.stdout + compatibility.stderr).slice(-1200));
const phaseValidation = spawnSync(process.execPath, ["scripts/validate-phase-39.mjs"], { encoding: "utf8" });
ok("Phase 39 validator", phaseValidation.status === 0, (phaseValidation.stdout + phaseValidation.stderr).slice(-1200));

console.log(`NEXT F Contracts Phase 39 smoke
Passes: ${pass.length}
Failures: ${fail.length}`);
if (fail.length) {
  console.error(fail.map((item) => `- ${item}`).join("\n"));
  process.exit(1);
}
console.log("PASS");
