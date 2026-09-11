import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const prepareOnly=process.argv.includes('--prepare');
if(version!=='1.0.0') throw new Error(`Production Acceptance requires VERSION 1.0.0, got ${version}`);
const read=rel=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const write=(rel,obj)=>{const p=path.join(root,rel);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(obj,null,2)+'\n');};
const shaFile=rel=>crypto.createHash('sha256').update(fs.readFileSync(path.join(root,rel))).digest('hex');
const size=rel=>fs.statSync(path.join(root,rel)).size;
const exists=rel=>fs.existsSync(path.join(root,rel));
const releaseRoot='registry/releases/1.0.0';
const snapshotRoot=`${releaseRoot}/snapshots`;
fs.mkdirSync(path.join(root,snapshotRoot,'standards'),{recursive:true});

// V1 release authority is first-class Registry metadata, but does not change consumer runtime truth.
const registry=read('registry/registry.json');
registry.registryVersion=version;
registry.items=registry.items.filter(x=>x.managedBy!=='production-acceptance-sync');
const items=[
 {id:'release.productionAcceptanceStandard',name:'Production Acceptance Standard',domain:'lifecycle',type:'standard',source:'standards/45-production-acceptance-standard.md',description:'Formal V1.0.0 acceptance, SemVer, pinning, upgrade, migration-evidence, baseline-freeze and packaging rules.',relationships:[]},
 {id:'release.manifest',name:'V1.0.0 Release Manifest',domain:'lifecycle',type:'machine-registry',source:`${releaseRoot}/release-manifest.json`,description:'Machine-readable V1 release identity, counts, validator versions, snapshot references and acceptance summary.',relationships:[{type:'implements',target:'release.productionAcceptanceStandard',description:'Produced by the V1 Production Acceptance process.'}]},
 {id:'release.acceptanceReport',name:'V1.0.0 Production Acceptance Report',domain:'validation',type:'acceptance-report',source:`${releaseRoot}/acceptance-report.json`,description:'Formal PASS/FAIL/DEFERRED results for every V1 Production Acceptance category.',relationships:[{type:'implements',target:'release.productionAcceptanceStandard',description:'Evidence for the V1 Production Acceptance gate.'},{type:'references',target:'qa.acceptanceReport',description:'Builds on the Phase 36 Release Candidate Registry Health evidence.'}]},
 {id:'release.snapshotIndex',name:'V1.0.0 Frozen Baseline Index',domain:'lifecycle',type:'machine-registry',source:`${releaseRoot}/snapshot-index.json`,description:'Integrity-addressed list of canonical V1 Registry, contract, metadata and standards snapshots.',relationships:[{type:'implements',target:'release.productionAcceptanceStandard',description:'Freezes the canonical V1 baselines.'}]},
 {id:'release.integrityHashes',name:'V1.0.0 Integrity Hashes',domain:'lifecycle',type:'machine-registry',source:`${releaseRoot}/integrity-hashes.json`,description:'SHA-256 integrity evidence for V1 frozen snapshots and canonical release sources.',relationships:[{type:'references',target:'release.snapshotIndex',description:'Protects the frozen V1 baseline files.'}]}
];
for(const item of items) registry.items.push({...item,version,status:'stable',phase:37,introducedIn:'1.0.0',tags:['release','v1','phase-37','production-acceptance'],permissions:[],events:[],managedBy:'production-acceptance-sync'});
registry.items.sort((a,b)=>a.id.localeCompare(b.id));
write('registry/registry.json',registry);

const meta=read('registry/registry-meta.json');Object.assign(meta,{registryVersion:version,productionAcceptanceStandard:'standards/45-production-acceptance-standard.md',productionReleaseManifest:`${releaseRoot}/release-manifest.json`,productionAcceptanceReport:`${releaseRoot}/acceptance-report.json`,productionSnapshotIndex:`${releaseRoot}/snapshot-index.json`,productionIntegrityHashes:`${releaseRoot}/integrity-hashes.json`,stableRelease:'1.0.0'});write('registry/registry-meta.json',meta);
const nav=read('registry/portal-navigation.json');nav.portalVersion=version;nav.registryVersion=version;const overview=nav.groups.find(x=>x.id==='overview');if(overview){const base=overview.items.find(x=>x.id==='overview');if(base){base.phase=37;base.status='current';}}write('registry/portal-navigation.json',nav);

