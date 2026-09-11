import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root=path.resolve(process.cwd());
const read=p=>JSON.parse(fs.readFileSync(p,"utf8"));
const exists=p=>fs.existsSync(path.join(root,p));
const failures=[], passes=[];
const check=(name,condition,detail="")=>condition?passes.push(name):failures.push(`${name}${detail?`: ${detail}`:""}`);

const version=fs.readFileSync(path.join(root,"VERSION"),"utf8").trim();
check("Version is 0.15.0",version==="0.15.0",version);

const required=[
 "standards/22-webhook-registry-standard.md",
 "registry/webhooks/index.json","registry/webhooks/categories.json","registry/webhooks/statuses.json",
 "registry/webhooks/headers.json","registry/webhooks/failure-codes.json","registry/webhooks/default-policies.json",
 "registry/webhooks/event-catalog.json","registry/webhooks/webhook-definition.schema.json",
 "js/generated-webhooks.js","js/webhooks-registry-engine.js","js/webhooks-pages.js","css/webhooks.css",
 "scripts/sync-webhooks-registry.mjs","package.json"
];
for(const f of required)check(`Required file ${f}`,exists(f));

const idx=read(path.join(root,"registry/webhooks/index.json"));
const reg=read(path.join(root,"registry/registry.json"));
const ev=read(path.join(root,"registry/events/index.json"));
const cats=read(path.join(root,"registry/webhooks/categories.json"));
const statuses=read(path.join(root,"registry/webhooks/statuses.json"));
const headers=read(path.join(root,"registry/webhooks/headers.json"));
const failuresV=read(path.join(root,"registry/webhooks/failure-codes.json"));
const defaults=read(path.join(root,"registry/webhooks/default-policies.json"));
const catalog=read(path.join(root,"registry/webhooks/event-catalog.json"));

check("Webhook index version",idx.registryVersion===version);
check("45 webhook schemas",idx.schemas.length===45,String(idx.schemas.length));
check("8 webhook categories",cats.categories.length===8,String(cats.categories.length));
check("110 eligible Events",catalog.events.length===110,String(catalog.events.length));
check("Event Registry contains 128 events",ev.events.length===128,String(ev.events.length));
check("Event Registry contains 15 categories",ev.categories.length===15,String(ev.categories.length));
check("Webhook event category exists",ev.categories.some(x=>x.key==="webhooks"));
check("Webhook service producer exists",read(path.join(root,"registry/events/producers.json")).producers.some(x=>x.key==="webhook-service"));
check("Total registry contains 699 entries",reg.items.length===699,String(reg.items.length));
check("Webhook registry contains 52 discovery entries",reg.items.filter(x=>x.domain==="webhooks").length===52);

const ids=idx.schemas.map(x=>x.$id);
check("Webhook schema IDs unique",new Set(ids).size===ids.length);
const expected=[
"webhooks.webhookReference","webhooks.environmentBinding","webhooks.subscriptionOwnership","webhooks.dataAccessPolicy","webhooks.eventExposure",
"webhooks.endpoint","webhooks.endpointVerification","webhooks.endpointVerificationPayload","webhooks.endpointVerificationResponse","webhooks.endpointHealth","webhooks.endpointNetworkPolicy","webhooks.endpointAuthentication","webhooks.requestHeader",
"webhooks.subscription","webhooks.eventSelection","webhooks.subscriptionFilter","webhooks.subscriptionState","webhooks.pausePolicy",
"webhooks.payloadEnvelope","webhooks.payloadPolicy","webhooks.headerPolicy","webhooks.responsePolicy",
"webhooks.signaturePolicy","webhooks.signingKeyReference","webhooks.secretRotation","webhooks.replayProtection",
"webhooks.delivery","webhooks.deliveryAttempt","webhooks.deliveryRequest","webhooks.deliveryResponse","webhooks.deliveryFailure","webhooks.failureClassification","webhooks.httpOutcomePolicy",
"webhooks.retryPolicy","webhooks.timeoutPolicy","webhooks.ratePolicy","webhooks.deliveryQueuePolicy","webhooks.deadLetter","webhooks.redeliveryRequest",
"webhooks.testDelivery","webhooks.deliverySummary","webhooks.deliveryLogRecord","webhooks.retentionPolicy","webhooks.redactionPolicy","webhooks.deliveryMetricSnapshot"];
for(const id of expected)check(`Schema exists ${id}`,ids.includes(id));

