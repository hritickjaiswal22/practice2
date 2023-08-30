function sampler(fn, n) {
  let count = 0;

  return function () {
    count++;
    count = count % n;
    if (count === 0) return fn();
  };
}

const sampled = sampler(() => console.log("Hello World"), 2);
sampled();
sampled();
sampled();
sampled();
sampled();
sampled();
sampled();
sampled();