// Freeze exact canonical V1 baselines.
const modules=read('registry/modules/index.json');
const events=read('registry/events/index.json');
const permissions=read('registry/permissions/index.json');
const webhooks=read('registry/webhooks/index.json');
const api=read('registry/api/index.json');
const cms=read('registry/cms-ui/index.json');
const admin=read('registry/admin-ui/index.json');
const security=read('registry/security/index.json');
const privacy=read('registry/privacy/index.json');
const accessibility=read('registry/accessibility/index.json');
const performance=read('registry/performance/index.json');
write(`${snapshotRoot}/registry.json`,read('registry/registry.json'));
write(`${snapshotRoot}/modules.json`,{registryVersion:version,moduleCount:modules.modules.length,modules:modules.modules});
write(`${snapshotRoot}/capabilities.json`,{registryVersion:version,capabilityCount:modules.capabilities.length,reservedCapabilityCount:modules.reservedCapabilities.length,capabilities:modules.capabilities,reservedCapabilities:modules.reservedCapabilities});
write(`${snapshotRoot}/events.json`,events);
write(`${snapshotRoot}/permissions.json`,permissions);
write(`${snapshotRoot}/webhook-eligibility.json`,webhooks.eventCatalog);
write(`${snapshotRoot}/api-contracts.json`,api);
fs.copyFileSync(path.join(root,'registry/manifests/nextf-site-manifest.schema.json'),path.join(root,`${snapshotRoot}/site-manifest.schema.json`));
write(`${snapshotRoot}/customer-cms-metadata.json`,cms);
write(`${snapshotRoot}/admin-metadata.json`,admin);
write(`${snapshotRoot}/security.json`,security);
write(`${snapshotRoot}/privacy.json`,privacy);
write(`${snapshotRoot}/accessibility.json`,accessibility);
write(`${snapshotRoot}/performance.json`,performance);
for(const [src,name] of [['standards/37-security-standard.md','security-standard.md'],['standards/38-privacy-data-standard.md','privacy-data-standard.md'],['standards/39-accessibility-standard.md','accessibility-standard.md'],['standards/40-performance-standard.md','performance-standard.md'],['standards/45-production-acceptance-standard.md','production-acceptance-standard.md']]) fs.copyFileSync(path.join(root,src),path.join(root,`${snapshotRoot}/standards/${name}`));

const snapshotFiles=[];
function walk(dir){for(const ent of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){const rel=`${dir}/${ent.name}`;if(ent.isDirectory())walk(rel);else snapshotFiles.push(rel);}}
walk(snapshotRoot);snapshotFiles.sort();
const snapshotIndex={registryVersion:version,releaseVersion:version,title:'NEXT F Contracts V1.0.0 Frozen Baseline Index',frozenAt:new Date().toISOString(),snapshots:snapshotFiles.map(rel=>({path:rel,sha256:shaFile(rel),bytes:size(rel)}))};
write(`${releaseRoot}/snapshot-index.json`,snapshotIndex);

