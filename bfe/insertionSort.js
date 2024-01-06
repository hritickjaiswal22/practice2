function insertionSort(arr) {
  if (arr.length < 2) return arr;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const val = arr[j];

      let k = j - 1;
      while (k >= 0 && arr[k] > val) {
        arr[k + 1] = arr[k];
        k--;
      }

      arr[k + 1] = val;
    }
  }
}

const arr = [5, 4, 3, 2, 1];

insertionSort(arr);

console.log(arr);
