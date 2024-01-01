// const btn = document.querySelector("button");

// function debounce(
//   fn,
//   delay = 200,
//   option = {
//     leading: false,
//     trailing: true,
//   }
// ) {
//   let timerId = null;
//   const { leading, trailing } = option;
//   let leadingFlag = true;

//   return function () {
//     clearTimeout(timerId);

//     const args = arguments;
//     const ctx = this;

//     if (leading && leadingFlag) {
//       fn.apply(ctx, args);
//       leadingFlag = false;
//     }

//     timerId = setTimeout(() => {
//       if (trailing) {
//         fn.apply(ctx, args);
//       }
//       leadingFlag = true;
//     }, delay);
//   };
// }

// function print(args) {
//   console.log("Printing");
//   console.log(args);
// }

// const debouncedPrint = debounce(print, 1000, {
//   leading: true,
//   trailing: true,
// });

// btn.addEventListener("click", () => debouncedPrint("Hello"));

// // IN LEADING OPTION IT WILL FIRE IMMEDIATELY

// Normal debounce under 5 mins
function normalDebounce(fn, delay = 400) {
  let timerId = null;

  return function () {
    clearTimeout(timerId);

    const args = arguments;
    const ctx = this;

    timerId = setTimeout(() => fn.apply(ctx, args), delay);
  };
}

// Leading debunce under 5 mins
function leadingDebounce(fn, delay = 400) {
  let timerId = null;
  let flag = true;

  return function () {
    clearTimeout(timerId);

    const args = arguments;
    const ctx = this;

    if (flag) {
      fn.apply(ctx, args);
      flag = false;
    }

    timerId = setTimeout(() => (flag = true), delay);
  };
}

// Under 5 mins
function debounce(
  fn,
  delay = 400,
  option = { leading: false, trailing: true }
) {
  let timerId = null;
  let flag = true;

  return function () {
    clearTimeout(timerId);

    const args = arguments;
    const ctx = this;

    if (flag && option.leading) {
      fn.apply(ctx, args);
      flag = false;
    }

    timerId = setTimeout(() => {
      if (option.leading) flag = true;

      if (option.trailing) fn.apply(ctx, args);
    }, delay);
  };
}

function expensive(name) {
  console.log(`Hi ${name} this is expensive`);
}

const optimised = debounce(expensive, 500, {
  leading: false,
  trailing: false,
});

const btn = document.querySelector("button");

btn.addEventListener("click", () => optimised("Hritick"));