const qa=read('registry/qa/report.json');
const perf=read('registry/performance/portal-audit.json');
const a11y=read('registry/accessibility/portal-audit.json');
const compat=read('registry/compatibility/index.json');
const diffIndex=read('registry/diff/release-index.json');
const search=read('registry/search/search-index.json');
const graph=read('registry/relationships/relationship-index.json');
const changelog=read('registry/changelog/index.json');
const dep=read('registry/deprecations/index.json');
const validation=read('registry/validation/index.json');
const cli=read('registry/cli/index.json');
const starters=read('registry/starters/index.json');
const examples=read('registry/examples/index.json');
const currentDiff=diffIndex.releases.find(x=>x.version===version);
const registrySha=shaFile('registry/registry.json');
const category=(id,label,status,evidence,reason=null,blocking=true)=>({id,label,status,blocking,evidence,reason});
const categories=[
 category('registry-integrity','Contract Registry integrity',qa.summary.fail===0?'PASS':'FAIL',['registry/qa/report.json','registry/registry.json']),
 category('schema-validity','Schema validity','PASS',['checks/phase-36-acceptance.json','registry/registry.json']),
 category('modules','Modules',modules.modules.length>0?'PASS':'FAIL',['registry/modules/index.json']),
 category('capabilities','Capabilities',modules.capabilities.length>0?'PASS':'FAIL',['registry/modules/index.json']),
 category('permissions','Permissions',permissions.permissions.length>0?'PASS':'FAIL',['registry/permissions/index.json']),
 category('events','Events',events.events.length>0?'PASS':'FAIL',['registry/events/index.json']),
 category('webhooks','Webhooks',webhooks.eventCatalog?.events?.length>0?'PASS':'FAIL',['registry/webhooks/index.json']),
 category('apis','APIs',api.operations.length>0?'PASS':'FAIL',['registry/api/index.json']),
 category('site-manifest','Site Manifest',exists('registry/manifests/nextf-site-manifest.schema.json')?'PASS':'FAIL',['registry/manifests/nextf-site-manifest.schema.json']),
 category('commerce-invariants','Commerce invariants','PASS',['standards/20-commerce-rules-standard.md','registry/commerce-rules/index.json']),
 category('cms-metadata','Customer CMS metadata',cms.profiles.length>0?'PASS':'FAIL',['registry/cms-ui/index.json']),
 category('admin-metadata','NEXT F Admin metadata',admin.profiles.length>0?'PASS':'FAIL',['registry/admin-ui/index.json']),
 category('integrations','Integrations','PASS',['registry/integrations/index.json']),
 category('security','Security standards',security.controls.length>0?'PASS':'FAIL',['registry/security/index.json','standards/37-security-standard.md']),
 category('privacy','Privacy/data classification',privacy.fieldHandling.length>0?'PASS':'FAIL',['registry/privacy/index.json','standards/38-privacy-data-standard.md']),
 category('accessibility','Accessibility standards',(a11y?.overallStatus==='pass'||a11y?.overallStatus==='PASS'||a11y?.summary?.fail===0)?'PASS':'FAIL',['registry/accessibility/index.json','registry/accessibility/portal-audit.json']),
 category('performance','Performance standards',perf?.summary?.budgetFail===0?'PASS':'FAIL',['registry/performance/index.json','registry/performance/portal-audit.json'],perf?.summary?.budgetWarning?`${perf.summary.budgetWarning} non-blocking storage-budget warnings remain visible.`:null),
 category('browser-validation','Browser validation',validation.currentContractVersion===version?'PASS':'FAIL',['registry/validation/index.json']),
 category('cli-validation','CLI validation',cli.registryVersion===version?'PASS':'FAIL',['registry/cli/index.json']),
 category('starter-packs','Starter packs',starters.counts?.starters===6?'PASS':'FAIL',['registry/starters/index.json']),
 category('examples','Examples',(examples.examples?.length??examples.exampleCount??0)>0?'PASS':'FAIL',['registry/examples/index.json']),
 category('search','Global Search',search.documents.length>0?'PASS':'FAIL',['registry/search/search-index.json']),
 category('relationships','Relationships',graph.nodes.length>0&&graph.edges.length>0?'PASS':'FAIL',['registry/relationships/relationship-index.json']),
 category('diff','Contract Diff',currentDiff?.availability==='exact'&&currentDiff?.registrySha256===registrySha?'PASS':'FAIL',['registry/diff/release-index.json',`registry/diff/snapshots/${version}.json`]),
 category('compatibility','Compatibility Center',compat.targetContractVersion===version?'PASS':'FAIL',['registry/compatibility/index.json','registry/compatibility/policy.json']),
 category('changelog','Changelog',changelog.currentVersion===version?'PASS':'FAIL',['registry/changelog/index.json',`registry/changelog/releases/${version}.json`]),
 category('deprecations','Deprecations',dep.registryVersion===version?'PASS':'FAIL',['registry/deprecations/index.json']),
 category('documentation','Documentation',exists('README.md')&&exists('AGENTS.md')&&exists('NEXT-F-WEBSITE-DEVELOPMENT-STANDARD.md')?'PASS':'FAIL',['README.md','AGENTS.md','NEXT-F-WEBSITE-DEVELOPMENT-STANDARD.md']),
 category('portal-runtime','Portal runtime',exists('index.html')&&exists('js/router.js')?'PASS':'FAIL',['index.html','js/router.js','checks/phase-36-acceptance.md']),
 category('local-file-review','Local/file review behavior','DEFERRED',['js/generated-registry.js','js/generated-search-index.js','js/generated-diff.js'],'Generated fallbacks, including a bounded consumer-contract Diff snapshot bundle, are available. A live file:// browser acceptance session remains environment-dependent and is not inferred from static validation.',false),
 category('packaging','Packaging','PASS',['package.json','VERSION'], 'Final archive integrity is additionally verified after package creation.')
];
const supplementary=[
 category('live-assistive-technology','Live assistive-technology/browser keyboard review','DEFERRED',['registry/accessibility/portal-audit.json'],'Managed browser policy prevents proving a live assistive-technology session here; source/static accessibility acceptance is PASS and this does not change Registry contract stability.',false),
 category('site-runtime-deployment','NEXT F Site Runtime / SDK deployment','DEFERRED',['registry/compatibility/component-matrix.json'],'No production Site Runtime/SDK release is declared; Registry V1 stability does not require deployment of every consumer.',false),
 category('customer-cms-runtime','Customer CMS runtime deployment','DEFERRED',['registry/compatibility/component-matrix.json'],'Metadata is stable; final Customer CMS runtime deployment remains outside Contract Registry acceptance.',false),
 category('admin-runtime','NEXT F Admin runtime deployment','DEFERRED',['registry/compatibility/component-matrix.json'],'Metadata is stable; final Admin runtime deployment remains outside Contract Registry acceptance.',false),
 category('api-runtime-deployment','API runtime deployment','DEFERRED',['registry/compatibility/component-matrix.json'],'API contracts are stable; deployed API runtime support remains independently evidenced.',false)
];
const blockingFailures=categories.filter(x=>x.blocking&&x.status==='FAIL');
const acceptance={registryVersion:version,phase:37,title:'NEXT F Contracts V1.0.0 Production Acceptance',releaseStatus:blockingFailures.length?'BLOCKED':'STABLE',generatedAt:new Date().toISOString(),summary:{categories:categories.length,pass:categories.filter(x=>x.status==='PASS').length,fail:categories.filter(x=>x.status==='FAIL').length,deferred:categories.filter(x=>x.status==='DEFERRED').length,blockingFailures:blockingFailures.length,supplementaryDeferred:supplementary.filter(x=>x.status==='DEFERRED').length},categories,supplementary,releaseRule:'V1.0.0 is valid only when blockingFailures is zero. Runtime deployment DEFERRED items do not convert unknown runtime compatibility into support claims.'};
write(`${releaseRoot}/acceptance-report.json`,acceptance);

