function multiple(position) {
  const arr = this;

  if (arr && Array.isArray(arr))
    return arr.reduce((curr, innerArr) => curr * innerArr[position], 1);
}

function extract(i, input) {
  const result = [];
  let temp = "";
  let j = i;

  while (j < input.length && input[j] !== ")") {
    if (input[j] === ",") {
      const num = Number(temp);
      result.push(num);
      temp = "";
    } else temp += input[j];

    j++;
  }

  const num = Number(temp);
  result.push(num);
  temp = "";

  return { result, j };
}

function tuple(input) {
  const result = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") {
      const obj = extract(i + 1, input);
      result.push(obj.result);
      i = obj.j;
    }
  }

  result.multiple = multiple;

  return result;
}

const input = `(1, 2, 3) , (4, 5, 6) ,  (7, 8, 9)`;
const arr = tuple(input);

console.log(arr.multiple(1));
