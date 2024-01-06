function add(num1, num2) {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let carry = 0;
  let result = "";

  while (i >= 0 && j >= 0) {
    const val1 = Number(num1[i]);
    const val2 = Number(num2[j]);

    result += (val1 + val2 + carry) % 10;
    carry = Math.floor((val1 + val2) / 10);

    i--;
    j--;
  }

  while (i >= 0) {
    const val1 = Number(num1[i]);

    result += (val1 + carry) % 10;
    carry = Math.floor((val1 + val1) / 10);

    i--;
  }

  while (j >= 0) {
    const val2 = Number(num2[j]);

    result += (val2 + carry) % 10;
    carry = Math.floor((val2 + val2) / 10);

    j--;
  }

  if (carry) result += carry;

  const temp = result;
  result = "";

  for (let i = temp.length - 1; i >= 0; i--) {
    result += temp[i];
  }

  return result;
}

console.log(add("999999999999999999", "1"));
