import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

const root=process.cwd(),pass=[],fail=[];
const ok=(name,condition,detail='')=>condition?pass.push(name):fail.push(`${name}${detail?`: ${detail}`:''}`);
const read=rel=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const exists=rel=>fs.existsSync(path.join(root,rel));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const index=read('registry/privacy/index.json');
const classes=read('registry/privacy/classifications.json');
const qualifiers=read('registry/privacy/qualifiers.json');
const eligibility=read('registry/privacy/eligibility-values.json');
const retention=read('registry/privacy/retention-classes.json');
const redaction=read('registry/privacy/redaction-behaviors.json');
const deletion=read('registry/privacy/deletion-behaviors.json');
const consent=read('registry/privacy/consent-relevance.json');
const exportSensitivity=read('registry/privacy/export-sensitivity.json');
const operations=read('registry/privacy/operations.json');
const boundaries=read('registry/privacy/consent-boundaries.json');
const fieldHandling=read('registry/privacy/field-handling.json');
const coverage=read('registry/privacy/coverage.json');
const registry=read('registry/registry.json');
const ids=new Set(registry.items.map(x=>x.id));
const byId=new Map(registry.items.map(x=>[x.id,x]));
const classIds=new Set(classes.classes.map(x=>x.id));
const qualifierIds=new Set(qualifiers.qualifiers.map(x=>x.id));
const eligibilityIds=new Set(eligibility.values.map(x=>x.id));
const retentionIds=new Set(retention.classes.map(x=>x.id));
const redactionIds=new Set(redaction.values.map(x=>x.id));
const deletionIds=new Set(deletion.values.map(x=>x.id));
const consentIds=new Set(consent.values.map(x=>x.id));
const exportIds=new Set(exportSensitivity.values.map(x=>x.id));
const securityControls=new Set(registry.items.filter(x=>x.controlId).map(x=>x.controlId));

ok('Version is 0.31.0',version==='0.31.0',version);
ok('Privacy registry version',index.registryVersion===version,index.registryVersion);
ok('Primary classes exact',classes.classes.map(x=>x.id).join('|')==='public|internal|personal|sensitive|secret');
ok('Qualifiers exact',qualifiers.qualifiers.map(x=>x.id).join('|')==='financial|authentication|tracking|content|system-metadata');
ok('Primary sensitivity distinct from qualifiers',!classes.classes.some(x=>qualifierIds.has(x.id)));
ok('Flow eligibility exact',eligibility.values.map(x=>x.id).join('|')==='allowed|conditional|redacted-only|prohibited');
ok('54 explicit field handling records',fieldHandling.entries.length===54,String(fieldHandling.entries.length));
ok('Retention classes present',retention.classes.length>=8,String(retention.classes.length));
ok('Future privacy operations present',operations.operations.length===7,String(operations.operations.length));
ok('No runtime privacy workflow fabricated',operations.operations.every(x=>x.implementedRuntime===false));

