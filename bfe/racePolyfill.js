function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then((data) => resolve(data)).catch((error) => reject(error));
    }
  });
}
