import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root=path.resolve(process.cwd());
const read=(rel)=>fs.readFileSync(path.join(root,rel),"utf8");
const json=(rel)=>JSON.parse(read(rel));
const failures=[],passes=[];
const check=(name,ok,detail="")=>ok?passes.push(name):failures.push(`${name}${detail?`: ${detail}`:""}`);
const version=read("VERSION").trim();

check("Repository version is 0.13.0",version==="0.13.0",version);
check("Phase 12 standard exists",fs.existsSync(path.join(root,"standards/20-commerce-rules-standard.md")));
check("Phase 11 Commerce standard preserved",fs.existsSync(path.join(root,"standards/19-commerce-core-contract-standard.md")));

const idx=json("registry/commerce/rules/index.json");
const categories=json("registry/commerce/rules/categories.json");
const states=json("registry/commerce/rules/state-machines.json");
const commands=json("registry/commerce/rules/command-policies.json");
const errors=json("registry/commerce/rules/error-codes.json");
const registry=json("registry/registry.json");
const types=json("registry/types.json");
const meta=json("registry/registry-meta.json");
const commerce=json("registry/commerce/index.json");

const acceptance=json("checks/phase-12-acceptance.json");
check("Phase 12 acceptance version",acceptance.version===version,acceptance.version);
check("Phase 12 acceptance status",acceptance.status==="passed",acceptance.status);
check("All Phase 12 acceptance checks passed",acceptance.checks.every(x=>x.passed===true));


const rules=idx.rules;
check("Commerce Rules index version",idx.registryVersion===version,idx.registryVersion);
check("Exactly 139 Commerce Rules",rules.length===139,rules.length);
check("Exactly 14 rule categories",categories.categories.length===14,categories.categories.length);
check("Index category count",idx.categoryCount===14,idx.categoryCount);
check("Index definition count",idx.definitionCount===139,idx.definitionCount);
check("Phase 11 has 71 Commerce schemas",commerce.schemas.length===71,commerce.schemas.length);
check("Phase 11 Commerce registry remains 0.12.0",commerce.registryVersion==="0.12.0",commerce.registryVersion);
check("Phase 11 schema versions remain 0.12.0",commerce.schemas.every(s=>s.version==="0.12.0"));

const ruleIds=rules.map(r=>r.$id);
const ruleSet=new Set(ruleIds);
const registryIds=new Set(registry.items.map(x=>x.id));
const contractIds=new Set(registry.items.filter(x=>x.type!=="business-rule").map(x=>x.id));
const errorSet=new Set(errors.errors.map(x=>x.code));
const catSet=new Set(categories.categories.map(x=>x.key));
check("Rule IDs unique",ruleIds.length===ruleSet.size);
check("All rules use canonical ID shape",rules.every(r=>/^commerce\.rule\.[A-Za-z][A-Za-z0-9]*$/.test(r.$id)));
check("All rules stable",rules.every(r=>r.status==="stable"));
check("All rules version 0.13.0",rules.every(r=>r.version===version));
check("All rules domain commerce",rules.every(r=>r.domain==="commerce"));

