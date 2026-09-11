import fs from "node:fs";import crypto from "node:crypto";
const indexPath="registry/developer/index.json",registryPath="registry/registry.json";
const idx=JSON.parse(fs.readFileSync(indexPath,"utf8")),reg=JSON.parse(fs.readFileSync(registryPath,"utf8"));
const hash=crypto.createHash("sha256").update(fs.readFileSync(indexPath)).digest("hex");
fs.writeFileSync("js/generated-codex.js",`// Generated from ${indexPath}. Do not edit manually.\nexport const CODEX_SOURCE_SHA256 = ${JSON.stringify(hash)};\nexport const GENERATED_CODEX = ${JSON.stringify(idx)};\n`);
const rh=crypto.createHash("sha256").update(fs.readFileSync(registryPath)).digest("hex");
fs.writeFileSync("js/generated-registry.js",`// Generated from ${registryPath}. Do not edit manually.\nexport const REGISTRY_SOURCE_SHA256 = ${JSON.stringify(rh)};\nexport const GENERATED_REGISTRY = ${JSON.stringify(reg)};\n`);
console.log(`Codex registry fallback synchronized: ${idx.counts.workflowStages} workflow stages, ${idx.counts.taskTypes} task types, ${idx.counts.stopConditions} stop conditions, ${idx.counts.supportSchemas} support schemas.`);
