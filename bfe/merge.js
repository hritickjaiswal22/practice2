function merge(arrList) {
  if (arrList.length === 0) return [];

  let result = arrList.pop();

  while (arrList.length) {
    const temp = [];
    const arr = arrList.pop();
    let i = 0;
    let j = 0;

    while (i < result.length && j < arr.length) {
      if (result[i] <= arr[j]) {
        temp.push(result[i]);
        i++;
      } else {
        temp.push(arr[j]);
        j++;
      }
    }

    while (i < result.length) {
      temp.push(result[i]);
      i++;
    }

    while (j < arr.length) {
      temp.push(arr[j]);
      j++;
    }

    result = temp;
  }

  return result;
}

console.log(
  merge([
    [1, 1, 1, 100, 1000, 10000],
    [1, 2, 2, 2, 200, 200, 1000],
    [1000000, 10000001],
    [2, 3, 3],
  ])
);
