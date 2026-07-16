// Simple accessible nav dropdowns
(function(){
  function closeAll(){
    document.querySelectorAll('.nav-item.has-dropdown').forEach(i=>{
      i.classList.remove('show');
      const b = i.querySelector('.nav-btn'); if(b) b.setAttribute('aria-expanded','false');
    });
  }
  document.addEventListener('click', (e)=>{
    const btn = e.target.closest('.nav-btn');
    if(btn){
      const item = btn.closest('.nav-item');
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      closeAll();
      if(!expanded && item) { item.classList.add('show'); btn.setAttribute('aria-expanded','true'); }
      return;
    }
    if(!e.target.closest('.nav')) closeAll();
  });
  document.addEventListener('keydown',(e)=>{
    if(e.key === 'Escape') closeAll();
  });
})();
