function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise
        .then((resolvedVal) => resolve(resolvedVal))
        .catch((errVal) => reject(errVal));
    }
  });
}

Promise.race = race;
