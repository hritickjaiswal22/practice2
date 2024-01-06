const originalSetTimeout = setTimeout;
const timerIds = [];

setTimeout = function (...args) {
  const timerId = originalSetTimeout(...args);

  timerIds.push(timerId);

  return timerId;
};

function clearAllTimeout() {
  for (const timerId of timerIds) {
    clearTimeout(timerId);
  }
}
