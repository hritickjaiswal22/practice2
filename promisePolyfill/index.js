class CustomPromise {
  resolvedData;
  resolveChain = [];
  rejectedData;
  rejectChain = [];

  static all(promises) {
    const fulfilled = [];
    const result = [];

    return new CustomPromise((_resolve, _reject) => {
      promises.forEach((promise, index) => {
        promise
          .then((data) => {
            fulfilled.push(true);

            result[index] = data;

            if (fulfilled.length === promises.length) _resolve(result);
          })
          .catch((error) => _reject(error));
      });
    });
  }

  static resolve(val) {
    return new CustomPromise((_resolve) => _resolve(val));
  }

  static reject(error) {
    return new CustomPromise((_resolve, _reject) => _reject(error));
  }

  constructor(executor) {
    const resolve = (data) => {
      this.resolvedData = data;

      if (this.resolveChain.length) {
        this.resolveChain.reduce((acc, cb) => cb(acc), this.resolvedData);
      }
    };

    const reject = (data) => {
      this.rejectedData = data;

      if (this.rejectChain.length) {
        this.rejectChain.reduce((acc, cb) => cb(acc), this.rejectedData);
      }
    };

    executor(resolve, reject);
  }

  then(fn) {
    this.resolveChain.push(fn);

    if (this.resolvedData !== undefined) {
      this.resolveChain.reduce((acc, cb) => cb(acc), this.resolvedData);
    }

    return this;
  }

  catch(fn) {
    this.rejectChain.push(fn);

    if (this.rejectedData !== undefined) {
      this.rejectChain.reduce((acc, cb) => cb(acc), this.rejectedData);
    }

    return this;
  }

  finally(fn) {
    this.resolveChain.push(fn);
    this.rejectChain.push(fn);

    if (this.resolvedData !== undefined) {
      this.resolveChain.reduce((acc, cb) => cb(acc), this.resolvedData);
    }

    if (this.rejectedData !== undefined) {
      this.rejectChain.reduce((acc, cb) => cb(acc), this.rejectedData);
    }
  }
}
