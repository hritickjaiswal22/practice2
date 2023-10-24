function asyncSequence(tasks, fn) {
  function find(tasks) {
    if (!tasks.length) {
      resolves.reverse();
      rejects.reverse();
      fn(resolves, rejects);

      return;
    }

    const promise = tasks.pop();

    promise
      .then((data) => resolves.push(data))
      .catch((error) => rejects.push(error))
      .finally(() => {
        find(tasks);
      });
  }

  const resolves = [];
  const rejects = [];

  find(tasks);
}

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(value * 1000);
      }
    }, value * 1000);
  });
}

let tasks = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncSequence(tasks, (error, result) => {
  console.log("error", error);
  console.log("result", result);
});
