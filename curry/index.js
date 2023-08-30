// function curry1() {
//   let result = 0;

//   return function (val = 0) {
//     result += val;
//     return result;
//   };
// }

// const curried1 = curry1();
// console.log(curried1(5));
// console.log(curried1(5));
// console.log(curried1(3));
// console.log(curried1(8));
// console.log(curried1(0));

function curry2(...initialArgs) {
  let result = initialArgs;

  function inner(...args) {
    if (args.length === 0) return result.reduce((acc, val) => acc + val, 0);

    result = [...result, ...args];
    return inner;
  }

  return inner;
}

const total = curry2(1, 1, 1, 1)(2)(3, 3)(4, 4)();
console.log(total);
