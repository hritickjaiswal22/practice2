const myNew = (constructor, ...args) => {
  if (constructor(...args)) return constructor(...args);

  const obj = {};
  obj.__proto__ = constructor.prototype;

  constructor.apply(obj, args);

  return obj;
};

function BigFrontEnd(name) {
  this.name = name;
}

BigFrontEnd.prototype.code = function () {};
BigFrontEnd.prototype.answer = function () {};
BigFrontEnd.prototype.design = function () {};

console.log(myNew(BigFrontEnd, "dev") instanceof BigFrontEnd);

// function BigFrontEndOther(name) {
//   this.name = name;
//   return {
//     a: 1,
//   };
// }

// const obj = myNew(BigFrontEndOther, "dev");
// // expect(obj).toEqual({ a: 1 });
// console.log(obj);