let reqCount=0,relCount=0,appliesCount=0;
for(const r of rules){
  check(`${r.$id} category exists`,catSet.has(r.category),r.category);
  check(`${r.$id} ruleKind present`,typeof r.ruleKind==="string"&&r.ruleKind.length>2);
  check(`${r.$id} severity valid`,["standard","high","critical"].includes(r.severity),r.severity);
  check(`${r.$id} configurable boolean`,typeof r.configurable==="boolean");
  check(`${r.$id} has appliesTo`,Array.isArray(r.appliesTo)&&r.appliesTo.length>0);
  for(const target of r.appliesTo){
    appliesCount++;
    check(`${r.$id} appliesTo resolves ${target}`,contractIds.has(target),target);
  }
  check(`${r.$id} authority server`,r.enforcement?.authority==="server",r.enforcement?.authority);
  check(`${r.$id} not client-only`,r.enforcement?.clientValidationOnly===false);
  check(`${r.$id} atomic flag boolean`,typeof r.enforcement?.atomicWhenRequired==="boolean");
  check(`${r.$id} audit flag boolean`,typeof r.enforcement?.auditRequired==="boolean");
  check(`${r.$id} timing present`,typeof r.enforcement?.timing==="string"&&r.enforcement.timing.length>0);
  check(`${r.$id} requirements`,Array.isArray(r.requirements)&&r.requirements.length>=2);
  const requirementIds=(r.requirements||[]).map(x=>x.id);
  check(`${r.$id} requirement IDs unique`,requirementIds.length===new Set(requirementIds).size);
  for(const q of r.requirements||[]){reqCount++;check(`${q.id} description`,typeof q.description==="string"&&q.description.length>20);}
  check(`${r.$id} failure code registered`,errorSet.has(r.failure?.code),r.failure?.code);
  check(`${r.$id} failure retryable boolean`,typeof r.failure?.retryable==="boolean");
  check(`${r.$id} failure customerSafe boolean`,typeof r.failure?.customerSafe==="boolean");
  for(const rel of r.relationships||[]){relCount++;check(`${r.$id} relationship governs`,rel.type==="governs",rel.type);check(`${r.$id} relationship target resolves`,contractIds.has(rel.target),rel.target);}
  check(`${r.$id} valid example`,Array.isArray(r.examples?.valid)&&r.examples.valid.length>0);
  check(`${r.$id} invalid example`,Array.isArray(r.examples?.invalid)&&r.examples.invalid.length>0);
  check(`${r.$id} implementation notes`,Array.isArray(r.implementationNotes)&&r.implementationNotes.length>=2);
  check(`${r.$id} events reserved`,r.futureBindings?.events==="phase-13");
  check(`${r.$id} webhooks reserved`,r.futureBindings?.webhooks==="phase-14");
  check(`${r.$id} permissions reserved`,r.futureBindings?.permissions==="phase-15");
  check(`${r.$id} manifest reserved`,r.futureBindings?.siteManifest==="phase-16");
  check(`${r.$id} API reserved`,r.futureBindings?.api==="phase-18");
  const file=r.$id.split(".").pop().replace(/([a-z0-9])([A-Z])/g,"$1-$2").replace(/([A-Z])([A-Z][a-z])/g,"$1-$2").toLowerCase()+".json";
  check(`${r.$id} definition file exists`,fs.existsSync(path.join(root,"registry/commerce/rules/definitions",file)),file);
}

const mustRules=[
 "commerce.rule.transactionSnapshotImmutability","commerce.rule.authoritativeServerCalculation",
 "commerce.rule.checkoutSingleOrderConversion","commerce.rule.orderPaymentStatusDerived",
 "commerce.rule.orderFulfillmentStatusDerived","commerce.rule.authorizationCaptureBound",
 "commerce.rule.refundCumulativeBound","commerce.rule.refundDoesNotImplyReturn",
 "commerce.rule.inventoryConcurrentMutationGuard","commerce.rule.couponUsageAtomic",
 "commerce.rule.taxJurisdictionResolvedBeforeCommit","commerce.rule.returnRestockExplicit",
 "commerce.rule.transactionalCommandIdempotency","commerce.rule.optimisticConcurrency",
 "commerce.rule.commerceTenantIsolation","commerce.rule.rawCardDataProhibited",
 "commerce.rule.subscriptionCapabilityGate","commerce.rule.multiCurrencyCapabilityGate"
];
for(const id of mustRules)check(`Required rule ${id}`,ruleSet.has(id));

