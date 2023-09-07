function cachedApiCall(timeout) {
  const hash = {};

  return function (url, options = {}) {
    return new Promise((resolve, reject) => {
      const obj = hash[url];
      if (
        obj &&
        obj.options === JSON.stringify(options) &&
        Date.now() - obj.lastCallTime <= timeout
      ) {
        console.log("Cached data");
        resolve(obj.data);
      } else {
        fetch(url, options)
          .then((res) => res.json())
          .then((data) => {
            hash[url] = {
              options: JSON.stringify(options),
              lastCallTime: Date.now(),
              data,
            };
            resolve(data);
          })
          .catch((error) => reject(error));
      }
    });
  };
}

const call = cachedApiCall(1500);
call("https://jsonplaceholder.typicode.com/posts", {}).then((data) =>
  console.log(data)
);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/posts", {}).then((data) =>
    console.log(data)
  );
}, 800);
setTimeout(() => {
  call("https://jsonplaceholder.typicode.com/posts", {}).then((data) =>
    console.log(data)
  );
}, 2000);
