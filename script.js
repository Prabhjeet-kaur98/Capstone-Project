function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const overlay = document.querySelector('.overlay');
    navLinks.classList.toggle('active');
    overlay.classList.toggle('active');
}
// Function for crousel slides
let currentSlideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) index = 0;
  if (index < 0) index = slides.length - 1;

  for (let slide of slides) {
    slide.style.display = 'none';
  }

  slides[index].style.display = 'block';
  currentSlideIndex = index;
}

function nextSlide() {
  showSlide(currentSlideIndex + 1);
}

function previousSlide() {
  showSlide(currentSlideIndex - 1);
}

// Initially display the first slide
showSlide(currentSlideIndex);


setInterval(nextSlide, 3000);

