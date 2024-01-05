// // function curry1() {
// //   let result = 0;

// //   return function (val = 0) {
// //     result += val;
// //     return result;
// //   };
// // }

// // const curried1 = curry1();
// // console.log(curried1(5));
// // console.log(curried1(5));
// // console.log(curried1(3));
// // console.log(curried1(8));
// // console.log(curried1(0));

// // function curry2(...initialArgs) {
// //   let result = initialArgs;

// //   function inner(...args) {
// //     if (args.length === 0) return result.reduce((acc, val) => acc + val, 0);

// //     result = [...result, ...args];
// //     return inner;
// //   }

// //   return inner;
// // }

// // const total = curry2(1, 1, 1, 1)(2)(3, 3)(4, 4)();
// // console.log(total);

// // function sum(a, b, c, d) {
// //   return a + b + c + d;
// // }

// // function curry(fn) {
// //   const argsLength = fn.length;
// //   let result = [];

// //   function inner(...args) {
// //     result.push(...args);

// //     if (result.length >= argsLength) {
// //       const temp = result.slice(0, argsLength);
// //       result = [];
// //       return fn(...temp);
// //     }

// //     return inner;
// //   }

// //   return inner;
// // }

// // const curried3 = curry(sum);

// // console.log(curried3(1, 2, 3, 4));
// // console.log(curried3()(2, 3)(4)(1));
// // console.log(curried3(1)(2)(3)(4));

// function curry4(...initialArgs) {
//   let result = initialArgs;

//   function inner(...args) {
//     result = [...result, ...args];

//     return inner;
//   }
//   inner.value = () => result.reduce((acc, val) => acc + val, 0);
//   inner.valueOf = () => result.reduce((acc, val) => acc + val, 0);

//   return inner;
// }

// console.log(curry4(1, 2)(3, 4, 5) + 5);

const join = (a, b, c) => {
  return `${a}_${b}_${c}`;
};

// function curry(fn) {
//   const len = fn.length;
//   let result = [];

//   function inner(...args) {
//     result.push(...args);
//     while (result.length > len) {
//       result.pop();
//     }
//     if (result.length === len) {
//       const temp = [...result];
//       result = [];
//       return fn(...temp);
//     }

//     return inner;
//   }

//   return inner;
// }

// const curriedJoin = curry(join);
// console.log(curriedJoin(1, 2, 3));
// console.log(curriedJoin(1)(2, 3));
// console.log(curriedJoin(1, 2)(3));
// console.log(curry(join)(1, 2, 3, 4));

function curry(fn) {
  const len = fn.length;
  const result = [];

  function inner(...args) {
    if (result.length + args.length >= len) {
      const temp1 = [...result];
      const temp2 = [];

      while (temp1.length + temp2.length !== len) {
        temp2.push(args.shift());
      }
      return fn(...temp1, ...temp2);
    }
    result.push(...args);

    return inner;
  }

  return inner;
}

const curriedJoin = curry(join);
console.log(curriedJoin(1, 2, 3));
console.log(curriedJoin(1)(2, 3));
console.log(curriedJoin(1, 2)(3));
console.log(curry(join)(1, 2, 3, 4));

// const curried = curry(join)(1, 2);
// console.log(curried(3));
// console.log(curried(4));
// expect(curried(3)).toBe('1_2_3')
// expect(curried(4)).toBe('1_2_4')