const seen=new Set(),seenTargetField=new Set();
for(const row of fieldHandling.entries){
  ok(`Handling ID syntax ${row.handlingId}`,/^PRIV-FLD-[0-9]{3}$/.test(row.handlingId));
  ok(`Unique handling ID ${row.handlingId}`,!seen.has(row.handlingId));seen.add(row.handlingId);
  const key=`${row.targetId}::${row.fieldPath}`;ok(`Unique target field ${key}`,!seenTargetField.has(key));seenTargetField.add(key);
  ok(`Target Registry item ${row.handlingId}`,ids.has(row.targetId),row.targetId);
  const item=byId.get(row.targetId);let source=null;try{if(item?.source&&exists(item.source)&&item.source.endsWith('.json'))source=read(item.source);}catch{}
  const fieldKey=String(row.fieldPath).replace(/^fields\./,'');
  ok(`Target field exists ${row.handlingId}`,Boolean(source?.fields?.some(f=>f?.key===fieldKey)),`${row.targetId}.${row.fieldPath}`);
  ok(`Classification ${row.handlingId}`,classIds.has(row.classification),row.classification);
  ok(`Qualifiers ${row.handlingId}`,(row.qualifiers??[]).every(x=>qualifierIds.has(x)));
  ok(`Retention ${row.handlingId}`,retentionIds.has(row.retentionClass),row.retentionClass);
  ok(`Redaction ${row.handlingId}`,redactionIds.has(row.redactionBehavior),row.redactionBehavior);
  ok(`Deletion ${row.handlingId}`,deletionIds.has(row.deletionBehavior),row.deletionBehavior);
  ok(`Consent relevance ${row.handlingId}`,consentIds.has(row.consentRelevance),row.consentRelevance);
  ok(`Export sensitivity ${row.handlingId}`,exportIds.has(row.exportSensitivity),row.exportSensitivity);
  for(const k of ['logEligibility','eventEligibility','webhookEligibility','analyticsEligibility'])ok(`${k} ${row.handlingId}`,eligibilityIds.has(row[k]),row[k]);
  ok(`Purpose ${row.handlingId}`,Boolean(row.purpose?.trim()));
  ok(`Security references ${row.handlingId}`,(row.relatedSecurityControls??[]).every(x=>securityControls.has(x)),(row.relatedSecurityControls??[]).join(','));
  if(row.classification==='secret'){
    ok(`Secret not public ${row.handlingId}`,row.publicDeliveryEligible===false);
    ok(`Secret not analytics ${row.handlingId}`,row.analyticsEligibility==='prohibited');
    ok(`Secret not logged ${row.handlingId}`,row.logEligibility==='prohibited');
    ok(`Secret not Event/Webhook ${row.handlingId}`,row.eventEligibility==='prohibited'&&row.webhookEligibility==='prohibited');
  }
  if(['personal','sensitive'].includes(row.classification))ok(`Private by default ${row.handlingId}`,row.publicDeliveryEligible===false);
}
ok('No duplicate handling IDs',seen.size===fieldHandling.entries.length);
ok('Public class is exercised',fieldHandling.entries.some(x=>x.classification==='public'&&x.publicDeliveryEligible===true));
ok('Secret class is exercised',fieldHandling.entries.some(x=>x.classification==='secret'));
ok('Personal class is exercised',fieldHandling.entries.some(x=>x.classification==='personal'));
ok('Sensitive class is exercised',fieldHandling.entries.some(x=>x.classification==='sensitive'));
ok('Internal class is exercised',fieldHandling.entries.some(x=>x.classification==='internal'));

const requiredAreas=['authentication','forms-leads','marketing','integrations','commerce','payments','webhooks','audit'];
for(const area of requiredAreas){const row=coverage.areas.find(x=>x.area===area);ok(`High-risk coverage ${area}`,Boolean(row)&&row.status==='covered');if(row){ok(`Coverage targets ${area}`,(row.targetRegistryIds??[]).length>0&&(row.targetRegistryIds??[]).every(x=>ids.has(x)));ok(`Coverage field rules ${area}`,(row.fieldHandlingIds??[]).every(x=>seen.has(x)));}}
ok('Eight required high-risk areas',coverage.areas.filter(x=>requiredAreas.includes(x.area)).length===8);

for(const id of ['analytics-vs-business-purpose','unknown-optional-not-granted','security-not-weakened','no-raw-form-tracking','hashed-not-anonymous'])ok(`Consent boundary ${id}`,boundaries.rules.some(x=>x.id===id));
ok('Business-purpose and analytics are distinct consent vocabulary',consentIds.has('business-purpose')&&consentIds.has('analytics'));

