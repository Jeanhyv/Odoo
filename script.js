const slides = [...document.querySelectorAll(".slide")];
const counter = document.querySelector("#counter");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let current = 0;

function showSlide(index) {
  current = (index + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === current);
  });

  counter.textContent = `${current + 1} / ${slides.length}`;
}

function nextSlide() {
  showSlide(current + 1);
}

function prevSlide() {
  showSlide(current - 1);
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === "PageDown" || event.key === " ") {
    event.preventDefault();
    nextSlide();
  }

  if (event.key === "ArrowLeft" || event.key === "PageUp") {
    event.preventDefault();
    prevSlide();
  }

  if (event.key === "Home") showSlide(0);
  if (event.key === "End") showSlide(slides.length - 1);
});

showSlide(0);
