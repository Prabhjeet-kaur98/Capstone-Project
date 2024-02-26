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




function filterProducts(category) {
    var cards = document.querySelectorAll('.product-card');
    var buttons = document.querySelectorAll('.filter-btn');
  
    cards.forEach(function(card) {
      card.style.display = card.classList.contains(category) ? 'block' : 'none';
    });
  
    buttons.forEach(function(button) {
      if (button.textContent.toLowerCase().includes(category)) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  }
  
  // Event listener for DOMContentLoaded to set default filter
  document.addEventListener('DOMContentLoaded', function() {
    filterProducts('new'); // Set 'new' as the default filter
  });
  
  

