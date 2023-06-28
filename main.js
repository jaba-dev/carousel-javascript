const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll("span");

let currentIndex = 0;

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    slides.forEach((slide) => {
      let amount = (currentIndex + 1) * 100;
      slide.style.transform = "translateX(-" + amount + "%)";
    });
    dots[currentIndex].classList.remove("active");
    dots[currentIndex + 1].classList.add("active");
    currentIndex++;
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    slides.forEach((slide) => {
      let currentTranslation = parseInt(
        slide.style.transform.split("").slice(11, 15).join("")
      );
      let realAmount = currentTranslation + 100;
      slide.style.transform = "translateX(" + realAmount + "%)";
    });
    dots[currentIndex].classList.remove("active");
    dots[currentIndex - 1].classList.add("active");
    currentIndex--;
  }
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", (e) => {
    if (index > currentIndex) {
      for (let i = 1; i <= index; i++) {
        nextSlide();
      }
    }
    if (index < currentIndex && currentIndex === 3) {
      for (let i = index; i <= currentIndex; i++) {
        prevSlide();
      }
    }
    if (index < currentIndex) {
      for (let i = index; i <= currentIndex; i++) {
        prevSlide();
      }
    }
  });
});
