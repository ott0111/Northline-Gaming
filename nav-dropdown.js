// Simple accessible nav dropdowns
(function(){
  // Inject lightweight CSS for hover-dropdowns so hovering shows the menu.
  const css = `
  .nav-item{position:relative}
  .nav-item .dropdown{position:absolute;left:0;top:100%;min-width:180px;background:var(--void,#fff);border:1px solid rgba(0,0,0,0.06);box-shadow:0 8px 24px rgba(2,2,2,0.06);padding:8px;border-radius:8px;display:block;opacity:0;transform:translateY(-6px);transition:opacity .18s,transform .18s;pointer-events:none;z-index:60}
  .nav-item .dropdown a{display:block;padding:8px 12px;color:var(--text-1,#0a0a0a)}
  .nav-item:hover .dropdown,.nav-item.show .dropdown{opacity:1;transform:translateY(0);pointer-events:auto}
  .nav-btn{background:transparent;border:none;cursor:pointer;font:inherit}
  @media (max-width:860px){ .nav-item .dropdown{position:static;transform:none;opacity:1;pointer-events:auto} }
  `;
  const s = document.createElement('style'); s.appendChild(document.createTextNode(css)); document.head.appendChild(s);

  function closeAll(){
    document.querySelectorAll('.nav-item.has-dropdown').forEach(i=>{
      i.classList.remove('show');
      const b = i.querySelector('.nav-btn'); if(b) b.setAttribute('aria-expanded','false');
    });
  }

  // Click handlers provide accessible toggle for keyboard users on small screens.
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.nav-btn');
    if(btn){
      const item = btn.closest('.nav-item');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // If viewport is narrow we want click toggles; on wide screens hover handles it.
      if(window.matchMedia('(min-width:861px)').matches){ return; }
      if(item && expanded){ item.classList.remove('show'); btn.setAttribute('aria-expanded','false'); }
      else if(item){ closeAll(); item.classList.add('show'); btn.setAttribute('aria-expanded','true'); }
      return;
    }
    if(!e.target.closest('.nav')) closeAll();
  });

  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape') closeAll();
  });
})();
