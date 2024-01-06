function pow(base, power) {
  function find(n) {
    if (n === 0) return 1;
    if (n === 1) return base;

    const half = Math.floor(n / 2);
    const result = pow(base, half);

    if (n & 1) return result * result * base;
    return result * result;
  }

  if (n < 0) return 1 / find(-1 * power);
  return find(power);
}
