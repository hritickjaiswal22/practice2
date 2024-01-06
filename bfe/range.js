function range(from, to) {
  if (to < from) return [];

  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
}
