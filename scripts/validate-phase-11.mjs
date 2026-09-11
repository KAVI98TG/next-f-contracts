import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root=path.resolve(process.cwd());
const read=(rel)=>fs.readFileSync(path.join(root,rel),"utf8");
const json=(rel)=>JSON.parse(read(rel));
const version=read("VERSION").trim();
const failures=[],passes=[];
const check=(name,ok,detail="")=>ok?passes.push(name):failures.push(`${name}${detail?`: ${detail}`:""}`);

check("Version is 0.12.0",version==="0.12.0",version);

const idx=json("registry/commerce/index.json");
const schemas=idx.schemas;
const cats=json("registry/commerce/categories.json");
const registry=json("registry/registry.json");
const fields=json("registry/fields/index.json");

check("Commerce index version",idx.registryVersion===version,idx.registryVersion);
check("Exactly 71 Commerce schemas",schemas.length===71,schemas.length);
check("Exactly 11 Commerce categories",cats.categories.length===11,cats.categories.length);
check("Commerce definition count matches",idx.definitionCount===schemas.length,idx.definitionCount);
check("Commerce category count matches",idx.categoryCount===cats.categories.length,idx.categoryCount);

const primitiveIds=new Set(fields.fields.map(x=>x.$id));
const registryIds=new Set(registry.items.map(x=>x.id));
const commerceIds=new Set(schemas.map(x=>x.$id));
const allIds=new Set([...registryIds,...commerceIds,...primitiveIds]);

const ids=schemas.map(x=>x.$id);
check("Commerce schema IDs unique",ids.length===new Set(ids).size);
check("All Commerce schemas stable",schemas.every(x=>x.status==="stable"));
check("All Commerce schemas version 0.12.0",schemas.every(x=>x.version===version));
check("All Commerce schemas domain commerce",schemas.every(x=>x.domain==="commerce"));

const categoryKeys=new Set(cats.categories.map(x=>x.key));
let fieldCount=0,ruleCount=0,relationshipCount=0;
for(const s of schemas){
  check(`${s.$id} category known`,categoryKeys.has(s.category),s.category);
  check(`${s.$id} has commerceModel`,!!s.commerceModel);
  check(`${s.$id} has CMS metadata`,!!s.cms);
  check(`${s.$id} has delivery metadata`,!!s.delivery);
  check(`${s.$id} has future bindings`,!!s.futureBindings);
  check(`${s.$id} future Commerce Rules phase`,s.futureBindings?.commerceRules==="phase-12");
  check(`${s.$id} future Events phase`,s.futureBindings?.events==="phase-13");
  check(`${s.$id} future Webhooks phase`,s.futureBindings?.webhooks==="phase-14");
  check(`${s.$id} future Permissions phase`,s.futureBindings?.permissions==="phase-15");
  const keys=s.fields.map(f=>f.key);
  check(`${s.$id} field keys unique`,keys.length===new Set(keys).size);
  for(const f of s.fields){
    fieldCount++;
    const refs=[f.primitive,f.schema,f.itemsPrimitive,f.itemsSchema].filter(Boolean);
    check(`${s.$id}.${f.key} exactly one type source`,refs.length===1,refs.join(","));
    for(const ref of refs)check(`${s.$id}.${f.key} ref exists ${ref}`,allIds.has(ref),ref);
    check(`${s.$id}.${f.key} required boolean`,typeof f.required==="boolean");
    check(`${s.$id}.${f.key} nullable boolean`,typeof f.nullable==="boolean");
    check(`${s.$id}.${f.key} description`,typeof f.description==="string"&&f.description.length>0);
  }
  for(const rel of s.relationships||[]){
    relationshipCount++;
    check(`${s.$id} relationship target exists ${rel.target}`,allIds.has(rel.target),rel.target);
    check(`${s.$id} relationship type`,typeof rel.type==="string"&&rel.type.length>0);
  }
  const ruleIds=(s.validationRules||[]).map(r=>r.id);
  check(`${s.$id} validation rule IDs unique`,ruleIds.length===new Set(ruleIds).size);
  for(const rule of s.validationRules||[]){
    ruleCount++;
    check(`${s.$id}.${rule.id} rule description`,typeof rule.description==="string"&&rule.description.length>0);
  }
}

