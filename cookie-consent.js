(function(){
  if(window.localStorage && localStorage.getItem('nl_cookie_consent')==='true') return;
  const el = document.createElement('div');
  el.id='cookie-consent';
  el.style.position='fixed'; el.style.left='16px'; el.style.right='16px'; el.style.bottom='16px'; el.style.zIndex=9999;
  el.style.background='rgba(255,255,255,0.98)'; el.style.border='1px solid rgba(0,0,0,0.06)'; el.style.padding='12px 16px'; el.style.borderRadius='12px'; el.style.boxShadow='0 8px 30px rgba(0,0,0,0.08)'; el.style.display='flex'; el.style.alignItems='center'; el.style.justifyContent='space-between';
  el.innerHTML = '<div style="font-size:0.95rem;color:#111">We use cookies for analytics and site improvements. <a href="privacy.html">Learn more</a></div>' +
                 '<div style="margin-left:16px"><button id="cookie-accept" style="background:#050505;color:#fff;border:none;padding:8px 12px;border-radius:999px;cursor:pointer">Accept</button></div>';
  document.body.appendChild(el);
  document.getElementById('cookie-accept').addEventListener('click', function(){ localStorage.setItem('nl_cookie_consent','true'); el.remove(); });
})();
