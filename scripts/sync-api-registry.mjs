import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
const root=process.cwd();
const compact=v=>JSON.stringify(v);
function generate(source,target,exportName,digestName,comment){
  const raw=fs.readFileSync(path.join(root,source));
  const data=JSON.parse(raw.toString("utf8"));
  const digest=crypto.createHash("sha256").update(raw).digest("hex");
  fs.writeFileSync(path.join(root,target),`// Generated from ${source}\n// SHA-256: ${digest}\nexport const ${digestName} = "${digest}";\nexport const ${exportName} = ${compact(data)};\n`);
  console.log(`${comment}: ${digest}`);
}
generate("registry/api/index.json","js/generated-api.js","GENERATED_API","GENERATED_API_SOURCE_SHA256","API fallback");
generate("registry/registry.json","js/generated-registry.js","GENERATED_REGISTRY","GENERATED_REGISTRY_SOURCE_SHA256","Global registry fallback");
