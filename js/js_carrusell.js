document.addEventListener("DOMContentLoaded", () => {
  const carrusel = document.getElementById("carrusel");
  const textoFinal = document.getElementById("texto-final");
  const botonFinal = document.getElementById("boton-final");
  const imagenes = carrusel.querySelectorAll(".imagenes img");
  const prevBtn = carrusel.querySelector(".nav.prev");
  const nextBtn = carrusel.querySelector(".nav.next");

  const titulo = document.querySelector("h1.texto-inicial");
  const parrafoInicial = document.querySelector("p.texto-inicial");

  let indice = 0;
  let intervalo;

  const duracionImagen = 4000;
  const tiempoInicioCarrusel = 5000;
  const tiempoTextoFinal = 12000; // Mostrar texto final y botón a los 12 segundos

  function mostrarImagen(index) {
    imagenes.forEach((img, i) => {
      img.classList.remove("activa");
    });
    imagenes[index].classList.add("activa");
  }

  function siguienteImagen() {
    indice = (indice + 1) % imagenes.length;
    mostrarImagen(indice);
  }

  function anteriorImagen() {
    indice = (indice - 1 + imagenes.length) % imagenes.length;
    mostrarImagen(indice);
  }

  prevBtn.addEventListener("click", () => {
    anteriorImagen();
    resetIntervalo();
  });

  nextBtn.addEventListener("click", () => {
    siguienteImagen();
    resetIntervalo();
  });

  function resetIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(siguienteImagen, duracionImagen);
  }

  // Mostrar título al cargar
  setTimeout(() => {
    titulo.classList.remove("oculto");
    titulo.classList.add("fade-in-chill");
  }, 0);

  // Mostrar párrafo inicial a los 500ms
  setTimeout(() => {
    parrafoInicial.classList.remove("oculto");
    parrafoInicial.classList.add("fade-in-chill");
  }, 500);

  // Mostrar carrusel a los 5 segundos
  setTimeout(() => {
    carrusel.classList.remove("oculto");
    carrusel.classList.add("fade-in-chill");
    mostrarImagen(indice);
    intervalo = setInterval(siguienteImagen, duracionImagen);
  }, tiempoInicioCarrusel);

  // Mostrar texto final a los 12 segundos
  setTimeout(() => {
    textoFinal.classList.remove("oculto");
    textoFinal.classList.add("fade-in-chill");

    botonFinal.classList.remove("oculto");
    botonFinal.classList.add("fade-in-chill");
  }, tiempoTextoFinal);
});
