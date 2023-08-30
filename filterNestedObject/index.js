function filter(obj, fn) {
  const result = {};

  for (const key of Object.keys(obj)) {
    const val = obj[key];

    if (typeof val === "object") {
      const returnedObj = filter(val, fn);
      if (returnedObj) result[key] = returnedObj;
    } else {
      if (fn(val)) result[key] = val;
    }
  }

  if (Object.keys(result).length === 0) return null;
  return result;
}

function check(n) {
  return n >= 0;
}

console.log(
  filter(
    {
      a: 1,
      b: {
        c: 2,
        d: -3,
        e: {
          f: {
            g: -4,
          },
        },
        h: {
          i: 5,
          j: 6,
        },
      },
    },
    check
  )
);
