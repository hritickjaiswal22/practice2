function longestUniqueSubstr(str) {
  let resultI = -1;
  let resultJ = -1;
  const hash = {};
  let i = -1;
  let j = 0;
  let max = 0;

  while (j < str.length) {
    while (j < str.length) {
      const char = str[j];

      if (hash[char] === undefined) hash[char] = 1;
      else hash[char]++;

      if (hash[char] > 1) break;

      if (j - i >= max) {
        max = j - i;
        resultI = i;
        resultJ = j;
      }

      j++;
    }

    while (i < j) {
      i++;
      const char = str[i];

      hash[char]--;

      if (hash[char] === 1) {
        j++;
        break;
      }
    }
  }

  return str.substring(resultI + 1, resultJ + 1);
}

console.log(longestUniqueSubstr("a12#2"));
