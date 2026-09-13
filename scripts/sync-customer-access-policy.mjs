import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const version = fs.readFileSync(path.join(root, "VERSION"), "utf8").trim();
if (version !== "1.1.0") throw new Error(`Phase 38 requires VERSION 1.1.0, got ${version}`);

const read = (rel) => JSON.parse(fs.readFileSync(path.join(root, rel), "utf8"));
const write = (rel, value) => {
  const target = path.join(root, rel);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, `${JSON.stringify(value, null, 2)}\n`);
};
const listJson = (rel) => fs.readdirSync(path.join(root, rel)).filter((name) => name.endsWith(".json")).sort();
const sha = (buffer) => crypto.createHash("sha256").update(buffer).digest("hex");
const slug = (value) => value.replace(/^cmsUi\.profile\./, "").replaceAll(".", "--").replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();

const hiddenProfiles = new Set([
  "cmsUi.profile.integrations.credentials",
  "cmsUi.profile.webhooks.secrets"
]);
const approvalProfiles = new Set([
  "cmsUi.profile.content.legal",
  "cmsUi.profile.content.navigation",
  "cmsUi.profile.content.pages",
  "cmsUi.profile.seo.metadata",
  "cmsUi.profile.seo.redirects",
  "cmsUi.profile.seo.robots",
  "cmsUi.profile.seo.sitemap",
  "cmsUi.profile.seo.structureddata"
]);
const directReportProfiles = new Set([]);
const readOnlyScreens = new Set(["dashboard", "report"]);

const vocabularies = {
  registryVersion: version,
  schemaVersion: "1.0.0",
  customerModes: ["hidden", "read_only", "direct_edit", "approval_required"],
  publishingModes: ["not_applicable", "direct", "approval_required", "admin_only"],
  actionBehaviors: ["allow", "request", "deny"],
  fieldModes: ["inherit", "hidden", "read_only", "direct_edit", "approval_required"],
  demoModes: ["disabled", "read_only_sample", "simulated_write_sample"],
  semanticActions: ["read", "create", "update", "delete", "submit_for_review", "publish", "unpublish", "restore_version"],
  changeRequestStatuses: ["draft", "submitted", "in_review", "changes_requested", "approved", "rejected", "applied", "cancelled", "expired"],
  rule: "Unknown values are invalid. Missing customer write policy fails closed."
};
write("registry/customer-access/vocabularies.json", vocabularies);

const policySchema = {
  $schema: "https://json-schema.org/draft/2020-12/schema",
  $id: "https://contracts.nextf.lk/registry/customer-access/customer-access-policy.schema.json",
  title: "NEXT F Customer Capability Access Policy",
  type: "object",
  required: ["$id", "version", "status", "resourceRef", "moduleRef", "customerMode", "actions", "publishingPolicy", "permissionRefs", "fieldRules", "demoPolicy", "relationships"],
  properties: {
    $id: { type: "string", pattern: "^customerAccess\\.policy\\." },
    version: { const: version },
    status: { enum: ["stable", "deprecated"] },
    resourceRef: { type: "string", minLength: 1 },
    moduleRef: { type: "string", minLength: 1 },
    capabilityRefs: { type: "array", items: { type: "string" }, uniqueItems: true },
    customerMode: { enum: vocabularies.customerModes },
    actions: {
      type: "object",
      required: vocabularies.semanticActions,
      additionalProperties: false,
      properties: Object.fromEntries(vocabularies.semanticActions.map((key) => [key, { enum: vocabularies.actionBehaviors }]))
    },
    publishingPolicy: { type: "object", required: ["mode"], properties: { mode: { enum: vocabularies.publishingModes } }, additionalProperties: false },
    permissionRefs: { type: "object", additionalProperties: { type: "array", items: { type: "string" }, uniqueItems: true } },
    fieldRules: {
      type: "array",
      items: {
        type: "object",
        required: ["fieldRef", "field", "mode"],
        properties: { fieldRef: { type: "string" }, field: { type: "string" }, contractFieldRef: { type: ["string", "null"] }, mode: { enum: vocabularies.fieldModes } },
        additionalProperties: false
      }
    },
    demoPolicy: { type: "object", required: ["mode", "productionWrites"], properties: { mode: { enum: vocabularies.demoModes }, productionWrites: { const: false } }, additionalProperties: false },
    relationships: { type: "object", required: ["customerCmsProfileRef"], additionalProperties: true }
  },
  additionalProperties: true
};
write("registry/customer-access/customer-access-policy.schema.json", policySchema);