const byId=new Map(schemas.map(x=>[x.$id,x]));
const has=(id)=>byId.has(id);
const hasField=(id,key)=>(byId.get(id)?.fields||[]).some(f=>f.key===key);
const hasRule=(id,key)=>(byId.get(id)?.validationRules||[]).some(r=>r.id===key);

const required=[
  "commerce.storeSettings","commerce.salesChannel","commerce.moneySnapshot","commerce.quantity",
  "commerce.product","commerce.productVariant","commerce.productOption","commerce.productAttributeDefinition","commerce.productPrice","commerce.productAvailability","commerce.productCategory","commerce.productCollection",
  "commerce.inventoryLocation","commerce.inventoryItem","commerce.inventoryLevel","commerce.inventoryAdjustment","commerce.inventoryReservation","commerce.inventoryTransfer",
  "commerce.commerceCustomer","commerce.customerAddress","commerce.customerSnapshot",
  "commerce.cart","commerce.cartLine","commerce.cartTotals",
  "commerce.checkout","commerce.checkoutLine","commerce.checkoutContact","commerce.checkoutAddressSnapshot",
  "commerce.order","commerce.orderLine","commerce.orderTotals","commerce.orderSource",
  "commerce.payment","commerce.paymentAttempt","commerce.paymentAuthorization","commerce.paymentCapture","commerce.paymentMethodReference","commerce.refund","commerce.refundLine",
  "commerce.taxConfiguration","commerce.taxClass","commerce.taxRate","commerce.taxLine",
  "commerce.shippingZone","commerce.shippingRate","commerce.shippingMethod","commerce.fulfillment","commerce.shipment","commerce.trackingReference","commerce.package","commerce.deliveryEstimate",
  "commerce.discount","commerce.discountCode","commerce.discountAllocation","commerce.promotionCondition","commerce.promotionBenefit",
  "commerce.returnRequest","commerce.returnLine","commerce.returnResolution","commerce.productReview"
];
for(const id of required)check(`Required Commerce schema ${id}`,has(id));

check("Commerce Customer explicitly distinct from Organization",hasRule("commerce.commerceCustomer","notOrganization"));
check("Product catalog pricing mutable rule",hasRule("commerce.product","catalogPriceMutable"));
check("Product specialist workflows gated",hasRule("commerce.product","specializedTypesGated"));
check("Order status dimensions separate",hasRule("commerce.order","statusDimensionsSeparate"));
check("Order snapshots stable",hasRule("commerce.order","historicalSnapshotsStable"));
check("Order financial changes via Payments",hasRule("commerce.order","financialChangesViaPayments"));
check("Payment raw card data prohibited",hasRule("commerce.payment","noRawCardData"));
check("Payment Method PAN prohibited",hasRule("commerce.paymentMethodReference","noPan"));
check("Payment Method CVV prohibited",hasRule("commerce.paymentMethodReference","noCvv"));
check("Inventory adjustment append-only",hasRule("commerce.inventoryAdjustment","appendOnly"));
check("Inventory Transfer exists",has("commerce.inventoryTransfer"));
check("Return separates Refund",hasRule("commerce.returnRequest","refundSeparate")||hasRule("commerce.returnResolution","refundSeparate"));
check("Review verification evidence-derived",hasRule("commerce.productReview","verifiedDerived"));
check("Review public delivery approved only",hasRule("commerce.productReview","approvedOnlyPublic"));
check("Review SEO truthfulness protected",hasRule("commerce.productReview","seoTruthful"));
check("Product references Phase 7 SEO",byId.get("commerce.product")?.relationships.some(r=>r.target==="seo.metadata"));
check("Payment references Integration layer",byId.get("commerce.payment")?.relationships.some(r=>r.target==="integrations.integrationConnection"));
check("Order line has discount snapshot",hasField("commerce.orderLine","discountAllocations"));
check("Refund has line allocations",hasField("commerce.refund","lines"));
check("Payment has authorizations",hasField("commerce.payment","authorizationIds"));
check("Payment has captures",hasField("commerce.payment","captureIds"));
check("Payment has refunds",hasField("commerce.payment","refundIds"));
check("Shipping Method has delivery estimate",hasField("commerce.shippingMethod","deliveryEstimate"));
check("Shipment supports packages",hasField("commerce.shipment","packages"));
check("Product supports tax class",hasField("commerce.product","taxClassKey"));

