function myObjectCreate(proto) {
  if (typeof proto !== "object" || proto === null) throw new Error("");
  const obj = {};
  obj.__proto__ = proto;
  return obj;
}

const proto = {};
const a = myObjectCreate(proto);
console.log(Object.getPrototypeOf(Object.create(proto)));
// expect(Object.getPrototypeOf(a)).toBe(proto)
