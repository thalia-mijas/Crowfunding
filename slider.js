let slideIndex = 1;
let autoplayInterval = null;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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

function startAutoplay(interval) {
  autoplayInterval = setInterval(() => {
    plusSlides(1); // Navega a la siguiente imagen cada intervalo de tiempo.
  }, interval);
}

// Iniciar autoplay con un intervalo de 3 segundos.
startAutoplay(3000);
