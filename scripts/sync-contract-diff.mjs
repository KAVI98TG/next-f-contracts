import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import zlib from 'node:zlib';
import { spawnSync } from 'node:child_process';
import { pipeline } from 'node:stream/promises';
import { keepConsumerSnapshot, pruneSnapshotStore } from './lib/diff-snapshot-store.mjs';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=(rel)=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const write=(rel,obj,compact=false)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,compact?JSON.stringify(obj):JSON.stringify(obj,null,2)+'\n');};
const sha=(buf)=>crypto.createHash('sha256').update(buf).digest('hex');

function appendSnapshotsStreaming(rel,additions,hasExistingSnapshots){
 const entries=Object.entries(additions);if(!entries.length)return;
 const p=path.join(root,rel),fd=fs.openSync(p,'r+');
 try{
  const size=fs.fstatSync(fd).size,head=Buffer.alloc(Math.min(160,size)),tail=Buffer.alloc(2);
  fs.readSync(fd,head,0,head.length,0);fs.readSync(fd,tail,0,2,size-2);
  if(!head.toString('utf8').includes(`"registryVersion":${JSON.stringify(version)}`)||tail.toString('utf8')!=='}}')throw new Error('Diff snapshot store has an unsupported envelope.');
  fs.ftruncateSync(fd,size-2);let position=size-2;
  for(const [key,value] of entries){const chunk=`${hasExistingSnapshots||position>size-2?',':''}${JSON.stringify(key)}:${JSON.stringify(value)}`;position+=fs.writeSync(fd,chunk,position,'utf8');hasExistingSnapshots=true;}
  fs.writeSync(fd,'}}',position,'utf8');
 }finally{fs.closeSync(fd);}
}
const canonical=(obj)=>Buffer.from(JSON.stringify(obj,Object.keys(obj).sort()));
const stable=(obj)=>Buffer.from(JSON.stringify(sortDeep(obj)));
function sortDeep(v){if(Array.isArray(v))return v.map(sortDeep);if(v&&typeof v==='object'){return Object.fromEntries(Object.keys(v).sort().map(k=>[k,sortDeep(v[k])]));}return v;}
const DROP=new Set(['description','purpose','helpText','notes','note','examples','example','validExamples','invalidExamples','implementationNotes','developerNotes','rationale','summaryText','displayDescription','longDescription','shortDescription','copy','emptyState','loadingState','errorState']);
function compactSemantic(v){if(Array.isArray(v))return v.map(compactSemantic);if(v&&typeof v==='object'){const out={};for(const [k,val] of Object.entries(v)){if(DROP.has(k)||k.startsWith('example'))continue;out[k]=compactSemantic(val);}return out;}return v;}

// Current-version controlled vocabularies.
for(const rel of ['registry/domains.json','registry/types.json','registry/statuses.json']){const d=read(rel);d.registryVersion=version;write(rel,d);}
const domains=read('registry/domains.json');
if(!domains.domains.some(x=>x.id==='diff'))domains.domains.push({id:'diff',label:'Contract Diff',description:'Exact release comparison, structural change classification, compatibility impact and version recommendation metadata.'});
domains.domains.sort((a,b)=>a.id.localeCompare(b.id));domains.registryVersion=version;write('registry/domains.json',domains);

const nav=read('registry/portal-navigation.json');nav.portalVersion=version;
const overview=nav.groups.find(x=>x.id==='overview');if(overview){const base=overview.items.find(x=>x.id==='overview');if(base){base.phase=Math.max(Number(base.phase)||0,25);base.status='current';}}
const activePhase=Number(overview?.items?.find(x=>x.id==='overview')?.phase)||25;
const lifecycle=nav.groups.find(x=>x.id==='lifecycle');
if(lifecycle&&!lifecycle.items.some(x=>x.id==='lifecycle-diff'))lifecycle.items.splice(2,0,{id:'lifecycle-diff',path:'/lifecycle/diff',label:'Contract Diff',phase:25,status:'available'});
if(lifecycle){const mig=lifecycle.items.find(x=>x.id==='lifecycle-migrations');if(mig&&mig.phase===25)mig.phase=26;}
write('registry/portal-navigation.json',nav);

const meta=read('registry/registry-meta.json');meta.registryVersion=version;meta.contractDiffReleaseIndex='registry/diff/release-index.json';meta.contractDiffManifests='registry/diff/release-manifests.json';meta.contractDiffSnapshots='registry/diff/snapshots.json';meta.contractDiffChangeTypes='registry/diff/change-types.json';meta.contractDiffImpactLevels='registry/diff/impact-levels.json';meta.contractDiffClassificationRules='registry/diff/classification-rules.json';meta.contractDiffRoute='#/lifecycle/diff';write('registry/registry-meta.json',meta);

