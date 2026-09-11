import { escapeHtml } from "./utils.js";

const ICONS={registry:"fa-database",field:"fa-i-cursor",route:"fa-compass",document:"fa-book-open"};
const LABELS={registry:"Registry",field:"Field",route:"Portal",document:"Documentation"};

function h(v){return escapeHtml(String(v??""));}
function mark(text,query){
  const source=String(text??"");
  const tokens=String(query??"").toLowerCase().replace(/[._/\\:-]+/g," ").match(/[a-z0-9]{2,}/g)??[];
  if(!tokens.length)return h(source);
  const escaped=tokens.slice(0,6).map(t=>t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));
  if(!escaped.length)return h(source);
  const re=new RegExp(`(${escaped.join("|")})`,`ig`);
  return h(source).replace(re,"<mark>$1</mark>");
}

export function createNavigationSearch({ searchEngine, onNavigate = null } = {}) {
  const backdrop=document.querySelector("[data-search-backdrop]");
  const dialog=document.querySelector("[data-search-dialog]");
  const input=document.querySelector("[data-search-input]");
  const results=document.querySelector("[data-search-results]");
  const summary=document.querySelector("[data-search-summary]");
  const closeButton=document.querySelector("[data-close-search]");
  const viewAll=document.querySelector("[data-search-view-all]");
  const openButtons=document.querySelectorAll("[data-open-search]");
  let selectedIndex=0,visibleResults=[],previouslyFocused=null,total=0;

  function quickAccess(){
    const ids=["route:global-search","route:registry-index","route:development-examples","route:development-codex","route:platform-api","route:platform-permissions"];
    const map=new Map(searchEngine.documents.map(d=>[d.id,d]));
    return ids.map(id=>map.get(id)).filter(Boolean).map(doc=>({doc,score:0,reasons:["Quick access"]}));
  }

  function render(){
    if(!results||!input||!searchEngine)return;
    const query=input.value.trim();
    let response;
    if(query){response=searchEngine.search(query,{}, {limit: searchEngine.config.defaultPaletteLimit??14});visibleResults=response.results;total=response.total;}
    else{visibleResults=quickAccess();total=searchEngine.stats.documents;response={results:visibleResults,total};}
    selectedIndex=Math.min(selectedIndex,Math.max(visibleResults.length-1,0));
    if(summary)summary.innerHTML=query?`<span><strong>${total}</strong> indexed match${total===1?"":"es"}</span><span>Local browser search</span>`:`<span><strong>${searchEngine.stats.documents}</strong> indexed records</span><span>Quick access</span>`;
    if(viewAll){viewAll.hidden=!query;viewAll.textContent=query?`View all ${total} results`:"View all results";}

    if(!visibleResults.length){
      results.innerHTML=`<div class="search-empty"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i><strong>No indexed results</strong><span>Try a machine ID, field, Event, permission, API term or natural-language phrase.</span></div>`;
      return;
    }
    results.innerHTML=visibleResults.map(({doc,reasons},index)=>`<button class="search-result" type="button" data-search-result="${index}" aria-selected="${index===selectedIndex?"true":"false"}"><span class="search-result__icon"><i class="fa-solid ${ICONS[doc.kind]??"fa-file"}" aria-hidden="true"></i></span><span class="search-result__copy"><strong>${mark(doc.title,query)}</strong><span>${mark(doc.subtitle||doc.description,query)}</span><span class="search-result__meta">${doc.machineId?`<code>${mark(doc.machineId,query)}</code>`:""}${reasons?.[0]?`<span class="search-result__score">${h(reasons[0])}</span>`:""}</span></span><span class="search-kind">${h(LABELS[doc.kind]??doc.kind)}</span></button>`).join("");
    results.querySelectorAll("[data-search-result]").forEach(button=>{
      button.addEventListener("mouseenter",()=>{selectedIndex=Number(button.dataset.searchResult);updateSelection();});
      button.addEventListener("click",()=>openSelected(Number(button.dataset.searchResult)));
    });
  }

  function updateSelection(){results?.querySelectorAll("[data-search-result]").forEach((button,index)=>{button.setAttribute("aria-selected",index===selectedIndex?"true":"false");if(index===selectedIndex)button.scrollIntoView({block:"nearest"});});}

  function navigateTarget(target){
    if(target.startsWith("#/")){window.location.hash=target.slice(1);}
    else if(target.startsWith("#")){window.location.hash=target.slice(1);}
    else{window.location.href=target;}
  }

  function openSelected(index=selectedIndex){const result=visibleResults[index];if(!result)return;navigateTarget(result.doc.target);close();onNavigate?.(result);}
  function openAll(){if(!input)return;const q=input.value.trim();if(!q)return;window.location.hash=`/search?q=${encodeURIComponent(q)}`;close();onNavigate?.({kind:"search-page"});}

  function open(){if(!backdrop||!dialog||!input)return;previouslyFocused=document.activeElement;backdrop.hidden=false;document.body.style.overflow="hidden";input.value="";selectedIndex=0;render();requestAnimationFrame(()=>input.focus());}
  function close(){if(!backdrop)return;backdrop.hidden=true;document.body.style.overflow="";previouslyFocused?.focus?.();}

  function handleKeydown(event){
    const modifier=event.metaKey||event.ctrlKey;
    if(modifier&&event.key.toLowerCase()==="k"){event.preventDefault();if(backdrop?.hidden)open();else close();return;}
    if(backdrop?.hidden)return;
    if(event.key==="Escape"){event.preventDefault();close();}
    else if(event.key==="ArrowDown"){event.preventDefault();selectedIndex=Math.min(selectedIndex+1,visibleResults.length-1);updateSelection();}
    else if(event.key==="ArrowUp"){event.preventDefault();selectedIndex=Math.max(selectedIndex-1,0);updateSelection();}
    else if(event.key==="Enter"&&document.activeElement===input){event.preventDefault();openSelected();}
    else if(event.key==="Tab"&&dialog){const focusable=[...dialog.querySelectorAll('button:not([disabled]):not([hidden]), input:not([disabled]), a[href]')];if(!focusable.length)return;const first=focusable[0],last=focusable[focusable.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
  }

  openButtons.forEach(button=>button.addEventListener("click",open));
  closeButton?.addEventListener("click",close);
  viewAll?.addEventListener("click",openAll);
  backdrop?.addEventListener("mousedown",event=>{if(event.target===backdrop)close();});
  input?.addEventListener("input",()=>{selectedIndex=0;render();});
  document.addEventListener("keydown",handleKeydown);
  return {open,close,render};
}
