import fs from "node:fs";
import crypto from "node:crypto";
const indexPath="registry/cms-ui/index.json";
const registryPath="registry/registry.json";
const index=JSON.parse(fs.readFileSync(indexPath,"utf8"));
const registry=JSON.parse(fs.readFileSync(registryPath,"utf8"));
const hash=crypto.createHash("sha256").update(fs.readFileSync(indexPath)).digest("hex");
fs.writeFileSync("js/generated-cms-ui.js",`// Generated from ${indexPath}. Do not edit manually.
export const CMS_UI_SOURCE_SHA256 = ${JSON.stringify(hash)};
export const GENERATED_CMS_UI = ${JSON.stringify(index)};
`);
const rHash=crypto.createHash("sha256").update(fs.readFileSync(registryPath)).digest("hex");
fs.writeFileSync("js/generated-registry.js",`// Generated from ${registryPath}. Do not edit manually.
export const REGISTRY_SOURCE_SHA256 = ${JSON.stringify(rHash)};
export const GENERATED_REGISTRY = ${JSON.stringify(registry)};
`);
console.log(`CMS UI fallback synchronized: ${index.profileCount} profiles, ${index.editorCount} editors, ${index.supportSchemaCount} support schemas.`);
