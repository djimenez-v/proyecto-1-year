function irA(pagina) {
  document.body.style.opacity = '0';
  setTimeout(() => {
    location.href = pagina;
  }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
  document.body.style.opacity = '1';

  // Animación escalonada para los botones
  const botones = document.querySelectorAll('.boton-indice');
  botones.forEach((boton, i) => {
    boton.style.animationDelay = `${0.5 + i * 0.3}s`;
  });
});
