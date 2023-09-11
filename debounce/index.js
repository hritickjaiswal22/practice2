const btn = document.querySelector("button");

function debounce(fn, delay = 200, leading) {
  let timerId = null;
  let count = 0;

  return function () {
    clearTimeout(timerId);

    const args = arguments;
    const ctx = this;

    if (leading && !count) {
      fn.apply(ctx, args);
    }

    count++;
    timerId = setTimeout(() => {
      fn.apply(ctx, args);
      count = 0;
    }, delay);
  };
}

function print(args) {
  console.log("Printing");
  console.log(args);
}

const debouncedPrint = debounce(print, 1000, true);

btn.addEventListener("click", () => debouncedPrint("Hello"));

// IN LEADING OPTION IT WILL FIRE IMMEDIATELY