const commerceRegistryItems=registry.items.filter(x=>x.domain==="commerce");
check("Main registry has 73 Commerce entries",commerceRegistryItems.length===73,commerceRegistryItems.length);
check("Main registry has 358 total entries",registry.items.length===358,registry.items.length);
check("Commerce Standard indexed",registry.items.some(x=>x.id==="commerce.commerceCoreStandard"));
check("Commerce Registry index indexed",registry.items.some(x=>x.id==="commerce.commerceRegistry"));
check("Every Commerce schema indexed",schemas.every(x=>registryIds.has(x.$id)));
check("Every Commerce source exists",commerceRegistryItems.every(x=>fs.existsSync(path.join(root,x.source))));

const raw=read("registry/commerce/index.json");
const generated=read("js/generated-commerce-schemas.js");
const digest=crypto.createHash("sha256").update(raw).digest("hex");
check("Commerce fallback checksum",generated.includes(digest),digest);

const routes=read("js/routes.js"),router=read("js/router.js"),app=read("js/app.js"),html=read("index.html"),pages=read("js/commerce-pages.js"),nav=json("registry/portal-navigation.json"),meta=json("registry/registry-meta.json");
check("Commerce route available",routes.includes('path: "/registry/commerce"')&&routes.includes('phase: 11, status: "available"'));
check("Commerce router wired",router.includes("renderCommerceIndex")&&router.includes("bindCommerceList"));
check("Commerce detail wired",router.includes("renderCommerceDetail"));
check("Commerce engine loaded",app.includes("loadCommerceSchemas"));
check("Commerce CSS loaded",html.includes("./css/commerce.css"));
check("Portal shows V0.12.0",html.includes("v0.12.0"));
check("Portal shows Phase 11",html.includes("Phase 11"));
check("Commerce explorer describes snapshots",pages.includes("Historical transactions are snapshots"));
check("Portal navigation Commerce available",(nav.groups||[]).flatMap(g=>g.items||[]).some(x=>x.path==="/registry/commerce"&&x.status==="available"));
check("Registry meta Commerce definitions",meta.commerceDefinitions==="registry/commerce/definitions");
check("Registry meta Commerce index",meta.commerceIndex==="registry/commerce/index.json");
check("Commerce Standard exists",fs.existsSync(path.join(root,"standards/19-commerce-core-contract-standard.md")));

const acceptance=json("checks/phase-11-acceptance.json");
check("Acceptance version matches",acceptance.version===version,acceptance.version);
check("All Phase 11 acceptance checks passed",acceptance.checks.every(x=>x.passed===true));

const css=fs.readdirSync(path.join(root,"css")).filter(n=>n.endsWith(".css")).map(n=>read(`css/${n}`)).join("\n");
check("Light theme explicit",html.includes('content="light"'));
check("No dark color-scheme media",!/@media\s*\([^)]*prefers-color-scheme\s*:\s*dark/i.test(css));
check("No backdrop filter",!/backdrop-filter\s*:/i.test(css));
check("No CSS 3D",!/perspective\s*:|rotate[XYZ]\s*\(/i.test(css));
const commerceCss=read("css/commerce.css");
check("Commerce CSS uses known token namespace",!commerceCss.includes("--color-primary")&&!commerceCss.includes("--color-surface"));

console.log("NEXT F Contracts Phase 11 validation");
console.log(`Version: ${version}`);
console.log(`Commerce schemas: ${schemas.length}`);
console.log(`Commerce categories: ${cats.categories.length}`);
console.log(`Schema fields inspected: ${fieldCount}`);
console.log(`Relationships inspected: ${relationshipCount}`);
console.log(`Validation rules inspected: ${ruleCount}`);
console.log(`Registry items: ${registry.items.length}`);
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){
  console.error("\nFailures:");
  for(const failure of failures)console.error(`- ${failure}`);
  process.exit(1);
}
console.log("\nPASS - Phase 11 Commerce Core is internally consistent.");
