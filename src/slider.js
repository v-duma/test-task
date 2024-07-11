const slides = document.querySelector('.slides');
const indicators = document.querySelectorAll('.indicator');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

function showNextSlide() {
  currentIndex++;
  if (currentIndex >= slideCount) {
    currentIndex = 0;
  }
  updateSlidePosition();
  updateIndicators();
}

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updateIndicators() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateSlidePosition();
    updateIndicators();
  });
});

setInterval(showNextSlide, 3000);
