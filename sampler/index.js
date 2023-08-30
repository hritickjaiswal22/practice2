function sampler(fn, n) {
  let count = 0;

  return function (...args) {
    count++;
    count = count % n;
    if (count === 0) return fn(...args);
  };
}

function message(...args) {
  console.log("Hello World");
  console.log(args);
}

const sampled = sampler(message, 4);
sampled();
sampled();
sampled();
sampled(1, 2, 3);
sampled();
sampled();
sampled();
sampled();
