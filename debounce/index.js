const btn = document.querySelector("button");

function debounce(fn, delay = 200) {
  let timerId = null;

  return function () {
    clearTimeout(timerId);

    const args = arguments;
    const ctx = this;

    timerId = setTimeout(() => {
      fn.apply(ctx, args);
    }, delay);
  };
}

function print(args) {
  console.log("Printing");
  console.log(args);
}

const debouncedPrint = debounce(print);

btn.addEventListener("click", () => debouncedPrint("Hello"));
