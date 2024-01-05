function pipe(funcs) {
  return function (x) {
    let result = x;

    for (const fn of funcs) {
      result = fn(result);
    }

    return result;
  };
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;

console.log(pipe([times(2), plus(3), times(4)])(1));
