const progressbarBody = document.querySelector(".progressbar__body");
const btn = document.querySelector("button");
let queue = 0;
const n = 3;

function animate(percent) {
  if (percent < 100) {
    progressbarBody.style.width = `${percent}%`;
    setTimeout(() => animate(percent + 5), (n * 1000) / 25);
  } else {
    progressbarBody.style.width = `0`;
    queue--;
    updateCount();
  }
}

function clickHandler() {
  setTimeout(() => animate(0), queue * n * 1000 + 400);
  queue++;
  updateCount();
}

function updateCount() {
  btn.innerText = `Run ${queue}`;
}

btn.addEventListener("click", clickHandler);
