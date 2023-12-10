// gedeeltelijk code van https://dev.to/huericnan/creating-an-image-slider-with-html-css-and-javascript-4jl6 en daarna zelf nog gefixt met de buttons dat ze werken

const slides = document.querySelectorAll("main section:nth-of-type(5) ul li");
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
      const slideWidth = slide.clientWidth;
      slide.style.transform = `translateX(-${index * slideWidth}px)`;
    });
  }


var rightArrow = document.querySelector('main section:nth-of-type(5) > button:first-of-type');
var leftArrow = document.querySelector('main section:nth-of-type(5) > button:last-of-type');


rightArrow.onclick = nextSlide;

leftArrow.onclick = prevSlide;

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

showSlide(currentSlide);