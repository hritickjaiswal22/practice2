function flatten(obj) {
  const result = {};

  for (const key of Object.keys(obj)) {
    const val = obj[key];

    if (typeof val === "object" || Array.isArray(val)) {
      const innerObj = flatten(val);

      for (const innerKey of Object.keys(innerObj)) {
        result[`${key}.${innerKey}`] = innerObj[innerKey];
      }
    } else result[key] = val;
  }

  return result;
}

console.log(
  flatten({
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
        L: 56,
      },
      Q: [1, 2],
    },
  })
);
