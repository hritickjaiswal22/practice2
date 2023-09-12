const btn = document.querySelector("button");

function print(args) {
  console.log("Print");
  console.log(args);
}

function throttle(fn, delay = 500) {
  let flag = true;

  return function () {
    if (flag) {
      flag = false;

      const ctx = this;
      const args = arguments;

      fn.apply(ctx, args);

      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
}

const throttledPrint = throttle(print, 1000);

btn.addEventListener("click", () => throttledPrint("Hello World"));
