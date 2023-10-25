class CustomPromise {
  resolvedData;
  resolveChain = [];
  rejectedData;
  rejectChain = [];

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
