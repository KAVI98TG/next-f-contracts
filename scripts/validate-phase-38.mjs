import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const pass = [];
const fail = [];
const ok = (name, condition, detail = "") => condition ? pass.push(name) : fail.push(`${name}${detail ? `: ${detail}` : ""}`);
const read = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const exists = (rel) => fs.existsSync(path.join(root, rel));
const sha = (rel) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, rel))).digest("hex");
const normalizedSha = (rel) => crypto.createHash("sha256").update(fs.readFileSync(path.join(root, rel), "utf8").replace(/\r\n/g, "\n")).digest("hex");

const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
const pkg = read("package.json");
ok("VERSION V1.1.0", version === "1.1.0", version);
ok("Package version", pkg.version === version, pkg.version);
ok("Phase 38 validator is current", pkg.scripts?.validate === "node scripts/validate-phase-38.mjs");

const required = [
  "standards/46-customer-capability-access-policy-standard.md",
  "registry/customer-access/index.json",
  "registry/customer-access/vocabularies.json",
  "registry/customer-access/customer-access-policy.schema.json",
  "registry/customer-access/effective-policy-resolution.json",
  "registry/customer-access/definitions/change-request.json",
  "registry/customer-access/migration-report.json",
  "registry/customer-access/examples.json",
  "js/generated-customer-access.js"
];
for (const rel of required) ok(`Required source ${rel}`, exists(rel), rel);

