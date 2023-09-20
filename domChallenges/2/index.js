const grid = document.querySelector(".grid");

/*
 * Creates pixel art grid
 * @param el DOM Element
 * @param rows Number of rows
 * @param rows Number of cols
 */
function PixelArt(el, rows, cols) {
  let chosenColor = "#000000";
  let isMouseDown = false;

  function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

  function createGrid() {
    const fragment = document.createDocumentFragment();
    const width = 100 / rows;
    const height = 100 / cols;

    for (let i = 0; i < rows * cols; i++) {
      const box = document.createElement("div");

      box.style.width = `${width}%`;
      box.style.height = `${height}%`;
      box.className = "box";
      if (i >= rows * cols - cols - 1) {
        box.classList.add("colorBox");
        box.style.backgroundColor = getRandomColor();
      }
      box.dataset.id = i;

      fragment.appendChild(box);
    }

    el.innerHTML = "";
    el.appendChild(fragment);
  }

  function clickHandler(e) {
    const target = e.target;
    if (target && target.classList.contains("box")) {
      if (target.classList.contains("colorBox")) {
        chosenColor = target.style.backgroundColor;
      } else {
        target.style.backgroundColor = chosenColor;
      }
    }
  }

  function mouseOverHandler(e) {
    const target = e.target;
    if (target && target.classList.contains("box")) {
      if (isMouseDown) {
        target.style.backgroundColor = chosenColor;
      }
    }
  }

  createGrid();
  el.addEventListener("click", clickHandler);
  el.addEventListener("mouseover", mouseOverHandler);
  el.addEventListener("mousedown", () => (isMouseDown = true));
  el.addEventListener("mouseup", () => (isMouseDown = false));
  el.addEventListener("mouseleave", () => (isMouseDown = false));
}

PixelArt(grid, 11, 10);
