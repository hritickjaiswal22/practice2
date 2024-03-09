const container = document.getElementById("container");
let isInsideContainer = false;

function onMouseEnter() {
  isInsideContainer = true;
}

function onMouseLeave(params) {
  isInsideContainer = false;
}

function onWheel(e) {
  if (isInsideContainer) {
    e.preventDefault();
    const { wheelDeltaY } = e;

    if (wheelDeltaY < 0) {
      container.scrollLeft += 20;
    } else {
      container.scrollLeft -= 20;
    }
  }
}

container.addEventListener("mouseenter", onMouseEnter);
container.addEventListener("mouseleave", onMouseLeave);
container.addEventListener("wheel", onWheel);