const registryIds=new Set(reg.items.map(x=>x.id));
const primitiveIds=new Set(read(path.join(root,"registry/fields/index.json")).fields.map(x=>x.$id));

for(const s of idx.schemas){
 check(`${s.$id} version`,s.version===version);
 check(`${s.$id} status stable`,s.status==="stable");
 check(`${s.$id} domain webhooks`,s.domain==="webhooks");
 check(`${s.$id} category valid`,cats.categories.some(c=>c.key===s.category));
 check(`${s.$id} fields array`,Array.isArray(s.fields));
 check(`${s.$id} validation array`,Array.isArray(s.validationRules) && s.validationRules.length>0);
 check(`${s.$id} CMS metadata`,!!s.cms && typeof s.cms.adminVisible==="boolean");
 check(`${s.$id} not public`,s.webhookModel?.publicEligible===false);
 const slug=s.$id.split(".").pop().replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();
 check(`${s.$id} source exists`,exists(`registry/webhooks/definitions/${slug}.json`));
 for(const f of s.fields){
   check(`${s.$id}.${f.key} required flag`,typeof f.required==="boolean");
   check(`${s.$id}.${f.key} nullable flag`,typeof f.nullable==="boolean");
   check(`${s.$id}.${f.key} has description`,typeof f.description==="string" && f.description.length>3);
   const refs=[f.primitive,f.schema,f.itemsPrimitive,f.itemsSchema].filter(Boolean);
   for(const ref of refs)check(`${s.$id}.${f.key} reference ${ref}`,registryIds.has(ref) || primitiveIds.has(ref),ref);
 }
 for(const r of s.relationships??[])check(`${s.$id} relationship target ${r.target}`,registryIds.has(r.target),r.target);
}

const eligibleSource=ev.events.filter(x=>x.webhookEligible===true).map(x=>x.eventKey).sort();
const catalogKeys=catalog.events.map(x=>x.eventKey).sort();
check("Event catalog exactly matches webhookEligible Event Registry allow-list",JSON.stringify(eligibleSource)===JSON.stringify(catalogKeys));
check("No webhook lifecycle event is eligible",ev.events.filter(x=>x.eventKey.startsWith("webhook.")).every(x=>x.webhookEligible===false));
check("Exactly 12 webhook lifecycle events",ev.events.filter(x=>x.eventKey.startsWith("webhook.")).length===12);
for(const e of ev.events.filter(x=>x.eventKey.startsWith("webhook."))){
 check(`${e.eventKey} producer`,e.producerKey==="webhook-service");
 check(`${e.eventKey} category`,e.category==="webhooks");
 check(`${e.eventKey} no webhook-bridge`,!e.consumers.includes("webhook-bridge"));
 check(`${e.eventKey} no secrets`,e.dataPolicy?.containsSecrets===false);
 for(const target of e.subjectContracts??[])check(`${e.eventKey} subject resolves ${target}`,registryIds.has(target),target);
}

check("Exact allow-list only",catalog.exactAllowListOnly===true);
check("Wildcard subscriptions prohibited",catalog.wildcardSubscriptions===false);
check("Historical backfill prohibited",catalog.historicalBackfill===false);

