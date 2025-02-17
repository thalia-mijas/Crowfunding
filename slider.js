let slideIndex = 1;
let autoplayInterval = null;

//Visualizar imagen anterior o siguiente con prev o next
function plusSlides(n) {
  showSlides((slideIndex += n));
}

//Visualizar imagen que se elige en el selector
function currentSlide(n) {
  showSlides((slideIndex = n));
}

//Cambia el estado de las imagenes en el slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" img-active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " img-active";
}
showSlides(slideIndex);

// Navega a la siguiente imagen cada intervalo de tiempo.
function startAutoplay(interval) {
  autoplayInterval = setInterval(() => {
    plusSlides(1);
  }, interval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);
