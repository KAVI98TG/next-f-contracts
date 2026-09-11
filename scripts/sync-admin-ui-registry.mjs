import fs from "node:fs";import crypto from "node:crypto";
const indexPath="registry/admin-ui/index.json",registryPath="registry/registry.json";
const idx=JSON.parse(fs.readFileSync(indexPath,"utf8")),reg=JSON.parse(fs.readFileSync(registryPath,"utf8"));
const hash=crypto.createHash("sha256").update(fs.readFileSync(indexPath)).digest("hex");
fs.writeFileSync("js/generated-admin-ui.js",`// Generated from ${indexPath}. Do not edit manually.\nexport const ADMIN_UI_SOURCE_SHA256 = ${JSON.stringify(hash)};\nexport const GENERATED_ADMIN_UI = ${JSON.stringify(idx)};\n`);
const rh=crypto.createHash("sha256").update(fs.readFileSync(registryPath)).digest("hex");
fs.writeFileSync("js/generated-registry.js",`// Generated from ${registryPath}. Do not edit manually.\nexport const REGISTRY_SOURCE_SHA256 = ${JSON.stringify(rh)};\nexport const GENERATED_REGISTRY = ${JSON.stringify(reg)};\n`);
console.log(`Admin UI fallback synchronized: ${idx.profileCount} profiles, ${idx.controlCount} controls, ${idx.panelCount} panels, ${idx.supportSchemaCount} support schemas.`);
