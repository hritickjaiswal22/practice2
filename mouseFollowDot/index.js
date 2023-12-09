const animationSection = document.getElementById("animation-section");
const dot = document.getElementById("dot");

function mousemoveHandler(e) {
  const { x, y } = e;

  positionDot(x, y);
}

function positionDot(x, y) {
  const { left, right, top, bottom } = animationSection.getBoundingClientRect();

  if (x >= left && x <= right && y >= top && y <= bottom) {
    // dot.style.left = `${x}px`;
    // dot.style.top = `${y}px`;

    // dot.style.left = `${x - dot.clientWidth / 2}px`;
    // dot.style.top = `${y - dot.clientHeight / 2}px`;

    dot.style.transform = `translate(${x - dot.clientWidth / 2}px,${
      y - dot.clientHeight / 2
    }px)`;
  }
}

animationSection.addEventListener("mousemove", mousemoveHandler);
