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
const index=read('registry/accessibility/index.json');
const categories=read('registry/accessibility/categories.json');
const uiTypes=read('registry/accessibility/ui-types.json');
const methods=read('registry/accessibility/verification-methods.json');
const surfaces=read('registry/accessibility/surface-mapping.json');
const audit=read('registry/accessibility/portal-audit.json');
const registry=read('registry/registry.json');
const severity=read('registry/security/severity-levels.json');
const search=read('registry/search/search-index.json');
const rel=read('registry/relationships/relationship-index.json');
const diff=read('registry/diff/release-index.json');
const compat=read('registry/compatibility/index.json');
const release=read('registry/changelog/releases/0.32.0.json');
const ids=new Set(registry.items.map(x=>x.id));
const categoryIds=new Set(categories.categories.map(x=>x.id));
const uiIds=new Set(uiTypes.types.map(x=>x.id));
const methodIds=new Set(methods.methods.map(x=>x.id));
const severityIds=new Set(severity.levels.map(x=>x.id));

ok('Version is 0.32.0',version==='0.32.0',version);
ok('Accessibility index version',index.registryVersion===version,index.registryVersion);
ok('44 accessibility controls',index.controls.length===44,String(index.controls.length));
ok('14 accessibility categories',categories.categories.length===14,String(categories.categories.length));
ok('All controls explicitly require manual review',index.manualReviewCount===44,String(index.manualReviewCount));
ok('UI type vocabulary present',uiTypes.types.length>=20,String(uiTypes.types.length));
ok('Verification vocabulary present',methods.methods.length>=8,String(methods.methods.length));

const seen=new Set();
for(const c of index.controls){
  ok(`Control ID syntax ${c.controlId}`,/^ACC-[A-Z]+-[0-9]{3}$/.test(c.controlId),c.controlId);
  ok(`Unique control ${c.controlId}`,!seen.has(c.controlId));seen.add(c.controlId);
  ok(`Category ${c.controlId}`,categoryIds.has(c.category),c.category);
  ok(`Severity ${c.controlId}`,severityIds.has(c.severity),c.severity);
  ok(`Requirement ${c.controlId}`,Boolean(c.requirement?.trim()));
  ok(`Rationale ${c.controlId}`,Boolean(c.rationale?.trim()));
  ok(`Applicability ${c.controlId}`,Array.isArray(c.applicability)&&c.applicability.length>0);
  ok(`UI types ${c.controlId}`,Array.isArray(c.affectedUiTypes)&&c.affectedUiTypes.length>0&&c.affectedUiTypes.every(x=>uiIds.has(x)),(c.affectedUiTypes??[]).join(','));
  ok(`Verification ${c.controlId}`,Array.isArray(c.verificationMethods)&&c.verificationMethods.length>0&&c.verificationMethods.every(x=>methodIds.has(x)),(c.verificationMethods??[]).join(','));
  ok(`Manual review flag ${c.controlId}`,typeof c.manualReviewRequired==='boolean');
  for(const ref of [...(c.relatedCmsEditorTypes??[]),...(c.relatedBlocks??[]),...(c.relatedFields??[]),...(c.relatedRegistryIds??[])]) ok(`Reference ${c.controlId} -> ${ref}`,ids.has(ref),ref);
}
ok('No duplicate accessibility controls',seen.size===44,String(seen.size));

const required=['ACC-SEM-001','ACC-HEAD-001','ACC-LAND-001','ACC-NAME-001','ACC-ARIA-001','ACC-FORM-001','ACC-FORM-003','ACC-KBD-001','ACC-FOCUS-001','ACC-FOCUS-002','ACC-SKIP-001','ACC-DLG-001','ACC-DRAWER-001','ACC-MENU-001','ACC-TABLE-001','ACC-DRAG-001','ACC-RTE-001','ACC-IMG-001','ACC-MEDIA-001','ACC-MEDIA-002','ACC-CONTRAST-001','ACC-REFLOW-001','ACC-TOUCH-001','ACC-MOTION-001','ACC-STATUS-001','ACC-LIVE-001','ACC-LOAD-001','ACC-FILTER-001','ACC-PALETTE-001','ACC-CODE-001','ACC-COPY-001','ACC-CHART-001','ACC-CHECKOUT-001','ACC-AUTH-001','ACC-CMS-001','ACC-ADMIN-001'];
for(const id of required)ok(`Required control ${id}`,seen.has(id));

const surfaceIds=new Set(surfaces.surfaces.map(x=>x.surfaceId));
for(const id of ['public-site','customer-cms','admin','contract-portal'])ok(`Surface ${id}`,surfaceIds.has(id));
for(const s of surfaces.surfaces){ok(`Surface controls ${s.surfaceId}`,s.controlIds.length>0&&s.controlIds.every(x=>seen.has(x)));}

