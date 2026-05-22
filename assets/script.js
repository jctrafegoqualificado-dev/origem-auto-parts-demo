document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (toggle && menu) toggle.addEventListener('click', () => menu.classList.toggle('open'));

  // FAQ
  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
  });

  // Scroll reveal
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
  }, { threshold: .12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Active nav
  const path = (window.location.pathname.split('/').pop() || 'index.html').replace('.html','');
  document.querySelectorAll('.nav-menu a[data-page]').forEach(a => {
    if (a.dataset.page === path) a.classList.add('active');
  });
});

function enviarWA(e, telWA) {
  e.preventDefault();
  const f = e.target;
  const get = (id) => (f.querySelector('#'+id)?.value || '').trim();
  const nome = get('nome'), tel = get('tel'), carro = get('carro'), peca = get('peca'), msg = get('msg');
  let texto = `Olá! Vim pelo site da ORIGEM Auto Parts.`;
  if (nome) texto += `%0ANome: ${nome}`;
  if (tel) texto += `%0AWhatsApp: ${tel}`;
  if (carro) texto += `%0AVeículo: ${carro}`;
  if (peca) texto += `%0APeça: ${peca}`;
  if (msg) texto += `%0AObs: ${msg}`;
  window.open(`https://wa.me/${telWA||'5511999990000'}?text=${texto}`, '_blank');
}
