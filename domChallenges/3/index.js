const board = document.querySelector(".board");
const rows = 8;
const columns = rows;

function createBoard() {
  const fragment = document.createDocumentFragment();
  let alternate = 0;

  for (let i = 0; i < rows; i++) {
    alternate++;
    for (let j = 0; j < columns; j++) {
      const box = document.createElement("div");

      box.className = "box";
      box.style.width = `${100 / rows}%`;
      box.style.height = `${100 / columns}%`;
      if (alternate & 1 && j & 1) {
        box.style.backgroundColor = "#000000";
      }
      if (!(alternate & 1) && !(j & 1)) {
        box.style.backgroundColor = "#000000";
      }
      box.dataset.row = i;
      box.dataset.column = j;

      fragment.appendChild(box);
    }
  }

  board.innerHTML = "";
  board.appendChild(fragment);
}

function fillTopLeft(row, column) {
  const boxes = board.children;

  while (row >= 0 && column >= 0) {
    const index = row * columns + column;

    boxes[index].style.backgroundColor = "red";

    row--;
    column--;
  }
}

function fillTopRight(row, column) {
  const boxes = board.children;

  while (row >= 0 && column < columns) {
    const index = row * columns + column;

    boxes[index].style.backgroundColor = "red";

    row--;
    column++;
  }
}

function fillBottomLeft(row, column) {
  const boxes = board.children;

  while (row < rows && column >= 0) {
    const index = row * columns + column;

    boxes[index].style.backgroundColor = "red";

    row++;
    column--;
  }
}

function fillBottomRight(row, column) {
  const boxes = board.children;

  while (row < rows && column < columns) {
    const index = row * columns + column;

    boxes[index].style.backgroundColor = "red";

    row++;
    column++;
  }
}

function onClickHandler(e) {
  const target = e.target;

  if (target && target.classList.contains("box")) {
    const row = Number(target.getAttribute("data-row"));
    const column = Number(target.getAttribute("data-column"));

    fillTopLeft(row, column);
    fillTopRight(row, column);
    fillBottomLeft(row, column);
    fillBottomRight(row, column);
  }
}

if (board) {
  createBoard();
  board.addEventListener("click", onClickHandler);
}
