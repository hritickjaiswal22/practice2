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
