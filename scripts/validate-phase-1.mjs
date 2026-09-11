import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const root = path.resolve(process.cwd());
const failures = [], passes = [];
const check = (name, condition, detail = "") => condition ? passes.push(name) : failures.push(`${name}${detail ? `: ${detail}` : ""}`);
const read = (rel) => fs.readFileSync(path.join(root, rel), "utf8");
const readJson = (rel) => { try { return JSON.parse(read(rel)); } catch (error) { failures.push(`Valid JSON: ${rel}: ${error.message}`); return null; } };
const requiredFiles = ["index.html","404.html","css/tokens.css","css/reset.css","css/layout.css","css/components.css","css/portal.css","css/responsive.css","js/app.js","js/router.js","js/routes.js","js/pages.js","js/search.js","js/utils.js","standards/09-portal-ui-standard.md","registry/portal-navigation.json","checks/phase-1-acceptance.json","checks/phase-1-acceptance.md"];
for (const rel of requiredFiles) check(`Phase 1 file preserved: ${rel}`, fs.existsSync(path.join(root, rel)));
const repositoryVersion = read("VERSION").trim();
const acceptance = readJson("checks/phase-1-acceptance.json");
check("Phase 1 baseline remains V0.2.0", acceptance?.version === "0.2.0");
check("Phase 1 baseline acceptance remains passed", acceptance?.checks?.every((item) => item.passed === true));
const index = read("index.html"), tokens = read("css/tokens.css"), reset = read("css/reset.css");
const cssFiles = fs.readdirSync(path.join(root,"css")).filter((name)=>name.endsWith(".css")).map((name)=>read(`css/${name}`)).join("\n").toLowerCase();
check("Light scheme preserved", index.includes('name="color-scheme" content="light"') && tokens.includes("color-scheme: light"));
check("No dark scheme introduced", !cssFiles.includes("prefers-color-scheme: dark"));
check("No glass backdrop filter introduced", !cssFiles.includes("backdrop-filter"));
check("No 3D transforms introduced", !cssFiles.includes("perspective(") && !cssFiles.includes("rotatex(") && !cssFiles.includes("rotatey("));
check("Skip link preserved", index.includes('class="skip-link"'));
check("Main landmark preserved", index.includes('<main class="content" id="main-content"'));
check("Primary navigation label preserved", index.includes('aria-label="Primary navigation"'));
check("Route announcer preserved", index.includes('aria-live="polite"'));
check("Search remains modal", index.includes('aria-modal="true"'));
check("Reduced motion remains supported", reset.includes("prefers-reduced-motion: reduce"));
check("Responsive sidebar remains supported", read("css/responsive.css").includes("translateX(-102%)"));
const navigation = readJson("registry/portal-navigation.json");
if (navigation) {
  check("Portal theme remains light", navigation.theme === "light");
  const groupIds = navigation.groups.map((g)=>g.id);
  for (const id of ["overview","standards","registry","platform","events","development","lifecycle"]) check(`Navigation group preserved: ${id}`, groupIds.includes(id));
}
for (const rel of ["js/app.js","js/router.js","js/routes.js","js/pages.js","js/search.js","js/utils.js"]) {
  const result = spawnSync(process.execPath,["--check",path.join(root,rel)],{encoding:"utf8"});
  check(`JavaScript syntax valid: ${rel}`, result.status === 0, result.stderr.trim());
}
console.log("NEXT F Contracts Phase 1 baseline validation");
console.log(`Repository version: ${repositoryVersion}`);
console.log(`Passes: ${passes.length}`); console.log(`Failures: ${failures.length}`);
if (failures.length) { console.error("Failures:"); failures.forEach((f)=>console.error(`- ${f}`)); process.exit(1); }
console.log("PASS - Phase 1 light SaaS portal baseline is preserved.");
