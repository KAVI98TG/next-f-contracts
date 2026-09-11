import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';
const root=path.resolve(process.cwd());
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const base=path.join(root,'registry/events');
const cats=read(path.join(base,'categories.json'));
const producers=read(path.join(base,'producers.json'));
const consumers=read(path.join(base,'consumers.json'));
const schemas=fs.readdirSync(path.join(base,'definitions')).filter(x=>x.endsWith('.json')).sort().map(x=>read(path.join(base,'definitions',x))).sort((a,b)=>a.$id.localeCompare(b.$id));
const events=fs.readdirSync(path.join(base,'events')).filter(x=>x.endsWith('.json')).sort().map(x=>read(path.join(base,'events',x))).sort((a,b)=>a.eventKey.localeCompare(b.eventKey));
const idx={registryVersion:version,schemaVersion:'1.0.0',title:'NEXT F Event Registry',description:'Authoritative canonical domain Event Registry. Events describe completed facts and remain independent of webhook/transport implementation.',definitionCount:schemas.length,eventCount:events.length,categoryCount:cats.categories.length,sourceDirectories:{schemas:'registry/events/definitions',events:'registry/events/events'},categories:cats.categories,schemas,events};
fs.writeFileSync(path.join(base,'index.json'),JSON.stringify(idx,null,2)+'\n');
const runtime={...idx,producers:producers.producers,consumers:consumers.consumers};
const files=['index.json','categories.json','producers.json','consumers.json','event-definition.schema.json'];
const digest=crypto.createHash('sha256').update(Buffer.concat(files.map(x=>fs.readFileSync(path.join(base,x))))).digest('hex');
fs.writeFileSync(path.join(root,'js/generated-events.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// Sources: registry/events/*.json\n// SHA-256: ${digest}\nexport const GENERATED_EVENTS_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_EVENTS = ${JSON.stringify(runtime,null,2)};\n`);
const registryPath=path.join(root,'registry/registry.json'); const registry=read(registryPath); registry.registryVersion=version; registry.items=registry.items.filter(x=>x.managedBy!=='events-sync');
registry.items.push(
{id:'events.eventRegistryStandard',name:'Event Registry Standard',domain:'events',type:'standard',version:'0.14.0',status:'stable',description:'Canonical completed-fact event semantics, production, idempotency, ordering and payload rules.',source:'standards/21-event-registry-standard.md',phase:13,introducedIn:'0.14.0',tags:['events','standard','facts','outbox','idempotency'],relationships:[{type:'relatedTo',target:'core.auditRecord',description:'Event production and audit remain distinct but interoperable.'}],permissions:[],events:[],managedBy:'events-sync'},
{id:'events.eventRegistry',name:'Event Registry',domain:'events',type:'registry-index',version,status:'stable',description:'Machine-readable index of Phase 13 support schemas and canonical Event definitions.',source:'registry/events/index.json',phase:13,introducedIn:version,tags:['events','registry'],relationships:[{type:'implements',target:'events.eventRegistryStandard',description:'Indexes definitions governed by the Event Registry Standard.'}],permissions:[],events:[],managedBy:'events-sync'},
{id:'events.producerVocabulary',name:'Event Producer Vocabulary',domain:'events',type:'vocabulary',version,status:'stable',description:'Controlled logical producer authorities.',source:'registry/events/producers.json',phase:13,introducedIn:version,tags:['events','producer','vocabulary'],relationships:[{type:'implements',target:'events.eventRegistryStandard',description:'Controlled producer keys.'}],permissions:[],events:[],managedBy:'events-sync'},
{id:'events.consumerVocabulary',name:'Event Consumer Vocabulary',domain:'events',type:'vocabulary',version,status:'stable',description:'Controlled logical event consumer classes.',source:'registry/events/consumers.json',phase:13,introducedIn:version,tags:['events','consumer','vocabulary'],relationships:[{type:'implements',target:'events.eventRegistryStandard',description:'Controlled consumer keys.'}],permissions:[],events:[],managedBy:'events-sync'}
);
const slugFor=id=>id.split('.').pop().replace(/([a-z0-9])([A-Z])/g,'$1-$2').toLowerCase();
for(const s of schemas)registry.items.push({id:s.$id,name:s.name,domain:'events',type:'schema',version:s.version,status:s.status,description:s.description,source:`registry/events/definitions/${slugFor(s.$id)}.json`,phase:s.introducedPhase??13,introducedIn:s.version,tags:['events','schema',s.category],relationships:s.relationships??[],permissions:[],events:[],managedBy:'events-sync'});
for(const e of events)registry.items.push({id:e.eventKey,name:e.name,domain:'events',type:'event',version:e.version,status:e.status,description:e.description,source:`registry/events/events/${e.eventKey.replace('.','--')}.json`,phase:e.version==='0.15.0'?14:13,introducedIn:e.version,tags:['event',e.category,e.producerKey,e.webhookEligible?'webhook-eligible':'internal-only'],relationships:e.relationships??[],permissions:[],events:[e.eventKey],managedBy:'events-sync'});
registry.items.sort((a,b)=>a.id.localeCompare(b.id)); fs.writeFileSync(registryPath,JSON.stringify(registry,null,2)+'\n');
for(const rel of ['registry/domains.json','registry/types.json','registry/statuses.json']){const p=path.join(root,rel),d=read(p);d.registryVersion=version;fs.writeFileSync(p,JSON.stringify(d,null,2)+'\n');}
const metaPath=path.join(root,'registry/registry-meta.json');const meta=read(metaPath);Object.assign(meta,{registryVersion:version,eventsIndex:'registry/events/index.json',eventDefinitions:'registry/events/events',eventSupportDefinitions:'registry/events/definitions',eventDefinitionSchema:'registry/events/event-definition.schema.json',eventCategories:'registry/events/categories.json',eventProducers:'registry/events/producers.json',eventConsumers:'registry/events/consumers.json'});fs.writeFileSync(metaPath,JSON.stringify(meta,null,2)+'\n');
const navPath=path.join(root,'registry/portal-navigation.json');const nav=read(navPath);nav.portalVersion=version;nav.registryVersion=version;for(const g of nav.groups??[])for(const it of g.items??[])if(it.id==='events-registry'){it.status='available';it.phase=13;}fs.writeFileSync(navPath,JSON.stringify(nav,null,2)+'\n');
const generated=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(generated.status!==0)process.exit(generated.status??1);
console.log(`Synchronized ${events.length} canonical events and ${schemas.length} support schemas.`);
