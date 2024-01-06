function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target) return i;
    else if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
}