const changeRequest = {
  $id: "customerAccess.changeRequest",
  name: "Customer Change Request",
  version,
  status: "stable",
  domain: "customer-access",
  description: "Non-authoritative customer proposal for an approval-gated resource or field change.",
  fields: [
    ["requestId", "fields.text", true], ["organizationId", "fields.text", true], ["siteId", "fields.text", true],
    ["resourceType", "fields.text", true], ["resourceId", "fields.text", true], ["baseRevisionId", "fields.text", true],
    ["requestedOperation", "fields.text", true], ["proposedChanges", "fields.json", true], ["requesterId", "fields.text", true],
    ["requestedAt", "fields.dateTime", true], ["status", "fields.select", true], ["assignedReviewerId", "fields.text", false],
    ["reviewerId", "fields.text", false], ["decidedAt", "fields.dateTime", false], ["decisionNote", "fields.textarea", false],
    ["resultingRevisionId", "fields.text", false], ["auditCorrelationId", "fields.text", true], ["conflict", "fields.boolean", true],
    ["currentRevisionId", "fields.text", false], ["expiresAt", "fields.dateTime", false], ["cancelledAt", "fields.dateTime", false]
  ].map(([key, primitive, required]) => ({ key, primitive, required, customerEditable: ["requestedOperation", "proposedChanges"].includes(key) })),
  lifecycle: vocabularies.changeRequestStatuses,
  invariants: [
    "A submitted proposal is stored separately and never mutates authoritative state before approval.",
    "Application requires baseRevisionId to match the current authoritative revision.",
    "A stale proposal becomes conflict evidence and is never silently applied.",
    "Approval, rejection and application decisions are audited with requester and reviewer identity."
  ],
  relationships: [
    { type: "uses", target: "core.versionRecord", description: "Base and resulting revisions use canonical version evidence." },
    { type: "uses", target: "core.auditRecord", description: "Every request and decision is auditable." }
  ]
};
write("registry/customer-access/definitions/change-request.json", changeRequest);

const resolution = {
  registryVersion: version,
  $id: "customerAccess.effectivePolicyResolution",
  name: "Effective Customer Access Resolution",
  status: "stable",
  phase: 38,
  algorithm: [
    "canonical-policy-maximum", "site-manifest-enabled-module-and-capability", "workspace-entitlement",
    "principal-role-permission-and-scope", "resource-state", "field-policy", "security-and-privacy-restrictions"
  ],
  combination: "intersection",
  conflictRule: "most-restrictive-wins",
  missingWritePolicy: "deny",
  invariants: [
    "A Site Manifest can restrict but never broaden canonical policy.",
    "A role or entitlement can restrict but never broaden canonical policy.",
    "UI visibility is never authorization.",
    "Security and privacy restrictions override permissive policy.",
    "Demo mode never writes production data.",
    "V1.0.0 sites remain governed by their pinned release until explicit upgrade."
  ]
};
write("registry/customer-access/effective-policy-resolution.json", resolution);

const cmsProfiles = listJson("registry/cms-ui/profiles").map((file) => ({ file, data: read(`registry/cms-ui/profiles/${file}`) }));
const adminProfiles = listJson("registry/admin-ui/profiles").map((file) => ({ file, data: read(`registry/admin-ui/profiles/${file}`) }));
const adminByCustomer = new Map(adminProfiles.filter(({ data }) => data.baseCustomerProfileId).map(({ data }) => [data.baseCustomerProfileId, data.$id]));
const api = read("registry/api/index.json");
const moduleRegistry = read("registry/modules/index.json");

function modeFor(profile) {
  if (hiddenProfiles.has(profile.$id)) return "hidden";
  if (approvalProfiles.has(profile.$id)) return "approval_required";
  if (readOnlyScreens.has(profile.screenKind) && !directReportProfiles.has(profile.$id)) return "read_only";
  return "direct_edit";
}

function semanticAction(actionId) {
  if (["view", "preview", "export"].includes(actionId)) return "read";
  if (["edit", "manage", "save-draft", "schedule", "fulfill", "refund"].includes(actionId)) return "update";
  if (actionId === "approve") return "submit_for_review";
  if (["create", "delete", "publish", "restore-version"].includes(actionId)) return actionId.replace("-", "_");
  return null;
}

function permissionsFor(profile) {
  const out = Object.fromEntries(vocabularies.semanticActions.map((key) => [key, []]));
  for (const action of profile.actions ?? []) {
    const semantic = semanticAction(action.actionId);
    if (semantic && action.permissionId && !out[semantic].includes(action.permissionId)) out[semantic].push(action.permissionId);
  }
  const view = (profile.permissions ?? []).find((id) => id.endsWith(".view"));
  if (view && !out.read.includes(view)) out.read.push(view);
  return out;
}

function apiRefsFor(profile) {
  const targets = new Set(profile.targetContracts ?? []);
  return (api.operations ?? []).filter((operation) => operation.groupId === "api.customer-cms" && (operation.contractBindings ?? []).some((id) => targets.has(id))).map((operation) => operation.operationId).sort();
}

function capabilityRefsFor(profile) {
  const targets = new Set(profile.targetContracts ?? []);
  const exact = (moduleRegistry.capabilities ?? [])
    .filter((capability) => capability.moduleId === profile.moduleId)
    .filter((capability) => (capability.contractBindings ?? []).some((id) => targets.has(id)))
    .map((capability) => capability.capabilityId)
    .sort();
  if (exact.length) return exact;
  const owner = (moduleRegistry.modules ?? []).find((module) => module.moduleId === profile.moduleId);
  return owner?.defaultCapabilityIds?.slice(0, 1) ?? owner?.capabilityIds?.slice(0, 1) ?? [];
}

