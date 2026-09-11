import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root = path.resolve(process.cwd());
const version = fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read = p => JSON.parse(fs.readFileSync(p,'utf8'));
const write = (p,v) => fs.writeFileSync(p, JSON.stringify(v,null,2)+'\n');

const base = path.join(root,'registry/webhooks');
const categories = read(path.join(base,'categories.json'));
const statuses = read(path.join(base,'statuses.json'));
const headers = read(path.join(base,'headers.json'));
const failures = read(path.join(base,'failure-codes.json'));
const defaults = read(path.join(base,'default-policies.json'));
const definitionSchema = read(path.join(base,'webhook-definition.schema.json'));
const eventIndex = read(path.join(root,'registry/events/index.json'));

const schemas = fs.readdirSync(path.join(base,'definitions'))
  .filter(x=>x.endsWith('.json'))
  .sort()
  .map(x=>read(path.join(base,'definitions',x)))
  .sort((a,b)=>a.$id.localeCompare(b.$id));

const eligibleEvents = eventIndex.events
  .filter(e=>e.webhookEligible===true)
  .map(e=>({
    eventKey:e.eventKey,
    name:e.name,
    eventVersion:e.eventVersion,
    contractVersion:e.version,
    category:e.category,
    producerKey:e.producerKey,
    subjectContracts:e.subjectContracts,
    dataPolicy:e.dataPolicy,
    description:e.description
  }))
  .sort((a,b)=>a.eventKey.localeCompare(b.eventKey));

const eventCatalog = {
  registryVersion:version,
  sourceRegistry:'registry/events/index.json',
  exactAllowListOnly:true,
  wildcardSubscriptions:false,
  historicalBackfill:false,
  eligibleEventCount:eligibleEvents.length,
  events:eligibleEvents
};
write(path.join(base,'event-catalog.json'),eventCatalog);

const index = {
  registryVersion:version,
  schemaVersion:'1.0.0',
  title:'NEXT F Webhook Registry',
  description:'Canonical outbound Webhook configuration, security, delivery, resilience and observability contracts layered on the NEXT F Event Registry.',
  definitionCount:schemas.length,
  eligibleEventCount:eligibleEvents.length,
  categoryCount:categories.categories.length,
  sourceDirectory:'registry/webhooks/definitions',
  categories:categories.categories,
  schemas,
  statuses,
  headers,
  failureCodes:failures.failureCodes,
  defaultPolicies:defaults,
  eventCatalog
};
write(path.join(base,'index.json'),index);

const digestFiles = [
  'index.json','categories.json','statuses.json','headers.json',
  'failure-codes.json','default-policies.json','event-catalog.json',
  'webhook-definition.schema.json'
];
const digest = crypto.createHash('sha256')
  .update(Buffer.concat(digestFiles.map(x=>fs.readFileSync(path.join(base,x)))))
  .digest('hex');

fs.writeFileSync(path.join(root,'js/generated-webhooks.js'),
`// GENERATED FILE - DO NOT EDIT DIRECTLY.
// Sources: registry/webhooks/*.json
// SHA-256: ${digest}
export const GENERATED_WEBHOOKS_SOURCE_SHA256 = ${JSON.stringify(digest)};
export const GENERATED_WEBHOOKS = ${JSON.stringify(index,null,2)};
`);

const registryPath = path.join(root,'registry/registry.json');
const registry = read(registryPath);
registry.registryVersion=version;
registry.items = registry.items.filter(x=>x.managedBy!=='webhooks-sync');

