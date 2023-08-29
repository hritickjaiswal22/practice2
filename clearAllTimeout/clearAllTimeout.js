const originalSetTimeout = window.setTimeout;
const timerIds = [];

window.setTimeout = function (fn, time) {
  const id = originalSetTimeout(fn, time);

  timerIds.push(id);

  return id;
};

function clearAllTimeout() {
  while (timerIds.length) {
    clearTimeout(timerIds.pop());
  }
}

setTimeout(() => {
  console.log("1");
}, 1000);

setTimeout(() => {
  console.log("2");
}, 2000);

setTimeout(() => {
  clearAllTimeout();
}, 2500);

setTimeout(() => {
  console.log("3");
}, 3000);

setTimeout(() => {
  console.log("4");
}, 4000);

setTimeout(() => {
  console.log("5");
}, 5000);
