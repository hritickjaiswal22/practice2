function lastIndex(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let lastIndex = Number.MIN_SAFE_INTEGER;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (arr[mid] === target && mid > lastIndex) lastIndex = mid;

    if (arr[mid] <= target) low = mid + 1;
    else high = mid - 1;
  }

  if (lastIndex === Number.MIN_SAFE_INTEGER) return -1;

  return lastIndex;
}
