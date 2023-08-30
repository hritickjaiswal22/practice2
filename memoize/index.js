function memoize(fn) {
  const hash = {};

  return function (...args) {
    const str = JSON.stringify(args);
    if (hash[str]) return hash[arg];

    const val = fn(...args);
    hash[str] = val;
    return val;
  };
}