const policies = cmsProfiles.map(({ data: profile }) => {
  const mode = modeFor(profile);
  const permissionRefs = permissionsFor(profile);
  if (mode === "approval_required") permissionRefs.submit_for_review = ["core.changerequests.create"];
  const has = (action) => permissionRefs[action].length > 0;
  const actions = Object.fromEntries(vocabularies.semanticActions.map((action) => {
    let behavior = "deny";
    if (action === "read" && mode !== "hidden" && has("read")) behavior = "allow";
    else if (action === "submit_for_review" && mode === "approval_required") behavior = "allow";
    else if (["create", "update", "delete"].includes(action) && has(action)) behavior = mode === "direct_edit" ? "allow" : mode === "approval_required" ? "request" : "deny";
    else if (["publish", "unpublish", "restore_version"].includes(action) && has(action)) behavior = mode === "direct_edit" ? "allow" : mode === "approval_required" ? "request" : "deny";
    return [action, behavior];
  }));
  const publishPermission = (profile.permissions ?? []).find((id) => id.endsWith(".publish"));
  const publishingMode = !publishPermission ? "not_applicable" : mode === "direct_edit" ? "direct" : profile.resource === "content.pages" ? "admin_only" : mode === "approval_required" ? "approval_required" : "admin_only";
  const primary = profile.primaryTargetContract ?? profile.targetContracts?.[0] ?? null;
  const fieldRules = (profile.fieldBindings ?? []).map((field) => {
    let fieldMode = "inherit";
    if (field.editorId === "hidden" || field.zone === "hidden-system") fieldMode = "hidden";
    else if (field.customerEditable !== true) fieldMode = "read_only";
    else if (mode === "approval_required") fieldMode = "approval_required";
    return {
      fieldRef: `${profile.$id}#${field.field}`,
      field: field.field,
      contractFieldRef: primary ? `${primary}.${field.field}` : null,
      mode: fieldMode
    };
  });
  const id = `customerAccess.policy.${profile.$id.replace(/^cmsUi\.profile\./, "")}`;
  return {
    $id: id,
    name: `${profile.name} Customer Access Policy`,
    type: "customer-access-policy",
    version,
    status: "stable",
    resourceRef: profile.resource,
    contractRefs: profile.targetContracts ?? [],
    moduleRef: profile.moduleId,
    capabilityRefs: capabilityRefsFor(profile),
    customerMode: mode,
    actions,
    publishingPolicy: { mode: publishingMode },
    permissionRefs,
    fieldRules,
    demoPolicy: {
      mode: mode === "hidden" ? "disabled" : profile.$id === "cmsUi.profile.content.blogposts" ? "simulated_write_sample" : "read_only_sample",
      productionWrites: false
    },
    apiOperationRefs: [
      ...apiRefsFor(profile),
      ...(mode === "approval_required" ? ["api.customer-cms.submit-change-request", "api.customer-cms.cancel-change-request"] : [])
    ].filter((value, offset, values) => values.indexOf(value) === offset).sort(),
    eventRefs: mode === "approval_required" ? [
      "customer-change-request.submitted",
      "customer-change-request.cancelled",
      "customer-change-request.approved",
      "customer-change-request.applied"
    ] : [],
    relationships: {
      customerCmsProfileRef: profile.$id,
      adminProfileRef: adminByCustomer.get(profile.$id) ?? null,
      approvalContractRef: mode === "approval_required" ? "customerAccess.changeRequest" : null
    },
    notes: mode === "hidden" ? ["The source profile is retained for historical metadata, but effective Customer CMS discovery and navigation must omit this resource."] : []
  };
});

const policyDir = path.join(root, "registry/customer-access/policies");
fs.mkdirSync(policyDir, { recursive: true });
for (const file of fs.readdirSync(policyDir).filter((name) => name.endsWith(".json"))) fs.unlinkSync(path.join(policyDir, file));
for (const policy of policies) write(`registry/customer-access/policies/${slug(policy.relationships.customerCmsProfileRef)}.json`, policy);

const stats = Object.fromEntries(vocabularies.customerModes.map((mode) => [mode, policies.filter((policy) => policy.customerMode === mode).length]));
const index = {
  registryVersion: version,
  schemaVersion: "1.0.0",
  title: "Customer Capability Access Policy Registry",
  description: "Canonical maximum customer visibility, mutation, approval, publishing, field and demo behavior for Customer CMS resources.",
  policyCount: policies.length,
  stablePolicyCount: policies.filter((policy) => policy.status === "stable").length,
  modes: stats,
  fieldOverridePolicyCount: policies.filter((policy) => policy.fieldRules.length).length,
  demoPolicyCount: policies.filter((policy) => policy.demoPolicy.mode !== "disabled").length,
  sources: {
    schema: "registry/customer-access/customer-access-policy.schema.json",
    vocabularies: "registry/customer-access/vocabularies.json",
    resolution: "registry/customer-access/effective-policy-resolution.json",
    policies: "registry/customer-access/policies/",
    changeRequest: "registry/customer-access/definitions/change-request.json"
  },
  policies
};
write("registry/customer-access/index.json", index);