const registry=read('registry/registry.json');registry.registryVersion=version;registry.items=registry.items.filter(x=>x.managedBy!=='diff-sync');
const supportSchemas=['releaseDescriptor','itemSnapshot','pathChange','contractChange','releaseComparison','breakingRule','versionRecommendation','itemHistory'];
const newItems=[
 {id:'diff.contractDiffStandard',name:'Contract Diff Standard',type:'standard',source:'standards/33-contract-diff-standard.md',description:'Exact release comparison, change classification, conservative compatibility impact and semantic-version recommendation rules.',tags:['diff','versions','breaking','compatibility','history'],relationships:[{type:'uses',target:'registry.index',description:'Release comparison is keyed by canonical Registry IDs.'},{type:'uses',target:'relationships.relationshipIndex',description:'Relationship changes use canonical relationship semantics.'}]},
 {id:'diff.changeTypes',name:'Contract Diff Change Types',type:'vocabulary',source:'registry/diff/change-types.json',description:'Controlled machine identifiers for item, field, enum, relationship, Permission, Event and validation changes.',tags:['diff','change-types','vocabulary'],relationships:[{type:'implements',target:'diff.contractDiffStandard',description:'Change types follow the Contract Diff Standard.'}]},
 {id:'diff.impactLevels',name:'Contract Diff Impact Levels',type:'vocabulary',source:'registry/diff/impact-levels.json',description:'Controlled compatibility impact levels used by the Diff classifier.',tags:['diff','impact','breaking','vocabulary'],relationships:[{type:'implements',target:'diff.contractDiffStandard',description:'Impact levels follow the Contract Diff Standard.'}]},
 {id:'diff.classificationRules',name:'Contract Diff Classification Rules',type:'machine-registry',source:'registry/diff/classification-rules.json',description:'Conservative structural rules mapping detected changes to compatibility impacts.',tags:['diff','classification','breaking'],relationships:[{type:'implements',target:'diff.contractDiffStandard',description:'Automated classification follows the Contract Diff Standard.'}]},
 {id:'diff.releaseIndex',name:'Contract Diff Release Index',type:'machine-registry',source:'registry/diff/release-index.json',description:'Available exact historical Contract Registry releases and their provenance.',tags:['diff','releases','history','provenance'],relationships:[{type:'implements',target:'diff.contractDiffStandard',description:'Release provenance follows the Contract Diff Standard.'}]},
 {id:'diff.releaseManifests',name:'Contract Diff Release Manifests',type:'machine-registry',source:'registry/diff/release-manifests.json',description:'Content-addressed per-release Registry item manifests for deterministic comparisons.',tags:['diff','manifests','history'],relationships:[{type:'generatedFrom',target:'registry.index',description:'Each current release manifest is derived from the canonical Registry.'}]}
];
for(const sid of supportSchemas){const data=read(`registry/diff/definitions/${sid}.json`);newItems.push({id:data.$id,name:data.name,type:'schema',source:`registry/diff/definitions/${sid}.json`,description:data.description,tags:['diff','schema','history'],relationships:[{type:'implements',target:'diff.contractDiffStandard',description:'Diff support schema follows the Contract Diff Standard.'}]});}
for(const item of newItems)registry.items.push({...item,domain:'diff',version,status:'stable',phase:25,introducedIn:'0.26.0',permissions:[],events:[],managedBy:'diff-sync'});
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);

