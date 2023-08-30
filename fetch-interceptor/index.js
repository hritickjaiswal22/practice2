const originalFetch = window.fetch;

window.requestInterceptor = function (args) {
  console.log("I am request interceptor");

  return args;
};

window.responseInterceptor = function (res) {
  console.log("I am response interceptor");

  return res;
};

window.fetch = async function () {
  const args = arguments;

  const newReq = window.requestInterceptor(args);

  const res = originalFetch(newReq);

  const newRes = window.responseInterceptor(res);

  return newRes;
};

fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) =>
  console.log(data)
);