check("HMAC SHA256",defaults.signature.algorithm==="HMAC-SHA256");
check("Signature v1",defaults.signature.version==="v1");
check("Signature tolerance 300s",defaults.signature.timestampToleranceSeconds===300);
check("Signing secret min entropy 32 bytes",defaults.signature.minimumSecretEntropyBytes===32);
check("Rotation overlap 24h",defaults.signature.rotationOverlapHours===24);
check("Payload max 256KiB",defaults.protocol.maximumPayloadBytes===262144);
check("Response diagnostics max 64KiB",defaults.protocol.maximumResponseDiagnosticBytes===65536);
check("No automatic redirects",defaults.protocol.automaticRedirects===false && defaults.network.followRedirects===false);
check("HTTPS only",defaults.network.httpsOnly===true);
check("TLS >=1.2",defaults.network.minimumTlsVersion==="1.2");
check("Private networks prohibited",defaults.network.allowPrivateNetworks===false);
check("Loopback prohibited",defaults.network.allowLoopback===false);
check("Link-local prohibited",defaults.network.allowLinkLocal===false);
check("Cloud metadata prohibited",defaults.network.allowCloudMetadata===false);
check("Allowed ports exact",JSON.stringify(defaults.network.allowedPorts)==="[443,8443]");
check("Connect timeout 5s",defaults.timeouts.connectTimeoutSeconds===5);
check("Total timeout 15s",defaults.timeouts.totalTimeoutSeconds===15);
check("8 attempts",defaults.retry.maxAttempts===8);
check("Retry schedule",JSON.stringify(defaults.retry.retryDelaysSeconds)==="[60,300,900,3600,14400,43200,86400]");
check("Retry jitter 20%",defaults.retry.jitterPercent===20);
check("Retry-After bounded",defaults.retry.retryAfterMinimumSeconds===5 && defaults.retry.retryAfterMaximumSeconds===86400);
check("Rate 10 rps",defaults.rate.requestsPerSecond===10);
check("Concurrency 4",defaults.rate.maxConcurrentRequests===4);
check("Degrade threshold 5",defaults.health.degradedAfterConsecutiveFailures===5);
check("Pause threshold 20",defaults.health.pauseAfterConsecutiveFailures===20);
check("Pause queue 72h",defaults.health.pauseQueueRetentionHours===72);
check("Verification TTL 600",defaults.verification.challengeTtlSeconds===600);
check("Verification HTTP 200",defaults.verification.requiredHttpStatus===200);
check("Redelivery 7d",defaults.retention.manualRedeliveryWindowDays===7);
check("Delivery metadata 30d",defaults.retention.deliveryMetadataDays===30);

const requiredHeaders=["Content-Type","User-Agent","NextF-Webhook-Id","NextF-Webhook-Subscription-Id","NextF-Event-Id","NextF-Event-Key","NextF-Event-Version","NextF-Contract-Version","NextF-Environment","NextF-Webhook-Attempt","NextF-Webhook-Signature"];
for(const h of requiredHeaders)check(`Required header ${h}`,headers.requestHeaders.some(x=>x.name===h&&x.required===true));
check("Signature header sensitive",headers.requestHeaders.find(x=>x.name==="NextF-Webhook-Signature")?.sensitive===true);

const failureCodes=failuresV.failureCodes.map(x=>x.code);
check("Failure codes unique",new Set(failureCodes).size===failureCodes.length);
check("HTTP gone disables endpoint",failuresV.failureCodes.find(x=>x.code==="http.gone")?.classification==="disable-endpoint");
check("Max attempts dead letters",failuresV.failureCodes.find(x=>x.code==="delivery.max-attempts")?.classification==="dead-letter");

const generated=fs.readFileSync(path.join(root,"js/generated-webhooks.js"),"utf8");
const digestFiles=["index.json","categories.json","statuses.json","headers.json","failure-codes.json","default-policies.json","event-catalog.json","webhook-definition.schema.json"];
const digest=crypto.createHash("sha256").update(Buffer.concat(digestFiles.map(x=>fs.readFileSync(path.join(root,"registry/webhooks",x))))).digest("hex");
check("Generated Webhooks SHA matches source",generated.includes(digest));

const nav=read(path.join(root,"registry/portal-navigation.json"));
const webhookNav=nav.groups.flatMap(x=>x.items??[]).find(x=>x.id==="events-webhooks");
check("Webhook nav available",webhookNav?.status==="available"&&webhookNav?.phase===14);

const routes=fs.readFileSync(path.join(root,"js/routes.js"),"utf8");
check("Webhook route available",routes.includes('id: "events-webhooks"')&&routes.includes('phase: 14, status: "available"'));

const app=fs.readFileSync(path.join(root,"js/app.js"),"utf8");
const router=fs.readFileSync(path.join(root,"js/router.js"),"utf8");
check("App loads Webhook engine",app.includes("loadWebhooks"));
check("Router renders Webhook index",router.includes("renderWebhooksIndex"));
check("Router renders Webhook detail",router.includes("renderWebhooksDetail"));

console.log(`NEXT F Contracts Phase 14 validation`);
console.log(`Version: ${version}`);
console.log(`Webhook schemas: ${idx.schemas.length}`);
console.log(`Eligible Events: ${catalog.events.length}`);
console.log(`Canonical Events: ${ev.events.length}`);
console.log(`Registry entries: ${reg.items.length}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){
 console.error("\nFailures:");
 for(const x of failures)console.error(`- ${x}`);
 process.exit(1);
}
console.log("\nPASS - Phase 14 Webhook Registry is internally consistent.");
