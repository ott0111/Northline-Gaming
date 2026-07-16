const nav = document.getElementById('mainNav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

const bearingFill = document.getElementById('bearingFill');
const bearingNode = document.getElementById('bearingNode');
const bearingDeg = document.getElementById('bearingDeg');
const topFill = document.getElementById('topProgressFill');

function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
  if (bearingFill) bearingFill.style.height = pct + '%';
  if (bearingNode) bearingNode.style.top = pct + '%';
  if (topFill) topFill.style.width = pct + '%';
  if (bearingDeg) {
    const deg = Math.round((pct / 100) * 360);
    bearingDeg.textContent = 'N ' + String(deg).padStart(3, '0') + '°';
  }
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

const revealEls = document.querySelectorAll('.reveal');
if (revealEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
  revealEls.forEach(el => io.observe(el));
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    const id = this.getAttribute('href');
    if (id && id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        const y = target.getBoundingClientRect().top + window.scrollY - 84;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  });
});

document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = form.querySelector('.status');
    if (status) {
      status.textContent = 'Thanks — we’ve received your note and will follow up shortly.';
      status.classList.add('success');
    }
  });
});
