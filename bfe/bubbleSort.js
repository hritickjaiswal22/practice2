function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        swapped = true;
        swap(arr, j, j + 1);
      }
    }

    if (!swapped) return;
  }
}

const arr = [5, 4, 3, 2, 1];

bubbleSort(arr);
console.log(arr);
