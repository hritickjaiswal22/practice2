const canvas = document.getElementById("canvas");
const radius = 100;
const centers = [];

function createCircle(left, top) {
  const circle = document.createElement("div");
  circle.className = "circle";

  circle.style.width = `${2 * radius}px`;
  circle.style.height = `${2 * radius}px`;
  circle.style.left = `${left}px`;
  circle.style.top = `${top}px`;

  return circle;
}

function getrandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function mouseUpHandler(e) {
  if (e) {
    const { x, y } = e;

    const canvasLeft = canvas.getBoundingClientRect().x;
    const canvasTop = canvas.getBoundingClientRect().y;

    const circle = createCircle(
      x - canvasLeft - radius,
      y - canvasTop - radius
    );

    for (const center of centers) {
      if (
        Math.sqrt(
          (center.x - (x - canvasLeft)) * (center.x - (x - canvasLeft)) +
            (center.y - (y - canvasTop)) * (center.y - (y - canvasTop))
        ) <=
        2 * radius
      ) {
        circle.style.backgroundColor = getrandomColor();
      }
    }

    centers.push({ x: x - canvasLeft, y: y - canvasTop });
    canvas.appendChild(circle);
  }
}

canvas.addEventListener("mouseup", mouseUpHandler);

console.log(canvas.getBoundingClientRect());
