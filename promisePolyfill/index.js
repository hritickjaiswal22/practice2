// With then chaining around 12 mins
// after that 15 mins for catch chaining
// after that 21 mins with finally

class CustomPromise {
  resovedValue = null;
  resolvedFns = [];
  rejectedValue = null;
  rejectedFns = [];

  constructor(executor) {
    const resolve = (data) => {
      this.resovedValue = data;

      if (this.resolvedFns.length)
        this.resolvedFns.reduce((acc, cb) => cb(acc), this.resovedValue);
    };

    const reject = (data) => {
      this.rejectedValue = data;

      if (this.rejectedFns.length)
        this.rejectedFns.reduce((acc, cb) => cb(acc), this.rejectedValue);
    };

    executor(resolve, reject);
  }

  then(fn) {
    this.resolvedFns.push(fn);

    if (this.resovedValue)
      this.resolvedFns.reduce((acc, cb) => cb(acc), this.resovedValue);

    return this;
  }

  catch(fn) {
    this.rejectedFns.push(fn);

    if (this.rejectedValue)
      this.rejectedFns.reduce((acc, cb) => cb(acc), this.rejectedValue);

    return this;
  }

  finally(fn) {
    this.resolvedFns.push(fn);
    this.rejectedFns.push(fn);

    if (this.resovedValue) {
      this.resolvedFns.reduce((acc, cb) => cb(acc), this.resovedValue);
    }

    if (this.rejectedValue) {
      this.rejectedFns.reduce((acc, cb) => cb(acc), this.rejectedValue);
    }
  }
}

new CustomPromise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})
  .then((data) => data * 2)
  .then((data) => data * 3)
  .then((val) => val)
  .finally((val) => console.log("From finally " + val));
