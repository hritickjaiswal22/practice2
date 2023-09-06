const canvas = document.getElementById("canvas");
const canvasLeft = canvas.getBoundingClientRect().x;
const canvasTop = canvas.getBoundingClientRect().y;
const circles = [];
let centerX = 0;
let centerY = 0;
let currentRadius = 0;
let isMouseDown = false;

function createCircle(left, top) {
  const circle = document.createElement("div");
  circle.className = "circle";

  circle.style.width = `${2 * currentRadius}px`;
  circle.style.height = `${2 * currentRadius}px`;
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;

  return circle;
}

function getrandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function mouseDownHandler(e) {
  if (e) {
    const { x, y } = e;
    isMouseDown = true;

    centerX = x - canvasLeft;
    centerY = y - canvasTop;
  }
}

function mouseUpHandler(e) {
  const htmlCircle = createCircle(
    centerX - currentRadius,
    centerY - currentRadius
  );

  for (const circle of circles) {
    if (
      Math.sqrt(
        (circle.x - centerX) * (circle.x - centerX) +
          (circle.y - centerY) * (circle.y - centerY)
      ) <=
      circle.radius + currentRadius
    ) {
      htmlCircle.style.backgroundColor = getrandomColor();
    }
  }

  canvas.appendChild(htmlCircle);
  circles.push({
    x: centerX,
    y: centerY,
    radius: currentRadius,
  });

  isMouseDown = false;
  currentRadius = 0;
}

function mouseMoveHandler(e) {
  if (isMouseDown && e) {
    const { x, y } = e;
    const X = x - canvasLeft;
    const Y = y - canvasTop;

    currentRadius = Math.sqrt(
      (X - centerX) * (X - centerX) + (Y - centerY) * (Y - centerY)
    );
  }
}

canvas.addEventListener("mousedown", mouseDownHandler);
canvas.addEventListener("mouseup", mouseUpHandler);
canvas.addEventListener("mousemove", mouseMoveHandler);
