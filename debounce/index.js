const btn = document.querySelector("button");

function debounce(
  fn,
  delay = 200,
  option = {
    leading: false,
    trailing: true,
  }
) {
  let timerId = null;
  const { leading, trailing } = option;
  let leadingFlag = true;

  return function () {
    clearTimeout(timerId);

    const args = arguments;
    const ctx = this;

    if (leading && leadingFlag) {
      fn.apply(ctx, args);
      leadingFlag = false;
    }

    timerId = setTimeout(() => {
      if (trailing) {
        fn.apply(ctx, args);
      }
      leadingFlag = true;
    }, delay);
  };
}

function print(args) {
  console.log("Printing");
  console.log(args);
}

const debouncedPrint = debounce(print, 1000, {
  leading: true,
  trailing: true,
});

btn.addEventListener("click", () => debouncedPrint("Hello"));

// IN LEADING OPTION IT WILL FIRE IMMEDIATELY