const metaItems=[
 {id:'webhooks.webhookRegistryStandard',name:'Webhook Registry Standard',type:'standard',source:'standards/22-webhook-registry-standard.md',description:'Canonical Webhook transport, signing, verification, retry, security, delivery and observability rules.',tags:['webhooks','standard','security','delivery']},
 {id:'webhooks.webhookRegistry',name:'Webhook Registry',type:'registry-index',source:'registry/webhooks/index.json',description:'Machine-readable index of Webhook support schemas, protocol policies and eligible Event catalog.',tags:['webhooks','registry']},
 {id:'webhooks.eventCatalog',name:'Webhook Event Catalog',type:'machine-registry',source:'registry/webhooks/event-catalog.json',description:'Exact allow-list of canonical Event Registry definitions currently eligible for Webhook delivery.',tags:['webhooks','events','allow-list']},
 {id:'webhooks.statusVocabulary',name:'Webhook Status Vocabulary',type:'vocabulary',source:'registry/webhooks/statuses.json',description:'Controlled endpoint, subscription, delivery, attempt, verification and health states.',tags:['webhooks','status','vocabulary']},
 {id:'webhooks.headerVocabulary',name:'Webhook Header Vocabulary',type:'vocabulary',source:'registry/webhooks/headers.json',description:'Required and reserved NEXT F Webhook HTTP request headers.',tags:['webhooks','headers','protocol']},
 {id:'webhooks.failureCodeVocabulary',name:'Webhook Failure Code Vocabulary',type:'vocabulary',source:'registry/webhooks/failure-codes.json',description:'Controlled Webhook failure codes and retry/terminal classifications.',tags:['webhooks','failures','vocabulary']},
 {id:'webhooks.defaultPolicies',name:'Webhook Default Policies',type:'machine-registry',source:'registry/webhooks/default-policies.json',description:'Canonical V1 payload, timeout, signing, retry, rate, health, retention, verification and network defaults.',tags:['webhooks','defaults','policy']}
];
for(const m of metaItems){
  registry.items.push({
    ...m,domain:'webhooks',version,status:'stable',phase:14,introducedIn:version,
    relationships:m.id==='webhooks.webhookRegistryStandard'?[]:[{type:'implements',target:'webhooks.webhookRegistryStandard',description:'Governed by the Webhook Registry Standard.'}],
    permissions:[],events:[],managedBy:'webhooks-sync'
  });
}
const slugFor=id=>id.split('.').pop().replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase();
for(const s of schemas){
  registry.items.push({
    id:s.$id,name:s.name,domain:'webhooks',type:'schema',version:s.version,status:s.status,
    description:s.description,source:`registry/webhooks/definitions/${slugFor(s.$id)}.json`,
    phase:14,introducedIn:s.version,tags:['webhooks','schema',s.category,s.webhookModel?.kind??'schema'],
    relationships:s.relationships??[],permissions:[],events:[],managedBy:'webhooks-sync'
  });
}
registry.items.sort((a,b)=>a.id.localeCompare(b.id));
write(registryPath,registry);

const domainsPath=path.join(root,'registry/domains.json');
const domains=read(domainsPath);
domains.registryVersion=version;
if(!domains.domains.some(x=>x.id==='webhooks')){
  domains.domains.push({
    id:'webhooks',label:'Webhooks',
    description:'Outbound endpoint verification, subscriptions, HMAC signing, Event exposure, delivery, retries, dead-lettering and observability.'
  });
}
domains.domains.sort((a,b)=>a.id.localeCompare(b.id));
write(domainsPath,domains);

for(const rel of ['registry/types.json','registry/statuses.json']){
  const p=path.join(root,rel),d=read(p); d.registryVersion=version; write(p,d);
}

const metaPath=path.join(root,'registry/registry-meta.json');
const meta=read(metaPath);
Object.assign(meta,{
  registryVersion:version,
  webhooksIndex:'registry/webhooks/index.json',
  webhookDefinitions:'registry/webhooks/definitions',
  webhookDefinitionSchema:'registry/webhooks/webhook-definition.schema.json',
  webhookCategories:'registry/webhooks/categories.json',
  webhookStatuses:'registry/webhooks/statuses.json',
  webhookHeaders:'registry/webhooks/headers.json',
  webhookFailureCodes:'registry/webhooks/failure-codes.json',
  webhookDefaultPolicies:'registry/webhooks/default-policies.json',
  webhookEventCatalog:'registry/webhooks/event-catalog.json'
});
write(metaPath,meta);

const navPath=path.join(root,'registry/portal-navigation.json');
const nav=read(navPath);
nav.portalVersion=version;
nav.registryVersion=version;
for(const g of nav.groups??[])for(const it of g.items??[]){
  if(it.id==='events-webhooks'){it.status='available';it.phase=14;}
}
write(navPath,nav);

const generated=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});
if(generated.status!==0)process.exit(generated.status??1);
console.log(`Synchronized ${schemas.length} Webhook schemas and ${eligibleEvents.length} eligible Events.`);