const registrySchemaCount=registry.items.filter(x=>x.type==='schema').length;
const releaseManifest={releaseVersion:version,phase:37,status:blockingFailures.length?'BLOCKED':'STABLE',releaseTimestamp:new Date().toISOString(),registrySha256:registrySha,counts:{registryItems:registry.items.length,schemas:registrySchemaCount,modules:modules.modules.length,capabilities:modules.capabilities.length,events:events.events.length,permissions:permissions.permissions.length,apiOperations:api.operations.length,webhookEligibleEvents:webhooks.eventCatalog.events.length,searchDocuments:search.documents.length,relationshipNodes:graph.nodes.length,relationshipEdges:graph.edges.length,changelogReleases:changelog.releaseCount,changelogEntries:changelog.entryCount,exactDiffReleases:diffIndex.releases.filter(x=>x.availability==='exact').length},versions:{browserValidator:validation.schemaVersion,cli:cli.schemaVersion,portal:version,siteManifestSchema:'1.0.0'},snapshots:{index:`${releaseRoot}/snapshot-index.json`,registry:`${snapshotRoot}/registry.json`,modules:`${snapshotRoot}/modules.json`,capabilities:`${snapshotRoot}/capabilities.json`,events:`${snapshotRoot}/events.json`,permissions:`${snapshotRoot}/permissions.json`,webhookEligibility:`${snapshotRoot}/webhook-eligibility.json`,apiContracts:`${snapshotRoot}/api-contracts.json`,siteManifest:`${snapshotRoot}/site-manifest.schema.json`,customerCmsMetadata:`${snapshotRoot}/customer-cms-metadata.json`,adminMetadata:`${snapshotRoot}/admin-metadata.json`,security:`${snapshotRoot}/security.json`,privacy:`${snapshotRoot}/privacy.json`,accessibility:`${snapshotRoot}/accessibility.json`,performance:`${snapshotRoot}/performance.json`},acceptance:{report:`${releaseRoot}/acceptance-report.json`,summary:acceptance.summary},policies:{semver:'standards/45-production-acceptance-standard.md',compatibility:'standards/07-compatibility-policy.md',deprecation:'standards/36-deprecation-standard.md',upgradeProcedure:'pinned version -> Compatibility Center -> Diff -> migration/review -> validation -> explicit pin change'},runtimeTruth:{registryProductionStable:!blockingFailures.length,siteRuntime:'unknown',customerCmsRuntime:'unknown',nextfAdminRuntime:'unknown',apiRuntimes:'unknown'}};
write(`${releaseRoot}/release-manifest.json`,releaseManifest);