const privacyItems=registry.items.filter(x=>x.domain==='privacy');
ok('Privacy Registry item count',privacyItems.length===82,String(privacyItems.length));
ok('Privacy data-handling item count',privacyItems.filter(x=>x.type==='data-handling-record').length===54);
ok('Privacy operation item count',privacyItems.filter(x=>x.type==='privacy-operation').length===7);
for(const id of ['privacy.standard','privacy.index','privacy.classifications','privacy.qualifiers','privacy.fieldHandlingIndex','privacy.coverage','privacy.operations','privacy.consentBoundaries'])ok(`Privacy support item ${id}`,ids.has(id));
for(const item of privacyItems)ok(`Privacy source ${item.id}`,exists(item.source),item.source);

const generated=(await import(`${pathToFileURL(path.join(root,'js/generated-privacy.js')).href}?v=${Date.now()}`)).GENERATED_PRIVACY;
ok('Generated Privacy version',generated.registryVersion===version);
ok('Generated Privacy field count',generated.fieldHandling.entries.length===fieldHandling.entries.length);
for(const [rel,hash] of Object.entries(generated.sourceHashes??{}))ok(`Privacy fallback hash ${rel}`,exists(rel)&&sha(fs.readFileSync(path.join(root,rel)))===hash,rel);

const route=fs.readFileSync(path.join(root,'js/routes.js'),'utf8');
const router=fs.readFileSync(path.join(root,'js/router.js'),'utf8');
const pages=fs.readFileSync(path.join(root,'js/privacy-pages.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const html404=fs.readFileSync(path.join(root,'404.html'),'utf8');
const css=fs.readFileSync(path.join(root,'css/privacy.css'),'utf8');
const standard=fs.readFileSync(path.join(root,'standards/38-privacy-data-standard.md'),'utf8');
ok('Privacy route Phase 30 available',route.includes('standards-privacy')&&route.includes('Privacy & Data')&&route.includes('phase: 30')&&route.includes('status: "available"'));
ok('Privacy route lazy loader',router.includes('loadPrivacyRoute'));
ok('Privacy field filters',pages.includes('data-privacy-classification')&&pages.includes('data-privacy-qualifier')&&pages.includes('data-privacy-retention')&&pages.includes('data-privacy-consent')&&pages.includes('data-privacy-public')&&pages.includes('data-privacy-redaction')&&pages.includes('data-privacy-flow'));
ok('Privacy raw JSON detail',pages.includes('Raw machine-readable JSON'));
ok('Privacy coverage UI',pages.includes('High-risk coverage'));
ok('Privacy CSS included',html.includes('./css/privacy.css'));
ok('Privacy CSS light-only',!css.includes('prefers-color-scheme: dark'));
ok('Privacy CSS no backdrop blur',!css.includes('backdrop-filter'));
ok('Current fallback release label',html404.includes('v0.31.0'));
for(const term of ['data minimization','purpose limitation','hashed or pseudonymized personal data is not automatically anonymous','raw form payloads','analytics/marketing consent','legal hold','No PAN/CVV storage'])ok(`Privacy standard covers ${term}`,standard.toLowerCase().includes(term.toLowerCase()));

const search=read('registry/search/search-index.json');
const rel=read('registry/relationships/relationship-index.json');
const diff=read('registry/diff/release-index.json');
const compat=read('registry/compatibility/index.json');
const cl=read('registry/changelog/release-index.json');
ok('Search indexes privacy Registry items',(search.documents??[]).filter(x=>x.domain==='privacy').length>=82,String((search.documents??[]).filter(x=>x.domain==='privacy').length));
ok('Search finds field privacy target',(search.documents??[]).some(x=>x.domain==='privacy'&&String(x.searchText??'').includes('forms.submission')));
ok('Relationships include privacy nodes',(rel.nodes??[]).filter(x=>x.domain==='privacy').length>=82,String((rel.nodes??[]).filter(x=>x.domain==='privacy').length));
ok('Relationships include privacy target edges',(rel.edges??[]).some(x=>String(x.source??'').startsWith('privacy.field.')&&x.type==='appliesTo'));
ok('Relationships include Security references',(rel.edges??[]).some(x=>String(x.source??'').startsWith('privacy.field.')&&x.type==='references'&&String(x.target??'').startsWith('security.control.')));
const diffRelease=(diff.releases??[]).find(x=>x.version==='0.31.0');
ok('Diff exact release 0.31.0',Boolean(diffRelease)&&diffRelease.availability==='exact');
ok('Diff snapshot matches current Registry SHA',diffRelease?.registrySha256===sha(fs.readFileSync(path.join(root,'registry/registry.json'))),diffRelease?.registrySha256??'missing');
ok('Compatibility targets 0.31.0',compat.targetContractVersion==='0.31.0',compat.targetContractVersion);
ok('Changelog includes 0.31.0',(cl.releases??[]).some(x=>x.version==='0.31.0'));
const release=read('registry/changelog/releases/0.31.0.json');
ok('Phase 30 release complete',release.recordCompleteness==='complete',release.recordCompleteness);
ok('Phase 30 release non-production',release.support?.productionEligible===false);
ok('Phase 30 release exact evidence',release.provenance?.exactRegistrySnapshotAvailable===true);

// Security consistency: active secret-marked data and privacy secret handling cannot become public.
let secretPublic=0;const walk=(x)=>{if(Array.isArray(x)){x.forEach(walk);return;}if(!x||typeof x!=='object')return;const sens=x.dataSensitivity??x.classification??x.sensitivity;if(['secret','credential','token','signing-secret','encryption-key'].includes(sens)&&(x.publicEligible===true||x.publicDelivery===true))secretPublic++;Object.values(x).forEach(walk);};
const scan=(dir)=>{for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory()){if(p.includes(path.join('registry','diff')))continue;scan(p);}else if(e.name.endsWith('.json')){try{walk(JSON.parse(fs.readFileSync(p,'utf8')));}catch{}}}};scan(path.join(root,'registry'));
ok('No secret-marked active object is public eligible',secretPublic===0,String(secretPublic));

