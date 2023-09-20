const grid = document.querySelector(".grid");
let size = 4;
let randomIndex = 0;

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function lightenDarkenColor(col, amt) {
  var usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  if (r > 255) r = 255;
  else if (r < 0) r = 0;
  var b = ((num >> 8) & 0x00ff) + amt;
  if (b > 255) b = 255;
  else if (b < 0) b = 0;
  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function createGrid() {
  const fragment = document.createDocumentFragment();
  const color = getRandomColor();
  const lightColor = lightenDarkenColor(color, 10);
  randomIndex = randomIntFromInterval(0, size * size - 1);

  for (let i = 0; i < size * size; i++) {
    const box = document.createElement("div");

    box.classList.add("box");
    box.style.width = `${100 / size}%`;
    box.style.height = `${100 / size}%`;
    box.style.backgroundColor = color;
    box.dataset.id = i;

    fragment.appendChild(box);
  }

  grid.innerHTML = "";
  grid.appendChild(fragment);
  grid.children[randomIndex].style.backgroundColor = lightColor;
}

function clickHandler(e) {
  const target = e.target;

  if (target && target.classList.contains("box")) {
    const index = Number(target.getAttribute("data-id"));

    if (index === randomIndex) size++;
    else {
      size = 4;
      grid.classList.add("shake");
      setTimeout(() => grid.classList.remove("shake"), 800);
    }

    createGrid();
  }
}

if (grid) {
  createGrid();
  grid.addEventListener("click", clickHandler);
}
