function firstIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let firstIndex = Number.MAX_SAFE_INTEGER;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target && mid < firstIndex) firstIndex = mid;

    if (arr[mid] >= target) high = mid - 1;
    else low = mid + 1;
  }

  if (firstIndex === Number.MAX_SAFE_INTEGER) return -1;

  return firstIndex;
}

console.log(firstIndex([-2, 1, 1, 4, 5, 6], 1));