let jsonCount=0;for(const base of ['registry','examples','checks']){const start=path.join(root,base);if(!fs.existsSync(start))continue;const walkJson=dir=>{for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walkJson(p);else if(e.name.endsWith('.json')){jsonCount++;try{JSON.parse(fs.readFileSync(p,'utf8'));pass.push(`JSON ${path.relative(root,p)}`);}catch(err){fail.push(`JSON ${path.relative(root,p)}: ${err.message}`);}}}};walkJson(start);}
for(const item of registry.items)if(item.source)ok(`Registry source ${item.id}`,exists(item.source),item.source);
for(const f of ['js/privacy-registry-engine.js','js/privacy-pages.js','scripts/sync-privacy-registry.mjs','scripts/validate-phase-30.mjs','scripts/smoke-phase-30.mjs'])if(exists(f)){const r=spawnSync(process.execPath,['--check',path.join(root,f)],{encoding:'utf8'});ok(`Syntax ${f}`,r.status===0,(r.stderr||'').trim());}
for(const relHtml of ['index.html','404.html']){const text=fs.readFileSync(path.join(root,relHtml),'utf8');const htmlIds=[...text.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);ok(`Duplicate IDs ${relHtml}`,htmlIds.length===new Set(htmlIds).size);}

console.log(`NEXT F Contracts Phase 30 validation\nVersion: ${version}\nPasses: ${pass.length}\nFailures: ${fail.length}\nPrivacy field rules: ${fieldHandling.entries.length}\nPrivacy Registry items: ${privacyItems.length}\nPrimary classes: ${classes.classes.length}\nHigh-risk coverage areas: ${coverage.areas.length}\nRegistry items: ${registry.items.length}\nSearch documents: ${(search.documents??[]).length}\nRelationship nodes: ${(rel.nodes??[]).length}\nRelationship edges: ${(rel.edges??[]).length}\nJSON files checked: ${jsonCount}`);
if(fail.length){console.error('\nFailures:\n'+fail.map(x=>`- ${x}`).join('\n'));process.exit(1);}console.log('\nPASS - Privacy and Data Classification satisfy the Phase 30 acceptance model.');
