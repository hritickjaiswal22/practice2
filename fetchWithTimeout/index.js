function fetchWithTimeout(url, timeout = 1000) {
  const controller = new AbortController();
  const signal = controller.signal;

  return new Promise((resolve, reject) => {
    fetch(url, { signal: signal })
      .then((data) => resolve(data))
      .catch((error) => reject(error))
      .finally(() => clearTimeout(timerId));

    const timerId = setTimeout(() => {
      console.log("Aborted");
      controller.abort();
    }, timeout);
  });
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/posts", 50)
  .then((res) => res.json())
  .then((data) => console.log(data));
