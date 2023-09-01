const count = document.getElementById("count");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

const initialValue = 0;
const step = 1;
let result = initialValue;
let timerId = null;

function recursive() {
  result += step;
  changeCount(result);
  clearTimeout(timerId);
  timerId = setTimeout(recursive, 1000);
}

function changeCount(val) {
  count.innerText = `${val}`;
}

start.addEventListener("click", recursive);
stop.addEventListener("click", () => clearTimeout(timerId));

changeCount(result);
