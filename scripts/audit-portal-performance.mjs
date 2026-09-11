import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const version=fs.readFileSync(path.join(root,'VERSION'),'utf8').trim();
const read=rel=>JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));
const bytes=rel=>fs.statSync(path.join(root,rel)).size;
const sumFiles=(dir,pred=()=>true)=>fs.readdirSync(path.join(root,dir),{withFileTypes:true}).filter(x=>x.isFile()&&pred(x.name)).reduce((s,x)=>s+fs.statSync(path.join(root,dir,x.name)).size,0);
const walk=(dir,pred)=>{let out=[];for(const e of fs.readdirSync(path.join(root,dir),{withFileTypes:true})){const rel=path.join(dir,e.name);if(e.isDirectory())out=out.concat(walk(rel,pred));else if(pred(rel,e.name))out.push(rel);}return out;};
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
const app=fs.readFileSync(path.join(root,'js/app.js'),'utf8');
const router=fs.readFileSync(path.join(root,'js/router.js'),'utf8');
const searchCfg=read('registry/search/search-config.json');
const relCfg=read('registry/relationships/relationship-config.json');
const budgetFiles=fs.readdirSync(path.join(root,'registry/performance/budgets')).filter(x=>x.endsWith('.json')).sort();
const budgets=budgetFiles.map(f=>read(`registry/performance/budgets/${f}`));

