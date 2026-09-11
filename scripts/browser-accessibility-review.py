import asyncio, json, subprocess, tempfile, time, urllib.request
from pathlib import Path
import websockets

ROOT=Path.cwd(); DEBUG=9331

def wait_url(url, timeout=12):
    end=time.time()+timeout
    while time.time()<end:
        try:
            with urllib.request.urlopen(url,timeout=1) as r:return r.read().decode()
        except Exception: time.sleep(.15)
    raise RuntimeError(f'timeout waiting for {url}')

async def review():
    audit_html=ROOT/'.a11y-audit-index.html'
    source=(ROOT/'index.html').read_text()
    source=source.replace('  <link rel="preconnect" href="https://cdnjs.cloudflare.com">\n','').replace('  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" referrerpolicy="no-referrer">\n','')
    audit_html.write_text(source)
    profile=tempfile.mkdtemp(prefix='nextf-a11y-chrome-')
    url=audit_html.resolve().as_uri()+'#/overview'
    chrome=subprocess.Popen(['chromium','--headless=new','--no-sandbox','--disable-gpu','--allow-file-access-from-files',f'--remote-debugging-port={DEBUG}',f'--user-data-dir={profile}',url],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL)
    results={}
    try:
        targets=json.loads(wait_url(f'http://127.0.0.1:{DEBUG}/json'))
        page=next((x for x in targets if x.get('type')=='page' and '.a11y-audit-index.html' in x.get('url','')), next(x for x in targets if x.get('type')=='page'))
        async with websockets.connect(page['webSocketDebuggerUrl'],max_size=8_000_000) as sock:
            seq=0
            async def cmd(method,params=None):
                nonlocal seq
                seq+=1; i=seq
                await sock.send(json.dumps({'id':i,'method':method,'params':params or {}}))
                while True:
                    msg=json.loads(await sock.recv())
                    if msg.get('id')==i:
                        if 'error' in msg: raise RuntimeError(msg['error'])
                        return msg.get('result',{})
            async def evaljs(expr):
                r=await cmd('Runtime.evaluate',{'expression':expr,'returnByValue':True})
                if r.get('exceptionDetails'):
                    raise RuntimeError(f"JS exception for {expr}: {r['exceptionDetails'].get('text')}")
                return r.get('result',{}).get('value')
            async def key(key,code=None,ctrl=False,shift=False,meta=False):
                mods=(2 if ctrl else 0)|(8 if shift else 0)|(4 if meta else 0)
                vk={'Tab':9,'Enter':13,'Escape':27,'k':75}.get(key,0)
                for typ in ['keyDown','keyUp']:
                    await cmd('Input.dispatchKeyEvent',{'type':typ,'key':key,'code':code or key,'windowsVirtualKeyCode':vk,'nativeVirtualKeyCode':vk,'modifiers':mods})
            await cmd('Runtime.enable'); await cmd('Page.enable')
            for _ in range(80):
                if await evaljs("Boolean(document.querySelector('[data-page-root]')?.textContent.trim())"): break
                await asyncio.sleep(.1)
            await evaljs("document.querySelector('.skip-link').blur();document.body.tabIndex=-1;document.body.focus();document.body.removeAttribute('tabindex')")
            await key('Tab')
            skip=await evaljs("document.activeElement?.classList.contains('skip-link')")
            await key('Enter'); await asyncio.sleep(.12)
            main=await evaljs("document.activeElement?.id==='main-content' || location.hash==='#main-content'")
            await evaljs("document.querySelector('[data-open-search]').focus()")
            await key('k','KeyK',ctrl=True); await asyncio.sleep(.1)
            opened=await evaljs("document.querySelector('[data-search-backdrop]').hidden===false && document.activeElement===document.querySelector('[data-search-input]')")
            await key('Escape'); await asyncio.sleep(.1)
            closed=await evaljs("document.querySelector('[data-search-backdrop]').hidden===true && document.activeElement===document.querySelector('[data-open-search]')")
            await evaljs("document.querySelector('[data-route-link=\"standards-accessibility\"]').focus()")
            await key('Enter'); await asyncio.sleep(.18)
            nav=await evaljs("location.hash.startsWith('#/standards/accessibility')")
            results['keyboard']={'pass':bool(skip and main and opened and closed and nav),'evidence':f'skip={skip}; mainTarget={main}; paletteOpenFocus={opened}; paletteEscapeRestore={closed}; routeKeyboardNavigation={nav}'}
            await cmd('Emulation.setDeviceMetricsOverride',{'width':375,'height':800,'deviceScaleFactor':1,'mobile':False})
            await asyncio.sleep(.1)
            visible=await evaljs("getComputedStyle(document.querySelector('[data-open-sidebar]')).display!=='none'")
            overflow=await evaljs("document.documentElement.scrollWidth <= window.innerWidth + 1")
            await evaljs("document.querySelector('[data-open-sidebar]').focus();document.querySelector('[data-open-sidebar]').click()")
            await asyncio.sleep(.1)
            drawerOpen=await evaljs("document.querySelector('#portal-sidebar').dataset.open==='true' && document.activeElement===document.querySelector('[data-close-sidebar]')")
            await key('Escape'); await asyncio.sleep(.1)
            drawerClose=await evaljs("document.querySelector('#portal-sidebar').dataset.open==='false' && document.activeElement===document.querySelector('[data-open-sidebar]')")
            results['reflow']={'pass':bool(visible and overflow and drawerOpen and drawerClose),'evidence':f'mobileOpenControlVisible={visible}; noPageHorizontalOverflow={overflow}; drawerOpenFocus={drawerOpen}; escapeCloseRestore={drawerClose}'}
    finally:
        for p in [chrome]:
            try:p.terminate();p.wait(timeout=3)
            except Exception:
                try:p.kill()
                except Exception: pass
        try:audit_html.unlink()
        except Exception: pass
    return results

if __name__=='__main__': print(json.dumps(asyncio.run(review())))
