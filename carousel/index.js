// Around 35 mins

const images = [
  "https://wallpapers-clan.com/wp-content/uploads/2023/10/naruto-itachi-uchiha-with-red-eyes-desktop-wallpaper-preview.jpg",
  "https://dailyanimeart.files.wordpress.com/2015/07/young-might-guy.jpg",
];
const container = document.getElementById("container");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let currentIndex = 0;

function createCarousel() {
  container.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    const slide = document.createElement("div");
    const img = document.createElement("img");

    slide.className = "slide";
    slide.style.left = `${i * 100}%`;
    img.src = image;
    slide.appendChild(img);

    fragment.appendChild(slide);
  }

  container.appendChild(fragment);
}

function slideNext() {
  currentIndex++;
  if (currentIndex >= images.length) currentIndex = 0;

  slide();
}

function slidePrev() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = images.length - 1;

  slide();
}

function slide() {
  const slides = document.querySelectorAll(".slide");
  let temp = -1 * currentIndex;

  for (const slide of slides) {
    slide.style.left = `${temp * 100}%`;
    temp++;
  }
}

createCarousel();
next.addEventListener("click", slideNext);
prev.addEventListener("click", slidePrev);