const generatedFiles=fs.readdirSync(path.join(root,'js')).filter(x=>/^generated-.*\.js$/.test(x));
const generatedFallbackBytes=generatedFiles.reduce((s,x)=>s+fs.statSync(path.join(root,'js',x)).size,0);
const sourceJsBytes=sumFiles('js',n=>n.endsWith('.js')&&!n.startsWith('generated-'));
const cssBytes=sumFiles('css',n=>n.endsWith('.css'));
const staticEngineImports=[...app.matchAll(/from\s+["'](\.\/[^"']+-engine\.js)["']/g)].map(x=>x[1]);
let eagerGeneratedFallbackBytes=0;
const eagerGeneratedFiles=new Set();
for(const rel of staticEngineImports){const engine=fs.readFileSync(path.join(root,'js',rel.slice(2)),'utf8');for(const m of engine.matchAll(/^import\s+.*?from\s+["'](\.\/generated-[^"']+\.js)["'];?/gm)){const f=path.join(root,'js',m[1].slice(2));if(fs.existsSync(f)&&!eagerGeneratedFiles.has(f)){eagerGeneratedFiles.add(f);eagerGeneratedFallbackBytes+=fs.statSync(f).size;}}}
const inlineScripts=[...html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)].reduce((s,m)=>s+Buffer.byteLength(m[1]),0);
const inlineStyles=[...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)].reduce((s,m)=>s+Buffer.byteLength(m[1]),0);
const externalScripts=[...html.matchAll(/<script[^>]*\bsrc=["']https?:\/\/[^"']+["'][^>]*>/gi)].length;
const externalStylesheets=[...html.matchAll(/<link[^>]*\brel=["']stylesheet["'][^>]*\bhref=["']https?:\/\/[^"']+["'][^>]*>/gi)].length;
const eagerDiffImportCount=(app.match(/generated-diff|diff-registry-engine/g)||[]).length + ([...router.matchAll(/^import\s+.*diff-registry-engine/gm)].length);
const promise=app.match(/await Promise\.all\(\[([\s\S]*?)\]\)/)?.[1]??'';
const bootstrapRegistryLoaderCount=(promise.match(/\bload[A-Z][A-Za-z0-9]*\s*\(/g)||[]).length;
const measurements={
 'portal.indexHtmlBytes':bytes('index.html'),
 'portal.localCssBytes':cssBytes,
 'portal.localJsSourceBytes':sourceJsBytes,
 'portal.generatedFallbackBytes':generatedFallbackBytes,
 'portal.eagerGeneratedFallbackBytes':eagerGeneratedFallbackBytes,
 'registry.registryJsonBytes':bytes('registry/registry.json'),
 'search.indexBytes':bytes('registry/search/search-index.json'),
 'relationships.indexBytes':bytes('registry/relationships/relationship-index.json'),
 'diff.snapshotsBytes':bytes('registry/diff/snapshots.json'),
 'portal.inlineScriptBytes':inlineScripts,
 'portal.inlineStyleBytes':inlineStyles,
 'portal.externalScriptCount':externalScripts,
 'portal.externalStylesheetCount':externalStylesheets,
 'portal.eagerDiffImportCount':eagerDiffImportCount,
 'relationships.maxRenderedNeighbors':Number(relCfg.limits?.maxRenderedNeighbors??Infinity),
 'search.defaultPageLimit':Number(searchCfg.defaultPageLimit??Infinity),
 'portal.bootstrapRegistryLoaderCount':bootstrapRegistryLoaderCount
};
const satisfies=(v,b,threshold='target')=>{const t=b[threshold];if(b.comparator==='lte')return v<=t;if(b.comparator==='gte')return v>=t;return v===t;};
const budgetResults=budgets.map(b=>{const actual=measurements[b.metric];let result='not-run';if(Number.isFinite(actual)){result=satisfies(actual,b,'target')?'pass':satisfies(actual,b,'warningThreshold')?'warning':'fail';}return {budgetId:b.budgetId,name:b.name,metric:b.metric,unit:b.unit,target:b.target,warningThreshold:b.warningThreshold,comparator:b.comparator,actual,result,measurementMethod:b.measurementMethod,environment:b.environment};});
const check=(checkId,title,result,evidence,reviewType='automated-static')=>({checkId,title,result:result?'pass':'fail',reviewType,evidence});
const checks=[
 check('PORTAL-PERF-001','Bootstrap generated fallbacks are failure-path only',eagerGeneratedFallbackBytes===0,`Static app bootstrap graph reaches ${eagerGeneratedFallbackBytes} generated-fallback bytes; target is 0.`),
 check('PORTAL-PERF-002','Contract Diff remains route-lazy',router.includes("import('./diff-registry-engine.js')")&&!/^import .*diff-registry-engine/m.test(router)&&!app.includes('diff-registry-engine'), 'Diff engine is dynamically imported from the lifecycle route and absent from app bootstrap.'),
 check('PORTAL-PERF-003','Diff snapshots are not referenced by normal bootstrap',!app.includes('snapshots.json')&&!/^import .*generated-diff/m.test(router), 'Normal app/router static imports do not include snapshots.json or generated-diff.'),
 check('PORTAL-PERF-004','Global Search rendering is bounded',Number(searchCfg.defaultPageLimit)<=100&&Number(searchCfg.defaultPaletteLimit)<=25,`Page limit ${searchCfg.defaultPageLimit}; palette limit ${searchCfg.defaultPaletteLimit}.`),
 check('PORTAL-PERF-005','Relationship rendering is bounded',Number(relCfg.limits?.maxRenderedNeighbors)<=100&&Number(relCfg.limits?.maxExpandedNodes)<=500&&Number(relCfg.limits?.maxEdgeTableRows)<=200,`neighbors=${relCfg.limits?.maxRenderedNeighbors}, expanded=${relCfg.limits?.maxExpandedNodes}, rows=${relCfg.limits?.maxEdgeTableRows}`),
 check('PORTAL-PERF-006','No inline script payload',inlineScripts===0,`${inlineScripts} inline script bytes.`),
 check('PORTAL-PERF-007','No inline style payload',inlineStyles===0,`${inlineStyles} inline style bytes.`),
 check('PORTAL-PERF-008','No external script dependency',externalScripts===0,`${externalScripts} external scripts in index.html.`),
 check('PORTAL-PERF-009','External stylesheets stay bounded',externalStylesheets<=1,`${externalStylesheets} external stylesheets in index.html.`),
 check('PORTAL-PERF-010','Font Awesome host is preconnected',html.includes('rel="preconnect" href="https://cdnjs.cloudflare.com"'),'cdnjs.cloudflare.com is preconnected before the Font Awesome stylesheet.'),
 check('PORTAL-PERF-011','Performance route is lazy',router.includes("import('./performance-registry-engine.js')")&&router.includes("import('./performance-pages.js')"),'Performance engine/pages are dynamically imported only when the route is opened.'),
 check('PORTAL-PERF-012','Generated fallback growth is measured',Number.isFinite(measurements['portal.generatedFallbackBytes']),'Generated fallback aggregate bytes are included in machine-readable budget results.'),
 check('PORTAL-PERF-013','Search index growth is measured',Number.isFinite(measurements['search.indexBytes']),'Search index bytes are included in machine-readable budget results.'),
 check('PORTAL-PERF-014','Relationship index growth is measured',Number.isFinite(measurements['relationships.indexBytes']),'Relationship index bytes are included in machine-readable budget results.'),
 check('PORTAL-PERF-015','Diff storage growth is measured',Number.isFinite(measurements['diff.snapshotsBytes']),'Diff snapshot storage bytes are included separately from initial-route budgets.'),
 check('PORTAL-PERF-016','Bootstrap loader count is bounded',bootstrapRegistryLoaderCount<=30,`${bootstrapRegistryLoaderCount} authoritative data loaders are invoked by app bootstrap.`),
 check('PORTAL-PERF-017','Performance stylesheet is local',html.includes('./css/performance.css'),'Performance UI styles load from a local cacheable stylesheet.'),
 check('PORTAL-PERF-018','No dark-mode performance override',!fs.readFileSync(path.join(root,'css/performance.css'),'utf8').includes('prefers-color-scheme: dark'),'Performance UI preserves the light-only portal contract.')
];
const failures=budgetResults.filter(x=>x.result==='fail').length+checks.filter(x=>x.result==='fail').length;
const warnings=budgetResults.filter(x=>x.result==='warning').length;
const overallStatus=failures?'fail':warnings?'warning':'pass';
const out={registryVersion:version,phase:32,overallStatus,measuredAt:null,measurementEnvironment:'repository-static-audit',measurements,budgetResults,checks,summary:{budgetCount:budgetResults.length,budgetPass:budgetResults.filter(x=>x.result==='pass').length,budgetWarning:warnings,budgetFail:budgetResults.filter(x=>x.result==='fail').length,checkCount:checks.length,checkPass:checks.filter(x=>x.result==='pass').length,checkFail:checks.filter(x=>x.result==='fail').length},notes:['Static repository audit does not claim browser Core Web Vitals or production field performance.','Diff snapshot storage is intentionally measured separately because Contract Diff history is route-lazy.']};
fs.writeFileSync(path.join(root,'registry/performance/portal-audit.json'),JSON.stringify(out,null,2)+'\n');
console.log(`NEXT F Contract Portal performance audit\nStatus: ${overallStatus}\nBudgets: ${out.summary.budgetPass} pass, ${warnings} warning, ${out.summary.budgetFail} fail\nChecks: ${out.summary.checkPass} pass, ${out.summary.checkFail} fail\nEager generated fallback bytes: ${eagerGeneratedFallbackBytes}`);
if(failures)process.exit(1);