// Update current exact release snapshot while preserving imported historical releases.
const releaseIndex=read('registry/diff/release-index.json');releaseIndex.registryVersion=version;
const manifestsDoc=read('registry/diff/release-manifests.json');manifestsDoc.registryVersion=version;
const pruneResult=await pruneSnapshotStore(path.join(root,'registry/diff/snapshots.json'),version,keepConsumerSnapshot);
const availableSnapshotHashes=new Set(pruneResult.keptHashes);
const existingSnapshotHashes=new Set();for(const manifest of Object.values(manifestsDoc.manifests??{})){for(const item of Object.values(manifest.items??{})){if(item.snapshotHash)existingSnapshotHashes.add(item.snapshotHash);}}
const newSnapshots={};
const items={};
for(const item of registry.items){
 const src=item.source;const abs=src?path.join(root,src):null;let sourceHash=null,snapshotHash=null,sourceFormat='missing';
 const association={permissions:[...(item.permissions??[])].sort(),events:[...(item.events??[])].sort(),relationships:[...(item.relationships??[])].map(r=>({type:r.type,target:r.target})).sort((a,b)=>`${a.type}|${a.target}`.localeCompare(`${b.type}|${b.target}`))};
 const associationHash=sha(stable(association));
 if(['diff.releaseIndex','diff.releaseManifests'].includes(item.id)){sourceFormat='generated-aggregate';sourceHash=null;snapshotHash=null;}
 else if(abs&&fs.existsSync(abs)){
   const buf=fs.readFileSync(abs);sourceHash=sha(buf);
   if(src.toLowerCase().endsWith('.json')){try{const obj=JSON.parse(buf);const sem=compactSemantic(obj);sem._registry=association;snapshotHash=sha(stable(sem));sourceFormat='json-compact';if(!availableSnapshotHashes.has(snapshotHash)&&!newSnapshots[snapshotHash])newSnapshots[snapshotHash]={itemId:item.id,source:src,sourceHash,data:sem};}catch{snapshotHash=sourceHash;sourceFormat='text-hash';}}
   else {snapshotHash=sourceHash;sourceFormat='text-hash';}
 }
 items[item.id]={id:item.id,name:item.name??'',domain:item.domain??'',type:item.type??'',version:item.version??'',status:item.status??'',source:src??null,phase:item.phase??null,introducedIn:item.introducedIn??null,sourceFormat,sourceHash,snapshotHash,associationHash};
}
const registryBuffer=fs.readFileSync(path.join(root,'registry/registry.json'));
manifestsDoc.manifests[version]={version,phase:activePhase,registrySha256:sha(registryBuffer),itemCount:Object.keys(items).length,items};
let currentRelease=releaseIndex.releases.find(x=>x.version===version);
const currentDescriptor={version,phase:activePhase,available:true,availability:'exact',itemCount:Object.keys(items).length,registrySha256:sha(registryBuffer),sourceType:'current-repository',sourceReference:'registry/registry.json',notes:`Exact snapshot generated from the current Phase ${activePhase} repository.`};
if(currentRelease)Object.assign(currentRelease,currentDescriptor);else releaseIndex.releases.push(currentDescriptor);
releaseIndex.releases.sort((a,b)=>{const pa=a.version.split('.').map(Number),pb=b.version.split('.').map(Number);for(let i=0;i<3;i++){if(pa[i]!==pb[i])return pa[i]-pb[i];}return 0;});
write('registry/diff/release-index.json',releaseIndex);write('registry/diff/release-manifests.json',manifestsDoc,true);appendSnapshotsStreaming('registry/diff/snapshots.json',newSnapshots,existingSnapshotHashes.size>0);

// Adjacent exact release summaries. Hash differences are intentionally conservative.
const exact=releaseIndex.releases.filter(x=>x.available&&manifestsDoc.manifests[x.version]);
const summaries=[];
for(let i=1;i<exact.length;i++){
 const a=exact[i-1],b=exact[i],ma=manifestsDoc.manifests[a.version].items,mb=manifestsDoc.manifests[b.version].items;const ids=new Set([...Object.keys(ma),...Object.keys(mb)]);let added=0,removed=0,modified=0,unchanged=0;
 for(const id of ids){if(!ma[id])added++;else if(!mb[id])removed++;else if(ma[id].sourceHash!==mb[id].sourceHash||ma[id].snapshotHash!==mb[id].snapshotHash||ma[id].associationHash!==mb[id].associationHash||ma[id].status!==mb[id].status||ma[id].version!==mb[id].version)modified++;else unchanged++;}
 summaries.push({fromVersion:a.version,toVersion:b.version,added,removed,modified,unchanged,totalCompared:ids.size});
}
write('registry/diff/release-summaries.json',{registryVersion:version,summaries});

// Gzip/Base64 generated fallback keeps file:// review possible without embedding 30MB of raw JSON text.
async function gz64(rel){const source=path.join(root,rel),tmp=path.join(root,`.tmp-${path.basename(rel)}.gz`);await pipeline(fs.createReadStream(source),zlib.createGzip({level:9}),fs.createWriteStream(tmp));const compressed=fs.readFileSync(tmp);fs.unlinkSync(tmp);return {sha256:sha(fs.readFileSync(source)),gzipBase64:compressed.toString('base64')};}
const [releaseIndexPayload,releaseManifestsPayload,snapshotsPayload]=await Promise.all([gz64('registry/diff/release-index.json'),gz64('registry/diff/release-manifests.json'),gz64('registry/diff/snapshots.json')]);
const payload={releaseIndex:releaseIndexPayload,releaseManifests:releaseManifestsPayload,snapshots:snapshotsPayload};
const small={changeTypes:read('registry/diff/change-types.json'),impactLevels:read('registry/diff/impact-levels.json'),classificationRules:read('registry/diff/classification-rules.json'),config:read('registry/diff/diff-config.json'),summaries:read('registry/diff/release-summaries.json')};
fs.writeFileSync(path.join(root,'js/generated-diff.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\nexport const GENERATED_DIFF_COMPRESSED = ${JSON.stringify(payload)};\nexport const GENERATED_DIFF_SMALL = ${JSON.stringify(small)};\n`);

const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
console.log(`Synchronized Contract Diff: ${releaseIndex.releases.filter(x=>x.available).length} exact releases, ${existingSnapshotHashes.size+Object.keys(newSnapshots).length} referenced snapshots, ${pruneResult.dropped} tooling snapshots pruned, ${registry.items.length} Registry items.`);
