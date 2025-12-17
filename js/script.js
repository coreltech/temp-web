// Mostrar/Ocultar menú móvil
document.querySelector('.mobile-toggle').addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Simular preloader
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('preloader').style.display = 'none';
  }, 2500);
});

// Formulario de newsletter (simulado)
document.querySelector('.newsletter-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('¡Gracias por suscribirte! Pronto recibirás luz en tu bandeja.');
  e.target.reset();
});