if (!required.slice(1).every(exists)) {
  console.error(`NEXT F Contracts Phase 38 validation\nPasses: ${pass.length}\nFailures: ${fail.length}\n\n${fail.map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}

const access = read("registry/customer-access/index.json");
const vocab = read("registry/customer-access/vocabularies.json");
const resolution = read("registry/customer-access/effective-policy-resolution.json");
const changeRequest = read("registry/customer-access/definitions/change-request.json");
const cms = read("registry/cms-ui/index.json");
const admin = read("registry/admin-ui/index.json");
const modules = read("registry/modules/index.json");
const permissions = read("registry/permissions/index.json");
const api = read("registry/api/index.json");
const events = read("registry/events/index.json");
const registry = read("registry/registry.json");
const search = read("registry/search/search-index.json");
const relationships = read("registry/relationships/relationship-index.json");

const policyIds = access.policies.map((policy) => policy.$id);
const cmsIds = new Set(cms.profiles.map((profile) => profile.$id));
const adminIds = new Set(admin.profiles.map((profile) => profile.$id));
const moduleIds = new Set(modules.modules.map((module) => module.moduleId));
const capabilityIds = new Set(modules.capabilities.map((capability) => capability.capabilityId));
const permissionIds = new Set(permissions.permissions.map((permission) => permission.permissionId));
const apiIds = new Set(api.operations.map((operation) => operation.operationId));
const eventIds = new Set(events.events.map((event) => event.eventKey));
const registryIds = new Set(registry.items.map((item) => item.id));
const searchIds = new Set(search.documents.map((document) => document.id));
const relationshipIds = new Set(relationships.nodes.map((node) => node.id));
const profileById = new Map(cms.profiles.map((profile) => [profile.$id, profile]));

ok("One policy per Customer CMS profile", access.policies.length === cms.profiles.length, `${access.policies.length}/${cms.profiles.length}`);
ok("Unique policy IDs", new Set(policyIds).size === policyIds.length);
ok("Every Customer CMS profile classified", cms.profiles.every((profile) => policyIds.includes(profile.customerAccessPolicyRef)), "missing profile policy ref");
ok("Migration has no unclassified profiles", read("registry/customer-access/migration-report.json").unclassifiedProfiles.length === 0);
ok("Most restrictive resolution", resolution.combination === "intersection" && resolution.conflictRule === "most-restrictive-wins");
ok("Missing writes fail closed", resolution.missingWritePolicy === "deny");
ok("Complete change-request lifecycle", vocab.changeRequestStatuses.every((status) => changeRequest.lifecycle.includes(status)));
const manifestSchema = read("registry/manifests/nextf-site-manifest.schema.json");
ok("Manifest restrictive policy extension", manifestSchema.$defs?.cms?.properties?.customerAccess?.$ref === "#/$defs/customerAccessRestriction");
ok("Manifest cannot declare direct-edit override", !manifestSchema.$defs?.customerAccessRestriction?.properties?.restrictions?.items?.properties?.mode?.enum?.includes("direct_edit"));
const validationBundle = read("registry/validation/index.json");
ok("Browser validator includes customer policy layer", validationBundle.layers?.includes("customer-access") && validationBundle.customerAccessPolicies?.length === access.policyCount);
ok("Every policy is searchable", policyIds.every((id) => searchIds.has(`registry:${id}`)));
ok("Every policy is in Relationship Explorer", policyIds.every((id) => relationshipIds.has(id)));
ok("Relationship graph has no unresolved explicit targets", (relationships.stats?.unresolvedExplicitTargets ?? 0) === 0);

for (const policy of access.policies) {
  ok(`Policy version ${policy.$id}`, policy.version === version, policy.version);
  ok(`Customer mode ${policy.$id}`, vocab.customerModes.includes(policy.customerMode), policy.customerMode);
  ok(`Publishing mode ${policy.$id}`, vocab.publishingModes.includes(policy.publishingPolicy?.mode), policy.publishingPolicy?.mode);
  ok(`CMS profile ref ${policy.$id}`, cmsIds.has(policy.relationships?.customerCmsProfileRef), policy.relationships?.customerCmsProfileRef);
  ok(`Admin profile ref ${policy.$id}`, !policy.relationships?.adminProfileRef || adminIds.has(policy.relationships.adminProfileRef), policy.relationships?.adminProfileRef);
  ok(`Module ref ${policy.$id}`, moduleIds.has(policy.moduleRef), policy.moduleRef);
  ok(`Contract refs ${policy.$id}`, policy.contractRefs.length > 0 && policy.contractRefs.every((id) => registryIds.has(id)), policy.contractRefs.join(","));
  ok(`Capability refs ${policy.$id}`, policy.capabilityRefs.length > 0 && policy.capabilityRefs.every((id) => capabilityIds.has(id)), policy.capabilityRefs.join(","));
  ok(`Permission refs ${policy.$id}`, Object.values(policy.permissionRefs).flat().every((id) => permissionIds.has(id)), Object.values(policy.permissionRefs).flat().join(","));
  ok(`API refs ${policy.$id}`, policy.apiOperationRefs.every((id) => apiIds.has(id)), policy.apiOperationRefs.join(","));
  ok(`Event refs ${policy.$id}`, policy.eventRefs.every((id) => eventIds.has(id)), policy.eventRefs.join(","));
  ok(`Action vocabulary ${policy.$id}`, Object.keys(policy.actions).length === vocab.semanticActions.length && Object.values(policy.actions).every((value) => vocab.actionBehaviors.includes(value)));
  ok(`Unique fields ${policy.$id}`, new Set(policy.fieldRules.map((field) => field.fieldRef)).size === policy.fieldRules.length);
  ok(`Field vocabulary ${policy.$id}`, policy.fieldRules.every((field) => vocab.fieldModes.includes(field.mode)));
  const profileFields = new Set((profileById.get(policy.relationships.customerCmsProfileRef)?.fieldBindings ?? []).map((field) => field.field));
  ok(`Field refs ${policy.$id}`, policy.fieldRules.every((field) => profileFields.has(field.field)));
  ok(`Demo production isolation ${policy.$id}`, vocab.demoModes.includes(policy.demoPolicy.mode) && policy.demoPolicy.productionWrites === false);
  if (policy.customerMode === "hidden") ok(`Hidden actions denied ${policy.$id}`, Object.values(policy.actions).every((value) => value === "deny"));
  if (policy.customerMode === "read_only") ok(`Read-only mutations denied ${policy.$id}`, ["create", "update", "delete", "publish", "unpublish", "restore_version"].every((action) => policy.actions[action] === "deny"));
  if (policy.customerMode === "approval_required") ok(`Approval path ${policy.$id}`, policy.relationships.approvalContractRef === "customerAccess.changeRequest" && policy.actions.submit_for_review === "allow");
  ok(`Registry item ${policy.$id}`, registryIds.has(policy.$id));
}

for (const permission of ["core.changerequests.create", "core.changerequests.view", "core.changerequests.edit", "core.changerequests.approve", "core.changerequests.manage"]) ok(`Change request permission ${permission}`, permissionIds.has(permission));
for (const operation of ["api.customer-cms.submit-change-request", "api.customer-cms.cancel-change-request", "api.nextf-admin.approve-change-request", "api.nextf-admin.apply-change-request"]) ok(`Change request API ${operation}`, apiIds.has(operation));
for (const event of ["customer-change-request.submitted", "customer-change-request.cancelled", "customer-change-request.approved", "customer-change-request.applied"]) ok(`Change request event ${event}`, eventIds.has(event));

const generated = fs.readFileSync(path.join(root, "js/generated-customer-access.js"), "utf8");
ok("Generated source integrity", generated.includes(sha("registry/customer-access/index.json")));
const frozen = read("registry/releases/1.0.0/snapshot-index.json");
for (const row of frozen.snapshots) ok(`Frozen V1 source ${row.path}`, exists(row.path) && normalizedSha(row.path) === row.sha256, row.path);

let jsonCount = 0;
for (const base of ["registry", "examples", "starters"]) {
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const target = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(target);
      else if (entry.name.endsWith(".json")) {
        jsonCount += 1;
        try { JSON.parse(fs.readFileSync(target, "utf8")); } catch (error) {
          if (!target.endsWith("malformed-json.json")) fail.push(`JSON ${path.relative(root, target)}: ${error.message}`);
        }
      }
    }
  };
  walk(path.join(root, base));
}

console.log(`NEXT F Contracts Phase 38 validation\nVersion: ${version}\nPasses: ${pass.length}\nFailures: ${fail.length}\nPolicies: ${access.policies.length}\nJSON files checked: ${jsonCount}`);
if (fail.length) {
  console.error(`\nFailures:\n${fail.slice(0, 200).map((item) => `- ${item}`).join("\n")}`);
  process.exit(1);
}
console.log("PASS - V1.1.0 Customer Capability Access Policy is complete and fail-closed.");