for (const { file, data: profile } of cmsProfiles) {
  const policy = policies.find((row) => row.relationships.customerCmsProfileRef === profile.$id);
  profile.version = version;
  profile.customerAccessPolicyRef = policy.$id;
  profile.effectiveCustomerAccess = {
    policyVersion: version,
    mode: policy.customerMode,
    publishingMode: policy.publishingPolicy.mode,
    actions: policy.actions,
    permissionRefs: policy.permissionRefs,
    capabilityRefs: policy.capabilityRefs,
    demoMode: policy.demoPolicy.mode,
    approvalRequired: policy.customerMode === "approval_required",
    hiddenFromCustomerDiscovery: policy.customerMode === "hidden",
    unavailableReason: policy.customerMode === "hidden" ? "This resource is restricted to NEXT F Admin." : policy.customerMode === "read_only" ? "This resource is available for viewing only." : policy.customerMode === "approval_required" ? "Customer changes require NEXT F review before application." : null
  };
  write(`registry/cms-ui/profiles/${file}`, profile);
}
for (const { file, data: profile } of adminProfiles) {
  const policy = policies.find((row) => row.relationships.adminProfileRef === profile.$id);
  if (policy) {
    profile.version = version;
    profile.customerAccessPolicyRef = policy.$id;
    profile.customerBoundary = {
      policyVersion: version,
      mode: policy.customerMode,
      publishingMode: policy.publishingPolicy.mode,
      approvalRequired: policy.customerMode === "approval_required",
      capabilityRefs: policy.capabilityRefs,
      editableFields: policy.fieldRules.filter((field) => ["direct_edit", "approval_required", "inherit"].includes(field.mode)).map((field) => field.field),
      readOnlyFields: policy.fieldRules.filter((field) => field.mode === "read_only").map((field) => field.field),
      hiddenFields: policy.fieldRules.filter((field) => field.mode === "hidden").map((field) => field.field),
      restrictiveWorkspaceOverridesAllowed: true,
      customerAccessMayBeBroadened: false
    };
  }
  write(`registry/admin-ui/profiles/${file}`, profile);
}
const cmsIndex = read("registry/cms-ui/index.json");
cmsIndex.registryVersion = version;
cmsIndex.profiles = listJson("registry/cms-ui/profiles").map((file) => read(`registry/cms-ui/profiles/${file}`)).sort((a, b) => a.$id.localeCompare(b.$id));
cmsIndex.profileCount = cmsIndex.profiles.length;
write("registry/cms-ui/index.json", cmsIndex);
const adminIndex = read("registry/admin-ui/index.json");
adminIndex.registryVersion = version;
adminIndex.profiles = listJson("registry/admin-ui/profiles").map((file) => read(`registry/admin-ui/profiles/${file}`)).sort((a, b) => a.$id.localeCompare(b.$id));
adminIndex.profileCount = adminIndex.profiles.length;
adminIndex.resourceProfileCount = adminIndex.profiles.filter((profile) => profile.baseCustomerProfileId).length;
write("registry/admin-ui/index.json", adminIndex);

const permissions = read("registry/permissions/index.json");
const permissionDefs = [
  ["core.changerequests.create", "Create Customer Change Requests", "create", true, true],
  ["core.changerequests.view", "View Customer Change Requests", "view", true, true],
  ["core.changerequests.edit", "Edit Customer Change Requests", "edit", true, true],
  ["core.changerequests.approve", "Approve Customer Change Requests", "approve", false, true],
  ["core.changerequests.manage", "Manage Customer Change Requests", "manage", false, true]
].map(([permissionId, name, action, customerEligible, adminEligible]) => ({
  $id: permissionId, name, permissionId, domain: "core", resource: "changerequests", action, scopeKind: "site",
  riskLevel: action === "approve" || action === "manage" ? "privileged" : "elevated",
  customerEligible, adminEligible, grantable: true,
  requiresRecentAuthentication: action === "approve", requiresExplicitConfirmation: action === "approve",
  surfaces: customerEligible ? ["customer-cms", "nextf-admin", "api"] : ["nextf-admin", "api"],
  description: `${name} within the authorized Site scope.`, constraints: ["deny-by-default", "exact-permission-match", "scope-bound"],
  notes: action === "approve" ? ["Approval never applies a stale proposal and never bypasses canonical publishing policy."] : [], version, status: "stable"
}));
permissions.registryVersion = version;
permissions.permissions = (permissions.permissions ?? []).filter((row) => !row.permissionId.startsWith("core.changerequests."));
permissions.permissions.push(...permissionDefs);
permissions.permissions.sort((a, b) => a.permissionId.localeCompare(b.permissionId));
for (const permission of permissionDefs) write(`registry/permissions/permissions/${permission.permissionId}.json`, permission);
write("registry/permissions/index.json", permissions);

