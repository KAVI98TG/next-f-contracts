import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';
const root=process.cwd();const read=r=>JSON.parse(fs.readFileSync(path.join(root,r),'utf8'));const write=(r,v)=>{const p=path.join(root,r);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,JSON.stringify(v,null,2)+'\n')};const version=fs.readFileSync('VERSION','utf8').trim();
const cli=read('registry/cli/index.json');cli.registryVersion=version;write('registry/cli/index.json',cli);
const registry=read('registry/registry.json');registry.registryVersion=version;registry.items=registry.items.filter(x=>x.managedBy!=='developer-cli-sync');
const items=[
['validation.cliStandard','Developer Validation CLI Standard','standard','standards/42-developer-validation-cli-standard.md','Offline CLI behavior, exit codes, output modes and Codex evidence rules.'],
['validation.cli','Developer Validation CLI','validation-tool','registry/cli/index.json','Offline Node CLI adapter over the shared Site Manifest validation model.'],
['validation.cliCommand','Developer Validation CLI Command','schema','registry/cli/definitions/command.json','Supported developer validation CLI command model.'],
['validation.cliExitCode','Developer Validation CLI Exit Code','schema','registry/cli/definitions/exit-code.json','Stable developer validation CLI exit-code model.'],
['validation.cliReport','Developer Validation CLI Report','schema','registry/cli/definitions/report.json','Machine-readable CLI execution report model.']
];
for(const [id,name,type,source,description] of items)registry.items.push({id,name,domain:'validation',type,version,status:'stable',description,source,phase:34,introducedIn:'0.35.0',tags:['validation','cli','phase-34'],relationships:id==='validation.cliStandard'?[]:[{type:'implements',target:'validation.cliStandard',description:'Governed by the Phase 34 Developer Validation CLI Standard.'},{type:'references',target:'validation.index',description:'Reuses the Phase 33 generated validation rule bundle.'}],permissions:[],events:[],managedBy:'developer-cli-sync'});
registry.items.sort((a,b)=>a.id.localeCompare(b.id));write('registry/registry.json',registry);
const meta=read('registry/registry-meta.json');Object.assign(meta,{registryVersion:version,developerCliIndex:'registry/cli/index.json',developerCliBinary:'bin/nextf-contract.mjs'});write('registry/registry-meta.json',meta);
const nav=read('registry/portal-navigation.json');nav.portalVersion=version;nav.registryVersion=version;for(const g of nav.groups??[])for(const i of g.items??[])if(i.id==='overview'){i.phase=34;i.status='current'}write('registry/portal-navigation.json',nav);
const gen=spawnSync(process.execPath,['scripts/generate-registry-bootstrap.mjs'],{stdio:'inherit'});if(gen.status!==0)process.exit(gen.status??1);console.log(`Synchronized Developer Validation CLI: ${cli.commands.length} commands, ${cli.exitCodes.length} exit codes, ${items.length} Registry items.`);
