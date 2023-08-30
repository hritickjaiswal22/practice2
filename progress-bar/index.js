const progress = document.querySelector(".progress");
const count = document.getElementById("count");
const btn = document.getElementById("btn");
const n = 5;
const time = n / 10;
let result = 0;

function setCountView() {
  count.innerText = result;
}

function enque() {
  result++;
  setTimeout(() => animate(0), (result - 1) * (n + 1) * 1000);
  setCountView();
}

function animate(val) {
  let temp = val;
  temp += 10;

  progress.style.width = `${temp}%`;
  if (temp < 100) setTimeout(() => animate(temp), time * 1000);
  else {
    progress.style.width = `${0}%`;
    result--;
    setCountView();
  }
}

btn.addEventListener("click", enque);
