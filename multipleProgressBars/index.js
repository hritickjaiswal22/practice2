const body = document.querySelector("body");
const btn = document.querySelector("button");
let queue = 0;
let current = 0;

function addProgressBar() {
  const progressContainer = document.createElement("div");
  const progress = document.createElement("div");

  progressContainer.className = "progressContainer";
  progress.className = "progress";

  progressContainer.appendChild(progress);
  body.appendChild(progressContainer);
}

function clickHandler(params) {
  addProgressBar();
  queue++;

  setTimeout(animate, (queue - 1) * 3000);
}

function animate() {
  const progressBars = document.querySelectorAll(".progress");

  progressBars[current].classList.add("animate");
  current++;

  setTimeout(() => queue--, 3000);
}

btn.addEventListener("click", clickHandler);
