import fs from "node:fs";
import path from "node:path";
import { CommerceRegistryEngine } from "../js/commerce-registry-engine.js";
import { GENERATED_COMMERCE_SCHEMAS } from "../js/generated-commerce-schemas.js";
import { renderCommerceIndex, renderCommerceDetail } from "../js/commerce-pages.js";

const root=path.resolve(process.cwd());
const failures=[],passes=[];
const check=(name,ok,detail="")=>ok?passes.push(name):failures.push(`${name}${detail?`: ${detail}`:""}`);

const required=[
  "index.html","404.html","js/app.js","js/router.js","js/routes.js",
  "js/commerce-registry-engine.js","js/commerce-pages.js","js/generated-commerce-schemas.js",
  "css/commerce.css","registry/commerce/index.json","registry/commerce/categories.json",
  "registry/commerce/commerce-schema-definition.schema.json","standards/19-commerce-core-contract-standard.md"
];
for(const file of required)check(`exists ${file}`,fs.existsSync(path.join(root,file)));

const html=fs.readFileSync(path.join(root,"index.html"),"utf8");
const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
check("No duplicate HTML IDs",ids.length===new Set(ids).size);
for(const m of html.matchAll(/(?:href|src)="\.\/([^"#?]+)"/g)){
  const rel=m[1]; if(/^https?:/.test(rel))continue;
  check(`asset ${rel}`,fs.existsSync(path.join(root,rel)));
}

const engine=new CommerceRegistryEngine(GENERATED_COMMERCE_SCHEMAS,"generated-test");
check("Engine size 71",engine.size===71,engine.size);
check("Product searchable",engine.search("Product").some(x=>x.$id==="commerce.product"));
check("Order searchable",engine.search("order").some(x=>x.$id==="commerce.order"));
check("Payments filter works",engine.search("",{category:"payments"}).length>=6);
check("Transactional filter works",engine.search("",{transactional:"yes"}).every(x=>x.commerceModel.transactional));
check("Public filter works",engine.search("",{visibility:"public"}).every(x=>x.commerceModel.publicEligible));
check("Private filter works",engine.search("",{visibility:"private"}).every(x=>!x.commerceModel.publicEligible));

const page=renderCommerceIndex(engine,{q:"",category:"",kind:"",visibility:"",transactional:""});
check("Index renders Product",page.includes("Product"));
check("Index renders Inventory",page.includes("Inventory"));
check("Index renders Payments",page.includes("Payments"));
check("Index renders snapshot boundary",page.includes("Historical transactions are snapshots"));
check("Index renders hosting-independent boundary language",page.includes("hosting")||page.includes("Hosting"));

const registry=JSON.parse(fs.readFileSync(path.join(root,"registry/registry.json"),"utf8"));
const productItem=registry.items.find(x=>x.id==="commerce.product");
const productDetail=renderCommerceDetail(registry,productItem,engine.get("commerce.product"));
check("Product detail renders SEO relationship",productDetail.includes("seo.metadata"));
check("Product detail renders tax class",productDetail.includes("taxClassKey"));
check("Product detail links source JSON",productDetail.includes("product.json"));

const paymentItem=registry.items.find(x=>x.id==="commerce.payment");
const paymentDetail=renderCommerceDetail(registry,paymentItem,engine.get("commerce.payment"));
check("Payment detail renders authorization IDs",paymentDetail.includes("authorizationIds"));
check("Payment detail renders Integration relationship",paymentDetail.includes("integrations.integrationConnection"));

const orderItem=registry.items.find(x=>x.id==="commerce.order");
const orderDetail=renderCommerceDetail(registry,orderItem,engine.get("commerce.order"));
check("Order detail renders separate statuses",orderDetail.includes("paymentStatus")&&orderDetail.includes("fulfillmentStatus")&&orderDetail.includes("orderStatus"));

console.log("NEXT F Contracts Phase 11 smoke test");
console.log(`Passes: ${passes.length}`);
console.log(`Failures: ${failures.length}`);
if(failures.length){
  console.error("\nFailures:");
  for(const failure of failures)console.error(`- ${failure}`);
  process.exit(1);
}
console.log("\nPASS - Phase 11 portal/repository runtime smoke checks passed.");