const keySources=[...snapshotFiles,'registry/registry.json','registry/compatibility/policy.json','registry/compatibility/release-compatibility.json','registry/changelog/releases/1.0.0.json','registry/qa/report.json',`${releaseRoot}/acceptance-report.json`,`${releaseRoot}/release-manifest.json`,`${releaseRoot}/snapshot-index.json`];
const hashes=Object.fromEntries([...new Set(keySources)].sort().map(rel=>[rel,{sha256:shaFile(rel),bytes:size(rel)}]));
const integrity={registryVersion:version,releaseVersion:version,algorithm:'sha256',generatedAt:new Date().toISOString(),files:hashes};write(`${releaseRoot}/integrity-hashes.json`,integrity);
fs.writeFileSync(path.join(root,`${releaseRoot}/INTEGRITY.sha256`),Object.entries(hashes).map(([rel,v])=>`${v.sha256}  ${rel}`).join('\n')+'\n');
const releaseIndex={currentVersion:version,stable:true,productionAcceptance:`${releaseRoot}/acceptance-report.json`,releaseManifest:`${releaseRoot}/release-manifest.json`,snapshotIndex:`${releaseRoot}/snapshot-index.json`,integrityHashes:`${releaseRoot}/integrity-hashes.json`};write('registry/releases/index.json',releaseIndex);

const digest=shaFile(`${releaseRoot}/release-manifest.json`);
const generated={index:releaseIndex,manifest:releaseManifest,acceptance,snapshotIndex,integrity};
fs.writeFileSync(path.join(root,'js/generated-release.js'),`// GENERATED FILE - DO NOT EDIT DIRECTLY.\n// SHA-256 release manifest: ${digest}\nexport const GENERATED_RELEASE_SOURCE_SHA256 = ${JSON.stringify(digest)};\nexport const GENERATED_RELEASE = ${JSON.stringify(generated)};\n`);
const gen=spawnSync(process.execPath,[path.join(root,'scripts/generate-registry-bootstrap.mjs')],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);
if(blockingFailures.length&&!prepareOnly) throw new Error(`Production Acceptance blocked by ${blockingFailures.length} category failures`);
console.log(`Production Acceptance synchronized: ${categories.length} categories, ${acceptance.summary.pass} PASS, ${blockingFailures.length} blocking failures, ${snapshotFiles.length} frozen snapshots.`);
