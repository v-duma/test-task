const prevButtonBlog = document.querySelector('.prev-blog');
const nextButtonBlog = document.querySelector('.next-blog');
const sliderContainerBlog = document.querySelector('.slider-container-blog');

let currentIndexBlog = 0;
prevButtonBlog.addEventListener('click', () => {
  if (currentIndexBlog > 0) {
    currentIndexBlog--;
    updateSliderPositionBlog();
  }
});

nextButtonBlog.addEventListener('click', () => {
  if (currentIndexBlog < sliderContainerBlog.children.length - 1) {
    currentIndexBlog++;
    updateSliderPositionBlog();
  }
});

function updateSliderPositionBlog() {
  const slideWidthBlog = sliderContainerBlog.children[0].offsetWidth;
  sliderContainerBlog.style.transform = `translateX(-${
    currentIndexBlog * slideWidthBlog
  }px)`;
}

let startXBlog;
let endXBlog;

sliderContainerBlog.addEventListener('touchstart', event => {
  startXBlog = event.touches[0].clientX;
});

sliderContainerBlog.addEventListener('touchmove', event => {
  endXBlog = event.touches[0].clientX;
});

sliderContainerBlog.addEventListener('touchend', () => {
  if (startXBlog > endXBlog + 50) {
    if (currentIndexBlog < sliderContainerBlog.children.length - 1) {
      currentIndexBlog++;
      updateSliderPositionBlog();
    }
  } else if (startXBlog < endXBlog - 50) {
    if (currentIndexBlog > 0) {
      currentIndexBlog--;
      updateSliderPositionBlog();
    }
  }
});
