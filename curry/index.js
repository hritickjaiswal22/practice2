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

// function curry2(...initialArgs) {
//   let result = initialArgs;

//   function inner(...args) {
//     if (args.length === 0) return result.reduce((acc, val) => acc + val, 0);

//     result = [...result, ...args];
//     return inner;
//   }

//   return inner;
// }

// const total = curry2(1, 1, 1, 1)(2)(3, 3)(4, 4)();
// console.log(total);

function sum(a, b, c, d) {
  return a + b + c + d;
}

function curry(fn) {
  const argsLength = fn.length;
  let result = [];

  function inner(...args) {
    result.push(...args);

    if (result.length >= argsLength) {
      const temp = result.slice(0, argsLength);
      result = [];
      return fn(...temp);
    }

    return inner;
  }

  return inner;
}

const curried3 = curry(sum);

console.log(curried3(1, 2, 3, 4));
console.log(curried3()(2, 3)(4)(1));
console.log(curried3(1)(2)(3)(4));
