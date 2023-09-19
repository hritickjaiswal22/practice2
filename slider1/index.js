const slider = document.querySelector(".slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = [
  "https://wallpapercave.com/wp/o0o0JI8.jpg",
  "https://cdn.wallpapersafari.com/13/26/0LbGYl.jpg",
  "https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341392/EducationHub/photos/saguaro-cacti.jpg",
  "https://cdn.wallpapersafari.com/53/62/l6bruO.jpg",
];
const sliderWidth = slider.getBoundingClientRect().width;
let current = 0;

function createSlider() {
  const fragment = document.createDocumentFragment();

  images.forEach((image, index) => {
    const slide = document.createElement("div");
    const img = document.createElement("img");

    img.src = image;
    slide.className = "slide";
    slide.style.left = `${index * sliderWidth}px`;

    slide.appendChild(img);
    fragment.appendChild(slide);
  });

  slider.innerHTML = "";
  slider.appendChild(fragment);
}

function slide(width) {
  const slides = document.querySelectorAll(".slide");

  slides.forEach((slide) => {
    let left = slide.style.left;
    left = left.substring(0, left.length - 2);
    left = Number(left);
    left = left + width;
    slide.style.left = `${left}px`;
  });
}

function nextSlide() {
  current++;
  const slides = document.querySelectorAll(".slide");

  if (slides) {
    if (current >= images.length) {
      slides.forEach((slide, index) => {
        slide.style.left = `${index * sliderWidth}px`;
      });

      current = 0;
    } else {
      slide(-1 * sliderWidth);
    }
  }
}

function prevSlide() {
  current--;
  const slides = document.querySelectorAll(".slide");

  if (current < 0) {
    let j = 0;
    for (let i = slides.length - 1; i >= 0; i--) {
      const slide = slides[i];

      slide.style.left = `${-1 * j * sliderWidth}px`;
      j++;
    }

    current = images.length - 1;
  } else slide(sliderWidth);
}

createSlider();
next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