check("Exactly 16 state machines",states.stateMachines.length===16,states.stateMachines.length);
const stateIds=states.stateMachines.map(x=>x.id);
check("State machine IDs unique",stateIds.length===new Set(stateIds).size);
const commerceById=new Map(commerce.schemas.map(x=>[x.$id,x]));
for(const m of states.stateMachines){
  check(`${m.id} contract resolves`,commerceById.has(m.contract),m.contract);
  const schema=commerceById.get(m.contract);
  const field=schema?.fields?.find(f=>f.key===m.field);
  check(`${m.id} status field exists`,!!field,`${m.contract}.${m.field}`);
  const options=field?.config?.options||[];
  check(`${m.id} states equal schema enum`,m.states.length===options.length&&m.states.every(x=>options.includes(x))&&options.every(x=>m.states.includes(x)),`${m.states.join(",")} vs ${options.join(",")}`);
  check(`${m.id} initial is valid`,m.states.includes(m.initial),m.initial);
  check(`${m.id} terminal states valid`,m.terminal.every(x=>m.states.includes(x)));
  for(const terminal of m.terminal)check(`${m.id} terminal has no outgoing ${terminal}`,!(m.transitions?.[terminal]?.length),JSON.stringify(m.transitions?.[terminal]||[]));
  for(const [from,tos] of Object.entries(m.transitions||{})){
    check(`${m.id} transition source valid ${from}`,m.states.includes(from),from);
    for(const to of tos)check(`${m.id} transition target valid ${from}->${to}`,m.states.includes(to),to);
  }
  for(const guards of Object.values(m.guards||{}))for(const g of guards)check(`${m.id} guard resolves ${g}`,ruleSet.has(g),g);
}

check("Exactly 20 command policies",commands.commands.length===20,commands.commands.length);
const cmdIds=commands.commands.map(x=>x.id);check("Command IDs unique",cmdIds.length===new Set(cmdIds).size);
for(const c of commands.commands){
  check(`${c.id} canonical ID`,/^commerce\.command\.[A-Za-z][A-Za-z0-9]*$/.test(c.id),c.id);
  check(`${c.id} entity refs`,c.entities.every(x=>contractIds.has(x)),c.entities.filter(x=>!contractIds.has(x)).join(","));
  check(`${c.id} idempotency boolean`,typeof c.idempotencyRequired==="boolean");
  check(`${c.id} atomic boolean`,typeof c.atomic==="boolean");
  check(`${c.id} audit boolean`,typeof c.auditRequired==="boolean");
  check(`${c.id} concurrency scopes`,Array.isArray(c.concurrencyScopes)&&c.concurrencyScopes.length>0);
  check(`${c.id} guard rules`,Array.isArray(c.guardRules)&&c.guardRules.length>0&&c.guardRules.every(x=>ruleSet.has(x)));
  check(`${c.id} API reserved`,c.apiBinding==="phase-18");
  if(c.idempotencyRequired)check(`${c.id} replay behavior stable`,/original authoritative outcome/i.test(c.replayBehavior),c.replayBehavior);
}

check("Exactly 30 domain errors",errors.errors.length===30,errors.errors.length);
const errCodes=errors.errors.map(x=>x.code);check("Error codes unique",errCodes.length===new Set(errCodes).size);
for(const x of errors.errors){
  check(`${x.code} format`,/^COMMERCE_[A-Z0-9_]+$/.test(x.code));
  check(`${x.code} description`,typeof x.description==="string"&&x.description.length>10);
  check(`${x.code} retry boolean`,typeof x.defaultRetryable==="boolean");
  check(`${x.code} HTTP reserved`,x.httpMapping==="phase-18");
}

check("business-rule type registered",types.types.some(x=>x.id==="business-rule"));
check("governs relationship registered",(meta.allowedRelationshipTypes||[]).includes("governs"));
check("Commerce Rules metadata pointer",meta.commerceRulesIndex==="registry/commerce/rules/index.json");
check("Commerce Rule definition schema pointer",meta.commerceRuleDefinitionSchema==="registry/commerce/rules/commerce-rule-definition.schema.json");