ok('Portal audit passes',audit.overallStatus==='pass',audit.overallStatus);
ok('Portal audit has 16 passed checks',audit.passed===16,String(audit.passed));
ok('Portal audit has no failures',audit.failed===0,String(audit.failed));
ok('Portal audit has no falsely omitted checks',audit.notRun===0,String(audit.notRun));
ok('Portal audit results all pass',audit.checks.length===16&&audit.checks.every(x=>x.result==='pass'));
const sourceKeyboard=audit.checks.find(x=>x.checkId==='PORTAL-A11Y-015');
const sourceReflow=audit.checks.find(x=>x.checkId==='PORTAL-A11Y-016');
ok('Keyboard review discloses managed Chromium limitation',sourceKeyboard?.reviewType==='manual-source-keyboard-review'&&/URLBlocklist/.test(sourceKeyboard?.evidence??''));
ok('Reflow review discloses managed Chromium limitation',sourceReflow?.reviewType==='manual-source-reflow-review'&&/managed Chromium|URLBlocklist/.test(sourceReflow?.evidence??''));

const a11yItems=registry.items.filter(x=>x.domain==='accessibility');
ok('Accessibility Registry item count',a11yItems.length===58,String(a11yItems.length));
ok('Accessibility Registry control items',a11yItems.filter(x=>x.type==='accessibility-control').length===44,String(a11yItems.filter(x=>x.type==='accessibility-control').length));
ok('No duplicate Registry IDs',registry.items.length===new Set(registry.items.map(x=>x.id)).size);
for(const item of a11yItems)ok(`Accessibility source ${item.id}`,exists(item.source),item.source);

const generated=(await import(`${pathToFileURL(path.join(root,'js/generated-accessibility.js')).href}?v=${Date.now()}`)).GENERATED_ACCESSIBILITY;
ok('Generated Accessibility version',generated.registryVersion===version,generated.registryVersion);
ok('Generated control count',generated.index.controls.length===44,String(generated.index.controls.length));
for(const [relPath,hash] of Object.entries(generated.sourceHashes??{}))ok(`Accessibility fallback hash ${relPath}`,exists(relPath)&&sha(fs.readFileSync(path.join(root,relPath)))===hash,relPath);

const routes=fs.readFileSync(path.join(root,'js/routes.js'),'utf8');
const router=fs.readFileSync(path.join(root,'js/router.js'),'utf8');
const pages=fs.readFileSync(path.join(root,'js/accessibility-pages.js'),'utf8');
const engine=fs.readFileSync(path.join(root,'js/accessibility-registry-engine.js'),'utf8');
const app=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const html404=fs.readFileSync(path.join(root,'404.html'),'utf8');
const reset=fs.readFileSync(path.join(root,'css/reset.css'),'utf8');
const css=fs.readFileSync(path.join(root,'css/accessibility.css'),'utf8');
const standard=fs.readFileSync(path.join(root,'standards/39-accessibility-standard.md'),'utf8');
ok('Accessibility route available',routes.includes('/standards/accessibility')&&routes.includes('phase: 31')&&routes.includes('status: "available"'));
ok('Accessibility lazy route loader',router.includes('loadAccessibilityRoute')&&router.includes("import('./accessibility-pages.js')"));
ok('Accessibility filters rendered',pages.includes('Category')&&pages.includes('Severity')&&pages.includes('UI type')&&pages.includes('Verification')&&pages.includes('Manual review'));
ok('Accessibility audit view rendered',pages.includes('Evidence-based portal audit'));
ok('Raw Accessibility JSON rendered',pages.includes('Raw machine-readable JSON'));
ok('Accessibility local fallback engine',engine.includes('GENERATED_ACCESSIBILITY'));
ok('Accessibility CSS included',html.includes('./css/accessibility.css')&&html404.includes('./css/accessibility.css'));
ok('404 current version',html404.includes(`v${version}`));
ok('Skip link present',html.includes('class="skip-link"')&&html.includes('href="#main-content"'));
ok('Main content focus target',html.includes('id="main-content" tabindex="-1"'));
ok('Route announcer live region',html.includes('data-route-announcer')&&html.includes('aria-live="polite"'));
ok('Search dialog modal semantics',html.includes('role="dialog"')&&html.includes('aria-modal="true"'));
ok('Visible focus treatment',reset.includes(':focus-visible'));
ok('Reduced-motion handling',reset.includes('prefers-reduced-motion: reduce'));
ok('Mobile drawer Escape support',app.includes('event.key === "Escape"'));
ok('Mobile drawer Tab containment',app.includes('event.key === "Tab"'));
ok('Mobile drawer focus restoration',app.includes('sidebarPreviouslyFocused'));
ok('Accessibility CSS light-only',!css.includes('prefers-color-scheme: dark'));
ok('Accessibility CSS has no backdrop-filter',!css.includes('backdrop-filter'));
for(const term of ['semantic HTML','keyboard','focus','dialogs','drawers','menus','tables','drag','rich text','ALT','captions','contrast','reflow','touch','reduced motion','live regions','skip','ARIA','charts','checkout','authentication','Customer CMS','NEXT F Admin'])ok(`Standard covers ${term}`,standard.toLowerCase().includes(term.toLowerCase()),term);

