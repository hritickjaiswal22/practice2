function flatten(arr, level, maxLevel) {
  if (level === maxLevel) return arr;

  const result = [];

  for (const val of arr) {
    if (Array.isArray(val)) {
      const temp = flatten(val, level + 1, maxLevel);
      result.push(...temp);
    } else {
      result.push(val);
    }
  }

  return result;
}

function flat(arr, depth = 1) {
  if (depth < 1) return arr;
  // your imeplementation here
  const result = [];

  for (const val of arr) {
    if (Array.isArray(val)) {
      const temp = flatten(val, 1, depth);
      result.push(...temp);
    } else result.push(val);
  }

  return result;
}

const arr = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

flat(arr, Infinity);
console.log(arr);
