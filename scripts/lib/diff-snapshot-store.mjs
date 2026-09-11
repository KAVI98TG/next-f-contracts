import fs from 'node:fs';
import path from 'node:path';
import { once } from 'node:events';
import { StringDecoder } from 'node:string_decoder';

export async function pruneSnapshotStore(file,version,keepItem){
 const temp=`${file}.prune.tmp`,input=fs.createReadStream(file),output=fs.createWriteStream(temp),decoder=new StringDecoder('utf8');
 const marker='"snapshots":{',keptHashes=[];let carry='',started=false,mode='key',key='',value='',prefix='',decision=null,inString=false,escape=false,depth=0,kept=0,dropped=0,first=true;
 output.write(`{"registryVersion":${JSON.stringify(version)},"snapshots":{`);
 const finishEntry=()=>{if(decision===null)throw new Error(`Snapshot ${key} does not expose itemId near the start of its value.`);if(decision){output.write(`${first?'':','}${key}:${value}`);keptHashes.push(JSON.parse(key));first=false;kept++;}else dropped++;key='';value='';prefix='';decision=null;mode='key';};
 const consume=text=>{
  carry+=text;
  if(!started){const at=carry.indexOf(marker);if(at<0){carry=carry.slice(-marker.length);return;}carry=carry.slice(at+marker.length);started=true;}
  for(let i=0;i<carry.length;i++){
   const ch=carry[i];
   if(mode==='key'){
    if(ch==='}'||ch===','||/\s/.test(ch))continue;
    if(ch!== '"')throw new Error(`Unexpected snapshot key token ${JSON.stringify(ch)}.`);
    key='"';mode='key-string';escape=false;continue;
   }
   if(mode==='key-string'){
    key+=ch;if(escape)escape=false;else if(ch==='\\')escape=true;else if(ch==='"')mode='colon';continue;
   }
   if(mode==='colon'){
    if(/\s/.test(ch))continue;if(ch!==':')throw new Error('Snapshot key is missing its value separator.');mode='value';continue;
   }
   if(mode==='value'){
    if(/\s/.test(ch))continue;if(ch!=='{')throw new Error('Snapshot value must be an object.');prefix='{';depth=1;inString=false;escape=false;mode='value-body';continue;
   }
   if(mode==='value-body'){
    if(decision===true)value+=ch;else if(decision===null){prefix+=ch;const match=prefix.match(/"itemId":"([^"]+)"/);if(match){decision=keepItem(match[1]);if(decision)value=prefix;}else if(prefix.length>1600)throw new Error(`Snapshot ${key} has no bounded itemId.`);}
    if(inString){if(escape)escape=false;else if(ch==='\\')escape=true;else if(ch==='"')inString=false;continue;}
    if(ch==='"'){inString=true;continue;}if(ch==='{'||ch==='[')depth++;else if(ch==='}'||ch===']'){depth--;if(depth===0)finishEntry();}
   }
  }
  carry='';
 };
 try{for await(const chunk of input)consume(decoder.write(chunk));consume(decoder.end());output.end('}}');await once(output,'finish');fs.renameSync(temp,file);return {kept,dropped,keptHashes};}
 catch(error){input.destroy();output.destroy();if(fs.existsSync(temp))fs.unlinkSync(temp);throw error;}
}

export function keepConsumerSnapshot(itemId){
 return itemId!=='portal.navigation'&&!['search.','relationships.','diff.','registry.'].some(prefix=>itemId.startsWith(prefix));
}