ok('Search version current',search.registryVersion===version,search.registryVersion);
const searchA11y=search.documents.filter(x=>x.domain==='accessibility');
ok('Search indexes Accessibility',searchA11y.length>=58,String(searchA11y.length));
ok('Search indexes accessibility controls',search.documents.some(x=>x.id?.includes('ACC-')||x.machineId?.includes('ACC-')||x.title?.includes('ACC-')||x.description?.includes('Accessibility')));
ok('Relationships version current',rel.registryVersion===version,rel.registryVersion);
ok('Relationships include 58 accessibility nodes',rel.nodes.filter(x=>x.domain==='accessibility').length===58,String(rel.nodes.filter(x=>x.domain==='accessibility').length));
ok('Accessibility control relationships exist',rel.edges.some(x=>String(x.source).startsWith('accessibility.control.')&&['appliesTo','references','implements'].includes(x.type)));
const diffRelease=diff.releases.find(x=>x.version==='0.32.0');
ok('V0.32.0 exact Diff',diffRelease?.availability==='exact',diffRelease?.availability??'missing');
ok('V0.32.0 Diff matches current Registry SHA',diffRelease?.registrySha256===sha(fs.readFileSync(path.join(root,'registry/registry.json'))),diffRelease?.registrySha256??'missing');
ok('Compatibility targets 0.32.0',compat.targetContractVersion===version,compat.targetContractVersion);
ok('Phase 31 Changelog version',release.phase===31&&release.version==='0.32.0');
ok('Phase 31 release complete',release.recordCompleteness==='complete',release.recordCompleteness);
ok('Phase 31 release exact evidence',release.provenance?.exactRegistrySnapshotAvailable===true);
ok('Phase 31 remains non-production',release.support?.productionEligible===false);
const entries=(release.sections??[]).flatMap(x=>x.entries??[]);ok('Phase 31 has 8 evidence-backed changes',entries.length===8,String(entries.length));

let jsonCount=0;for(const base of ['registry','examples','checks']){const start=path.join(root,base);if(!fs.existsSync(start))continue;const walk=dir=>{for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(e.name.endsWith('.json')){jsonCount++;try{JSON.parse(fs.readFileSync(p,'utf8'));pass.push(`JSON ${path.relative(root,p)}`);}catch(err){fail.push(`JSON ${path.relative(root,p)}: ${err.message}`);}}}};walk(start);}
for(const item of registry.items)if(item.source)ok(`Registry source ${item.id}`,exists(item.source),item.source);
for(const f of ['js/accessibility-registry-engine.js','js/accessibility-pages.js','scripts/sync-accessibility-registry.mjs','scripts/audit-portal-accessibility.mjs','scripts/validate-phase-31.mjs','scripts/smoke-phase-31.mjs'])if(exists(f)){const r=spawnSync(process.execPath,['--check',path.join(root,f)],{encoding:'utf8'});ok(`Syntax ${f}`,r.status===0,(r.stderr||'').trim());}
for(const relHtml of ['index.html','404.html']){const text=fs.readFileSync(path.join(root,relHtml),'utf8');const htmlIds=[...text.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);ok(`Duplicate IDs ${relHtml}`,htmlIds.length===new Set(htmlIds).size);}

console.log(`NEXT F Contracts Phase 31 validation\nVersion: ${version}\nPasses: ${pass.length}\nFailures: ${fail.length}\nAccessibility controls: ${index.controls.length}\nAccessibility Registry items: ${a11yItems.length}\nPortal audit checks: ${audit.checks.length}\nRegistry items: ${registry.items.length}\nSearch documents: ${search.documents.length}\nRelationship nodes: ${rel.nodes.length}\nRelationship edges: ${rel.edges.length}\nJSON files checked: ${jsonCount}`);
if(fail.length){console.error('\nFailures:\n'+fail.map(x=>`- ${x}`).join('\n'));process.exit(1);}console.log('\nPASS - Accessibility Standards satisfy the Phase 31 acceptance model.');
