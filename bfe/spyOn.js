function spyOn(obj, methodName) {
  if (!obj[methodName]) throw "Method not available";

  const originalMethod = obj[methodName];
  const result = [];

  obj[methodName] = function (...args) {
    result.push(args);

    return originalMethod.apply(obj, args);
  };

  return {
    calls: result,
  };
}

const obj = {
  data: 1,
  increment(num) {
    this.data += num;
  },
};

const spy = spyOn(obj, "increment");

obj.increment(1);

console.log(obj.data); // 2

obj.increment(2);

console.log(obj.data); // 4

console.log(spy.calls);
// [ [1], [2] ]
