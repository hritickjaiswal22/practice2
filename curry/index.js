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

function curry2(initialValue = 0) {
  let result = initialValue;

  function inner(val) {
    if (val === undefined) return result;

    result += val;
    return inner;
  }

  return inner;
}

const total = curry2(10)(20)(30)(40)();
console.log(total);
