// inner.valueOf = () => result.reduce((acc, val) => acc + val, 0);

function sum(num) {
  const initialValue = num;
  let result = initialValue;

  function inner(val) {
    result += val;

    return inner;
  }
  inner.valueOf = (val) => {
    const temp = result;
    result = initialValue;
    return temp;
  };

  return inner;
}

const sum1 = sum(1);
console.log(sum1(1) == 2);
console.log(sum1(2) == 3);
// expect(sum1(1) == 2).toBe(true);
// expect(sum1(2) == 3).toBe(true);
