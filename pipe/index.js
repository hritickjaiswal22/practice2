// function pipe(parentObj) {
//   function find(obj, argsArr) {
//     const result = {};

//     for (const key of Object.keys(obj)) {
//       const val = obj[key];

//       if (typeof val === "function") {
//         result[key] = val(...argsArr);
//       } else if (typeof val === "object" && !Array.isArray(val)) {
//         const returnedObj = find(val, argsArr);

//         if (returnedObj) result[key] = returnedObj;
//       } else result[key] = val;
//     }

//     if (Object.keys(result).length === 0) return null;
//     return result;
//   }

//   return function (...args) {
//     return find(parentObj, args);
//   };
// }

// console.log(
//   pipe({
//     a: {
//       b: (x, y, z) => x + y + z,
//       c: (x, y, z) => x + y - z,
//     },
//     d: (x, y, z) => x - y - z,
//   })(1, 1, 1)
// );

function pipe(...fns) {
  return function (val) {
    let temp = val;

    for (const fn of fns) {
      temp = fn(temp);
    }

    return temp;
  };
}
