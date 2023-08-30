function toggle(...args) {
  const n = args.length;
  let index = 0;

  return function () {
    const result = args[index];
    index++;
    index = index % n;
    return result;
  };
}

const toggledFn = toggle(1);
console.log(toggledFn());
console.log(toggledFn());
console.log(toggledFn());
console.log(toggledFn());
console.log(toggledFn());
console.log(toggledFn());
