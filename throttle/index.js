// const btn = document.querySelector("button");

// function print(args) {
//   console.log("Print");
//   console.log(args);
// }

// function throttle(fn, delay = 500) {
//   let flag = true;

//   return function () {
//     if (flag) {
//       flag = false;

//       const ctx = this;
//       const args = arguments;

//       fn.apply(ctx, args);

//       setTimeout(() => {
//         flag = true;
//       }, delay);
//     }
//   };
// }

// const throttledPrint = throttle(print, 1000);

// btn.addEventListener("click", () => throttledPrint("Hello World"));

// Under 4 mins
function normalThrottle(fn, delay = 400) {
  let flag = true;

  return function () {
    const ctx = this;
    const args = arguments;

    if (flag) {
      flag = false;
      fn.apply(ctx, args);
      setTimeout(() => (flag = true), delay);
    }
  };
}

// Under 5 mins
function countThrottle(fn, n = 1) {
  let count = 0;

  return function () {
    const ctx = this;
    const args = arguments;

    if (count % n === 0) fn.apply(ctx, args);
    count++;
  };
}

// Under 3 mins
function traillingThrottle(fn, delay = 400) {
  let flag = true;

  return function () {
    const ctx = this;
    const args = arguments;

    if (flag) {
      flag = false;
      setTimeout(() => {
        fn.apply(ctx, args);
        flag = true;
      }, delay);
    }
  };
}

// Under 10 mins
function throttle(
  fn,
  delay = 400,
  option = { leading: true, trailling: true }
) {
  let traillingFlag = true;
  let leadingFlag = true;

  return function () {
    const ctx = this;
    const args = arguments;

    if (leadingFlag && option.leading) {
      leadingFlag = false;
      fn.apply(ctx, args);
      setTimeout(() => (leadingFlag = true), delay);
    }

    //
    if (traillingFlag && option.trailling) {
      traillingFlag = false;
      setTimeout(() => {
        traillingFlag = true;
        fn.apply(ctx, args);
      }, delay);
    }
  };
}

const btn = document.querySelector("button");

function expensive(name) {
  console.log(`Hi ${name} this is expensive`);
}

const optimised = throttle(expensive, 2000, {
  leading: false,
  trailling: true,
});

btn.addEventListener("click", () => optimised("Hritick"));