const apiOperations = [
  ["customer-cms", "submit-change-request", "POST", "/change-requests", "core.changerequests.create", "customerAccess.changeRequest", 202, "customer-change-request.submitted"],
  ["customer-cms", "list-change-requests", "GET", "/change-requests", "core.changerequests.view", null, 200, null],
  ["customer-cms", "get-change-request", "GET", "/change-requests/{requestId}", "core.changerequests.view", null, 200, null],
  ["customer-cms", "cancel-change-request", "POST", "/change-requests/{requestId}/cancel", "core.changerequests.edit", null, 200, "customer-change-request.cancelled"],
  ["nextf-admin", "review-change-request", "POST", "/change-requests/{requestId}/review", "core.changerequests.manage", "customerAccess.changeRequest", 200, null],
  ["nextf-admin", "approve-change-request", "POST", "/change-requests/{requestId}/approve", "core.changerequests.approve", "customerAccess.changeRequest", 200, "customer-change-request.approved"],
  ["nextf-admin", "apply-change-request", "POST", "/change-requests/{requestId}/apply", "core.changerequests.manage", "customerAccess.changeRequest", 200, "customer-change-request.applied"]
];
const generatedApiOperations = [];
for (const [group, name, method, route, permission, bodyContract, successStatus, event] of apiOperations) {
  const groupId = `api.${group}`;
  const operationId = `${groupId}.${name}`;
  const operation = {
    $id: operationId, operationId, name: name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join(" "), version, status: "stable",
    groupId, method, path: route, description: `Canonical ${name.replaceAll("-", " ")} operation for the Customer Change Request workflow.`,
    authentication: { mode: group === "customer-cms" ? "organization-user" : "nextf-admin", permissions: [permission], permissionMode: "all", scope: "site" },
    request: { pathParameters: ["siteId", ...(route.includes("{requestId}") ? ["requestId"] : [])], query: [], headers: ["X-Request-Id?", "X-NEXTF-Contract-Version?", ...(method !== "GET" ? ["If-Match?"] : [])], bodyContract, bodyProjection: bodyContract ? "operation-writable-fields-only" : null },
    response: { successStatus, envelope: "api.successEnvelope", dataContract: "customerAccess.changeRequest", errorEnvelope: "api.errorEnvelope", errors: ["bad_request", "contract_version_unsupported", "precondition_failed", "unauthenticated", "forbidden", "tenant_scope_mismatch", "not_found", "conflict"], projection: group === "customer-cms" ? "workspace-authorized" : "admin-authorized" },
    policies: { idempotency: { required: method === "POST", header: method === "POST" ? "Idempotency-Key" : null }, concurrency: { required: name.includes("apply") || name.includes("approve"), requestHeader: "If-Match", responseHeader: "ETag" }, cache: "no-store", rateLimit: group === "customer-cms" ? "authenticated-write" : "sensitive-write", cors: group === "customer-cms" ? "customer-portal" : "admin-portal" },
    moduleBindings: ["core"], contractBindings: ["customerAccess.changeRequest"], eventBindings: event ? [event] : [], publicSurface: false, privacy: "private",
    notes: name === "apply-change-request" ? ["The current authoritative revision must match baseRevisionId before application."] : []
  };
  generatedApiOperations.push(operation);
  write(`registry/api/operations/${group}/${name}.json`, operation);
  const groupRel = `registry/api/groups/${group}.json`;
  const groupSource = read(groupRel);
  if (!groupSource.operationIds.includes(operationId)) groupSource.operationIds.push(operationId);
  groupSource.version = version;
  groupSource.compatibility.contractVersionRange = ">=1.1.0 <2.0.0";
  write(groupRel, groupSource);
}
const apiIndex = read("registry/api/index.json");
apiIndex.registryVersion = version;
apiIndex.groups = listJson("registry/api/groups").map((file) => read(`registry/api/groups/${file}`)).sort((a, b) => a.order - b.order || a.apiId.localeCompare(b.apiId));
apiIndex.operations = fs.readdirSync(path.join(root, "registry/api/operations"), { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .flatMap((entry) => listJson(`registry/api/operations/${entry.name}`).map((file) => read(`registry/api/operations/${entry.name}/${file}`)))
  .sort((a, b) => a.operationId.localeCompare(b.operationId));
write("registry/api/index.json", apiIndex);

const eventDefs = [
  ["customer-change-request.submitted", "Customer Change Request Submitted", "A customer proposal is submitted for review."],
  ["customer-change-request.cancelled", "Customer Change Request Cancelled", "A pending customer proposal is cancelled."],
  ["customer-change-request.approved", "Customer Change Request Approved", "An authorized reviewer approves a current customer proposal."],
  ["customer-change-request.applied", "Customer Change Request Applied", "An approved, non-stale proposal is applied and creates an authoritative revision."]
];
for (const [eventKey, name, description] of eventDefs) {
  write(`registry/events/events/${eventKey.replace(".", "--")}.json`, {
    eventKey, name, category: "site", producerKey: "site-domain", subjectContracts: ["customerAccess.changeRequest"], trigger: description,
    dataPolicy: { sensitivity: "internal", containsPersonalData: true, containsFinancialData: false, containsSecrets: false, redactionRequired: true },
    webhookEligible: false, consumers: ["audit", "customer-cms", "nextf-admin", "notification"],
    payloadFields: [
      { key: "requestId", required: true, description: "Customer Change Request ID.", type: "id" },
      { key: "siteId", required: true, description: "Authorized Site scope.", type: "id" },
      { key: "resourceType", required: true, description: "Canonical target resource type.", type: "string" },
      { key: "resourceId", required: true, description: "Target resource ID.", type: "id" },
      { key: "baseRevisionId", required: true, description: "Revision against which the proposal was made.", type: "id" }
    ],
    $id: eventKey, version, eventVersion: "1.0.0", status: "stable", domain: "events", description,
    purpose: "Provides an auditable canonical fact for the Customer Change Request workflow.",
    semantics: { factOnly: true, authoritativeAfterCommit: true, immutableOccurrence: true, transportIndependent: true, marketingTrackingEquivalent: null },
    productionPolicy: { durability: "durable", commitBoundary: "transactional-outbox", failureBehavior: "fail-domain-commit-or-durable-recovery" },
    idempotency: { dedupeKey: "eventId", replayedIdempotentCommand: "no-new-semantic-event", consumerIdempotencyRequired: true },
    orderingPolicy: { scope: "subject", strict: true }, retention: { class: "audit-history" },
    relationships: [{ type: "references", target: "customerAccess.changeRequest", description: "Event subject is the canonical Customer Change Request." }],
    validationRules: [
      { id: "emitAfterAuthoritativeCommit", description: "Emit only after the corresponding request lifecycle transition commits." },
      { id: "noSecrets", description: "Payload never contains proposed values, credentials or secret material." },
      { id: "tenantScope", description: "Organization and Site scope must match the request and target resource." }
    ],
    examples: { valid: [{ eventKey, eventVersion: "1.0.0", eventId: "evt_example", occurredAt: "2026-09-13T00:00:00Z" }], invalid: [] }
  });
}

const registry = read("registry/registry.json");
registry.registryVersion = version;
registry.items = registry.items.filter((item) => item.managedBy !== "customer-access-sync");
const baseItems = [
  { id: "customerAccess.customerAccessPolicyStandard", name: "Customer Capability Access Policy Standard", type: "standard", source: "standards/46-customer-capability-access-policy-standard.md", description: "Canonical maximum customer visibility, mutation, approval, publishing, field and demo policy with fail-closed effective resolution." },
  { id: "customerAccess.policyRegistry", name: "Customer Access Policy Registry", type: "registry-index", source: "registry/customer-access/index.json", description: "Explicit policy classification for every stable Customer CMS resource profile." },
  { id: "customerAccess.policyVocabulary", name: "Customer Access Policy Vocabulary", type: "vocabulary", source: "registry/customer-access/vocabularies.json", description: "Controlled customer, action, publishing, field, demo and change-request states." },
  { id: "customerAccess.policySchema", name: "Customer Access Policy Schema", type: "schema", source: "registry/customer-access/customer-access-policy.schema.json", description: "Machine validation schema for canonical Customer Capability Access Policies." },
  { id: "customerAccess.effectivePolicyResolution", name: "Effective Customer Access Resolution", type: "policy", source: "registry/customer-access/effective-policy-resolution.json", description: "Most-restrictive-wins policy intersection and fail-closed customer write rules." },
  { id: "customerAccess.changeRequest", name: "Customer Change Request", type: "schema", source: "registry/customer-access/definitions/change-request.json", description: changeRequest.description }
];
for (const item of baseItems) registry.items.push({ ...item, domain: "customer-access", version, status: "stable", phase: 38, introducedIn: version, tags: ["customer-access", "phase-38", "v1.1"], relationships: item.id === "customerAccess.policyRegistry" ? [{ type: "implements", target: "customerAccess.customerAccessPolicyStandard", description: "Policies follow the Phase 38 standard." }] : [], permissions: [], events: [], managedBy: "customer-access-sync" });
for (const permission of permissionDefs) {
  registry.items.push({
    id: permission.permissionId,
    name: permission.name,
    domain: "core",
    type: "permission",
    version,
    status: "stable",
    description: permission.description,
    source: `registry/permissions/permissions/${permission.permissionId}.json`,
    phase: 38,
    introducedIn: version,
    tags: ["permission", "change-request", permission.action, permission.scopeKind, permission.riskLevel],
    relationships: [{ type: "implements", target: "permissions.permissionRegistryStandard", description: "Governed by the Permission Registry standard." }],
    permissions: [],
    events: [],
    managedBy: "customer-access-sync"
  });
}
for (const operation of generatedApiOperations) {
  registry.items.push({
    id: operation.operationId,
    name: operation.name,
    domain: "api",
    type: "api-operation",
    version,
    status: "stable",
    description: operation.description,
    source: `registry/api/operations/${operation.groupId.replace("api.", "")}/${operation.operationId.split(".").at(-1)}.json`,
    phase: 38,
    introducedIn: version,
    tags: ["api", "operation", operation.method.toLowerCase(), "change-request"],
    relationships: [
      { type: "belongsTo", target: operation.groupId, description: "Belongs to this API group." },
      { type: "implements", target: "api.apiContractStandard", description: "Implements API Contract Standard." },
      { type: "references", target: "customerAccess.changeRequest", description: "Uses the canonical Customer Change Request contract." }
    ],
    permissions: operation.authentication.permissions,
    events: operation.eventBindings,
    managedBy: "customer-access-sync"
  });
}
for (const policy of policies) {
  const relationships = [
    { type: "implements", target: "customerAccess.customerAccessPolicyStandard", description: "Policy follows the Phase 38 standard." },
    { type: "references", target: policy.relationships.customerCmsProfileRef, description: "Policy governs this Customer CMS profile." },
    { type: "dependsOn", target: `modules.${policy.moduleRef}`, description: "The owning Site module must be enabled." },
    ...policy.capabilityRefs.map((target) => ({ type: "dependsOn", target: `modules.capability.${target}`, description: "The Site Manifest capability must be enabled." })),
    ...policy.contractRefs.map((target) => ({ type: "references", target, description: "Policy classifies this canonical contract." })),
    ...policy.apiOperationRefs.map((target) => ({ type: "references", target, description: "Customer behavior is exposed by this API operation when authorized." })),
    ...Object.values(policy.permissionRefs).flat().map((target) => ({ type: "associatedPermission", target, description: "Action requires this canonical permission." })),
    ...policy.eventRefs.map((target) => ({ type: "associatedEvent", target, description: "Approval lifecycle emits this internal event." }))
  ];
  registry.items.push({ id: policy.$id, name: policy.name, domain: "customer-access", type: "customer-access-policy", version, status: "stable", description: `${policy.customerMode} policy for ${policy.resourceRef}.`, source: `registry/customer-access/policies/${slug(policy.relationships.customerCmsProfileRef)}.json`, phase: 38, introducedIn: version, tags: ["customer-access", policy.customerMode, policy.publishingPolicy.mode], relationships, permissions: [...new Set(Object.values(policy.permissionRefs).flat())], events: policy.eventRefs, managedBy: "customer-access-sync" });
}
registry.items.sort((a, b) => a.id.localeCompare(b.id));
write("registry/registry.json", registry);

const domains = read("registry/domains.json");
domains.registryVersion = version;
if (!domains.domains.some((item) => item.id === "customer-access")) domains.domains.push({ id: "customer-access", label: "Customer Access", description: "Canonical customer visibility, mutation, approval, publishing, field and demo policy." });
domains.domains.sort((a, b) => a.id.localeCompare(b.id));
write("registry/domains.json", domains);
const types = read("registry/types.json");
types.registryVersion = version;
if (!types.types.some((item) => item.id === "customer-access-policy")) types.types.push({ id: "customer-access-policy", label: "Customer Access Policy", description: "Canonical maximum customer access for one Customer CMS resource profile." });
if (!types.types.some((item) => item.id === "policy")) types.types.push({ id: "policy", label: "Policy", description: "Machine-readable resolution or governance policy." });
types.types.sort((a, b) => a.id.localeCompare(b.id));
write("registry/types.json", types);

const meta = read("registry/registry-meta.json");
Object.assign(meta, { registryVersion: version, customerAccessPolicyIndex: "registry/customer-access/index.json", customerAccessPolicySchema: "registry/customer-access/customer-access-policy.schema.json", customerAccessVocabularies: "registry/customer-access/vocabularies.json", customerAccessResolution: "registry/customer-access/effective-policy-resolution.json", customerAccessExplorerRoute: "#/platform/customer-access" });
write("registry/registry-meta.json", meta);
const manifestIndex = read("registry/manifests/index.json");
manifestIndex.registryVersion = version;
manifestIndex.schemas = (manifestIndex.schemas ?? []).map((schema) => schema.$id === "manifest.cms" ? { ...read("registry/manifests/definitions/cms.json"), version } : schema);
write("registry/manifests/index.json", manifestIndex);
const nav = read("registry/portal-navigation.json");
nav.portalVersion = version;
nav.registryVersion = version;
const overview = nav.groups.find((group) => group.id === "overview")?.items.find((item) => item.id === "overview");
if (overview) { overview.phase = 38; overview.status = "current"; }
const platform = nav.groups.find((group) => group.id === "platform");
if (platform && !platform.items.some((item) => item.id === "platform-customer-access")) platform.items.splice(2, 0, { id: "platform-customer-access", path: "/platform/customer-access", label: "Customer Access", phase: 38, status: "available" });
write("registry/portal-navigation.json", nav);

const componentTypes = read("registry/compatibility/component-types.json");
componentTypes.registryVersion = version;
if (!componentTypes.types.some((item) => item.id === "customer-access-policy-registry")) componentTypes.types.push({ id: "customer-access-policy-registry", label: "Customer Access Policy Registry" });
write("registry/compatibility/component-types.json", componentTypes);
const componentMatrix = read("registry/compatibility/component-matrix.json");
componentMatrix.registryVersion = version;
componentMatrix.targetContractVersion = version;
componentMatrix.components = componentMatrix.components.filter((item) => item.componentId !== "customer-access.policy-registry");
componentMatrix.components.push({ componentId: "customer-access.policy-registry", componentType: "customer-access-policy-registry", name: "Customer Capability Access Policy Registry", specificationVersion: version, registryRelease: version, runtimeImplemented: true, runtimeEvidence: "machine-registry", source: "registry/customer-access/index.json", compatibilityStatus: "compatible", summary: "Canonical policy metadata is available; consuming CMS, Admin and API runtimes must explicitly declare V1.1.0 policy awareness." });
for (const component of componentMatrix.components) if (["customer-cms-ui.metadata", "nextf-admin-ui.metadata", "api.customer-cms", "api.nextf-admin"].includes(component.componentId) && !component.summary.includes("Customer Access policy consumption")) component.summary += " V1.1.0 Customer Access policy consumption remains a runtime integration responsibility.";
write("registry/compatibility/component-matrix.json", componentMatrix);

const migration = {
  registryVersion: version,
  phase: 38,
  sourceVersion: "1.0.0",
  targetVersion: version,
  classificationBasis: "Every stable Customer CMS source profile is explicitly represented by one generated policy source record and validated by exact profile ID.",
  profileCount: cmsProfiles.length,
  classifiedPolicies: policies.length,
  unclassifiedProfiles: cmsProfiles.filter(({ data }) => !policies.some((policy) => policy.relationships.customerCmsProfileRef === data.$id)).map(({ data }) => data.$id),
  modeCounts: stats,
  reused: ["Customer CMS profiles", "Admin profile references", "Permission IDs and scope model", "API groups", "core.versionRecord", "core.auditRecord", "Site Manifest module/capability gates"],
  added: ["Canonical customer access policy", "Customer Change Request", "effective policy resolution", "approval API operations", "change-request permissions", "internal lifecycle Events"],
  compatibility: "Additive feature release. V1.0.0 sites remain pinned and unchanged; V1.1.0 consumption requires explicit upgrade and policy-aware runtime support."
};
write("registry/customer-access/migration-report.json", migration);

const examples = {
  registryVersion: version,
  examples: [
    { id: "direct-edit-blog", policyRef: "customerAccess.policy.content.blogposts", outcome: "Customer may edit and publish only with exact permissions and Site scope." },
    { id: "approval-seo", policyRef: "customerAccess.policy.seo.metadata", outcome: "Customer proposes metadata changes; authoritative SEO remains unchanged until approval." },
    { id: "read-only-analytics", policyRef: "customerAccess.policy.marketing.analytics", outcome: "Customer may view/export permitted reporting but cannot mutate it." },
    { id: "hidden-secrets", policyRef: "customerAccess.policy.webhooks.secrets", outcome: "Customer discovery and APIs omit secret material." },
    { id: "mixed-fields", policyRef: "customerAccess.policy.content.pages", outcome: "Editable content is proposal-only while system fields remain hidden or read-only." },
    { id: "admin-publish", policyRef: "customerAccess.policy.content.pages", outcome: "Customer may propose a draft; only Admin can execute publish." },
    { id: "manifest-restriction", policyRef: "customerAccess.effectivePolicyResolution", outcome: "A disabled module removes access but cannot broaden another policy." },
    { id: "role-restriction", policyRef: "customerAccess.effectivePolicyResolution", outcome: "Missing update permission reduces direct edit to read-only." },
    { id: "demo-simulated-write", policyRef: "customerAccess.policy.content.blogposts", outcome: "Sample-only simulated write never reaches production data." },
    { id: "stale-approval", policyRef: "customerAccess.changeRequest", outcome: "A base revision mismatch creates conflict evidence and blocks application." }
  ]
};
write("registry/customer-access/examples.json", examples);

const digest = sha(fs.readFileSync(path.join(root, "registry/customer-access/index.json")));
fs.writeFileSync(path.join(root, "js/generated-customer-access.js"), `// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Source: registry/customer-access/index.json\n// SHA-256: ${digest}\nexport const GENERATED_CUSTOMER_ACCESS_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_CUSTOMER_ACCESS = ${JSON.stringify({ index, vocabularies, resolution, changeRequest, migration, examples })};\n`);

const bootstrap = spawnSync(process.execPath, [path.join(root, "scripts/generate-registry-bootstrap.mjs")], { stdio: "inherit" });
if (bootstrap.status !== 0) process.exit(bootstrap.status ?? 1);
console.log(`Customer Access synchronized: ${policies.length} policies (${Object.entries(stats).map(([key, value]) => `${key}=${value}`).join(", ")}).`);
