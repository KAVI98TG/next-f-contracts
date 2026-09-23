import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync, spawn } from 'node:child_process';

const root=process.cwd();
const pass=[];const fail=[];
const ok=(name,condition,detail='')=>condition?pass.push(name):fail.push(`${name}${detail?`: ${detail}`:''}`);
const run=(label,script)=>{const r=spawnSync(process.execPath,[path.join(root,script)],{encoding:'utf8'});ok(label,r.status===0,r.status===0?'':(r.stdout+r.stderr).trim().slice(-1200));};

// Phase 40 is current. Earlier phase scripts remain frozen release-time evidence for previous stable releases.
run('Phase 40 validator','scripts/validate-phase-40.mjs');
const smokePhases=[23,24,25,26,27,28,29,30,31,32,33,35,40];
const smokeResults=await Promise.all(smokePhases.map(phase=>new Promise(resolve=>{const script=path.join(root,`scripts/smoke-phase-${phase}.mjs`);const child=spawn(process.execPath,[script],{cwd:root});let out='';child.stdout.on('data',d=>out+=d);child.stderr.on('data',d=>out+=d);child.on('close',code=>resolve({phase,code,out}));})));
for(const r of smokeResults)ok(`Phase ${r.phase} smoke`,r.code===0,r.code===0?'':r.out.trim().slice(-1200));

let jsonCount=0;
for(const base of ['registry','examples','checks']){
  const start=path.join(root,base);if(!fs.existsSync(start))continue;
  const walk=(dir)=>{for(const ent of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,ent.name);if(ent.isDirectory())walk(p);else if(ent.name.endsWith('.json')){jsonCount++;try{const rel=path.relative(root,p).replaceAll('\\','/');if(rel==='registry/diff/snapshots.json'){const digest=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');ok('Large Diff snapshot JSON integrity',fs.readFileSync(path.join(root,'js/generated-diff.js'),'utf8').includes(digest),digest);}else JSON.parse(fs.readFileSync(p,'utf8'));}catch(e){const rel=path.relative(root,p).replaceAll('\\','/');if(rel!=='registry/validation/fixtures/malformed-json.json')fail.push(`JSON parse ${rel}: ${e.message}`);}}}};walk(start);
}
let jsCount=0;
for(const base of ['js','scripts','bin']){
  const start=path.join(root,base);for(const ent of fs.readdirSync(start)){if(!/\.(?:js|mjs)$/.test(ent))continue;jsCount++;const p=path.join(start,ent);const r=spawnSync(process.execPath,['--check',p],{encoding:'utf8'});ok(`Syntax ${path.relative(root,p)}`,r.status===0,(r.stderr||'').trim());}
}
const registry=JSON.parse(fs.readFileSync(path.join(root,'registry/registry.json'),'utf8'));
for(const item of registry.items){if(item.source)ok(`Source ${item.id}`,fs.existsSync(path.join(root,item.source)),item.source);}
for(const rel of ['index.html','404.html']){const p=path.join(root,rel);if(!fs.existsSync(p))continue;const html=fs.readFileSync(p,'utf8');const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(x=>x[1]);ok(`Duplicate IDs ${rel}`,ids.length===new Set(ids).size,String(ids.length-new Set(ids).size));for(const m of html.matchAll(/(?:href|src)="\.\/([^"#?]+)"/g)){if(/^https?:/i.test(m[1]))continue;ok(`Asset ${m[1]}`,fs.existsSync(path.join(root,m[1])),rel);}}
const changelogCss=fs.readFileSync(path.join(root,'css/changelog.css'),'utf8');ok('Changelog CSS remains light-only',!changelogCss.includes('prefers-color-scheme: dark'));ok('Changelog CSS has no backdrop-filter',!changelogCss.includes('backdrop-filter'));
const depCss=fs.readFileSync(path.join(root,'css/deprecations.css'),'utf8');ok('Deprecation CSS remains light-only',!depCss.includes('prefers-color-scheme: dark'));ok('Deprecation CSS has no backdrop-filter',!depCss.includes('backdrop-filter'));
const securityCss=fs.readFileSync(path.join(root,'css/security.css'),'utf8');ok('Security CSS remains light-only',!securityCss.includes('prefers-color-scheme: dark'));ok('Security CSS has no backdrop-filter',!securityCss.includes('backdrop-filter'));
const privacyCss=fs.readFileSync(path.join(root,'css/privacy.css'),'utf8');ok('Privacy CSS remains light-only',!privacyCss.includes('prefers-color-scheme: dark'));ok('Privacy CSS has no backdrop-filter',!privacyCss.includes('backdrop-filter'));
const accessibilityCss=fs.readFileSync(path.join(root,'css/accessibility.css'),'utf8');ok('Accessibility CSS remains light-only',!accessibilityCss.includes('prefers-color-scheme: dark'));ok('Accessibility CSS has no backdrop-filter',!accessibilityCss.includes('backdrop-filter'));
const performanceCss=fs.readFileSync(path.join(root,'css/performance.css'),'utf8');ok('Performance CSS remains light-only',!performanceCss.includes('prefers-color-scheme: dark'));ok('Performance CSS has no backdrop-filter',!performanceCss.includes('backdrop-filter'));

const validationCss=fs.readFileSync(path.join(root,'css/validation.css'),'utf8');ok('Validation CSS remains light-only',!validationCss.includes('prefers-color-scheme: dark'));ok('Validation CSS has no backdrop-filter',!validationCss.includes('backdrop-filter'));
const healthCss=fs.readFileSync(path.join(root,'css/health.css'),'utf8');ok('Health CSS remains light-only',!healthCss.includes('prefers-color-scheme: dark'));ok('Health CSS has no backdrop-filter',!healthCss.includes('backdrop-filter'));


console.log(`NEXT F Contracts current regression gate\nPasses: ${pass.length}\nFailures: ${fail.length}\nJSON files: ${jsonCount}\nJS/MJS files: ${jsCount}\nRegistry items: ${registry.items.length}`);
if(fail.length){console.error('\nFailures:\n'+fail.map(x=>`- ${x}`).join('\n'));process.exit(1);}console.log('PASS - Current coordinated lifecycle regression gate passed.');
