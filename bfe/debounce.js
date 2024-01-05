function basicDebounce(func, wait = 400) {
  let timerId = null;

  return function () {
    const ctx = this;
    const args = arguments;

    clearTimeout(timerId);

    timerId = setTimeout(() => func.apply(ctx, args), wait);
  };
}