check("Main registry version",registry.registryVersion===version,registry.registryVersion);
check("Main registry has 502 items",registry.items.length===502,registry.items.length);
check("Every Commerce Rule globally indexed",rules.every(r=>registryIds.has(r.$id)));
check("Commerce Rules standard indexed",registryIds.has("commerce.commerceRulesStandard"));
check("State machines indexed",registryIds.has("commerce.commerceStateMachines"));
check("Command policies indexed",registryIds.has("commerce.commerceCommandPolicies"));
check("Rule errors indexed",registryIds.has("commerce.commerceRuleErrors"));
check("No Phase 13 event items fabricated",registry.items.filter(x=>x.phase===13).length===0);
check("No Phase 14 webhook items fabricated",registry.items.filter(x=>x.phase===14).length===0);
check("No Phase 15 permission items fabricated",registry.items.filter(x=>x.phase===15).length===0);

const sourceParts=["index.json","state-machines.json","command-policies.json","error-codes.json"].map(x=>fs.readFileSync(path.join(root,"registry/commerce/rules",x)));
const digest=crypto.createHash("sha256").update(Buffer.concat(sourceParts)).digest("hex");
const generatedRules=read("js/generated-commerce-rules.js");
check("Generated Commerce Rules checksum matches",generatedRules.includes(`"${digest}"`),digest);

const regRaw=read("registry/registry.json");
const regDigest=crypto.createHash("sha256").update(regRaw).digest("hex");
const generatedRegistry=read("js/generated-registry.js");
check("Generated main registry checksum matches",generatedRegistry.includes(regDigest),regDigest);

const routes=read("js/routes.js"),html=read("index.html"),app=read("js/app.js"),router=read("js/router.js"),pages=read("js/commerce-rules-pages.js"),engine=read("js/commerce-rules-engine.js"),css=read("css/commerce-rules.css");
check("Commerce Rules route exists",routes.includes('path: "/registry/commerce-rules"'));
check("Commerce Rules side navigation exists",html.includes("#/registry/commerce-rules"));
check("Portal version label 0.13.0",html.includes("v0.13.0"));
check("Portal footer Phase 12",html.includes("Phase 12"));
check("App loads Commerce Rules",app.includes("loadCommerceRules"));
check("Router renders Commerce Rules",router.includes("renderCommerceRulesIndex")&&router.includes("renderCommerceRuleDetail"));
check("Commerce Rules page includes state machines",pages.includes("Lifecycle state machines"));
check("Commerce Rules page includes command policies",pages.includes("Command policies"));
check("Commerce Rules page includes domain errors",pages.includes("Domain error identifiers"));
check("Commerce Rules CSS exists",css.length>1000);
check("Light color scheme preserved",read("css/tokens.css").includes("color-scheme: light"));
check("No backdrop-filter in Phase 12 CSS",!css.includes("backdrop-filter"));
check("No dark mode in Phase 12 CSS",!css.toLowerCase().includes("prefers-color-scheme: dark"));
check("No 3D transform in Phase 12 CSS",!css.includes("rotateX(")&&!css.includes("rotateY(")&&!css.includes("perspective("));

console.log("\nNEXT F Contracts Phase 12 validation");
console.log(`Version: ${version}`);
console.log(`Commerce Rules: ${rules.length}`);
console.log(`Rule categories: ${categories.categories.length}`);
console.log(`State machines: ${states.stateMachines.length}`);
console.log(`Command policies: ${commands.commands.length}`);
console.log(`Domain errors: ${errors.errors.length}`);
console.log(`Requirements inspected: ${reqCount}`);
console.log(`Rule relationships inspected: ${relCount}`);
console.log(`Rule applicability refs inspected: ${appliesCount}`);
console.log(`Registry items: ${registry.items.length}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){console.error("\nFailures:");for(const x of failures)console.error(`- ${x}`);process.exit(1);}
console.log("\nPASS - Phase 12 Commerce Rules are internally consistent.");
