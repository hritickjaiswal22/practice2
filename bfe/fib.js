function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let prev1 = 1;
  let prev2 = 1;

  for (let i = 0; i < n - 2; i++) {
    const sum = prev1 + prev2;
    prev1 = prev2;
    prev2 = sum;
  }

  return prev2;
}
