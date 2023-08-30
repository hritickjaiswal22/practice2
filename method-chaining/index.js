class Amount {
  constructor() {
    this.result = 0;
  }

  crore(val) {
    this.result += val * 10 ** 7;
    return this;
  }

  lacs(val) {
    this.result += val * 10 ** 5;
    return this;
  }

  thousand(val) {
    this.result += val * 10 ** 3;
    return this;
  }

  value() {
    return this.result;
  }
}

function computeAmout() {
  let result = 0;

  return {
    crore(val) {
      result += val * 10 ** 7;
      return this;
    },

    lacs(val) {
      result += val * 10 ** 5;
      return this;
    },

    thousand(val) {
      result += val * 10 ** 3;
      return this;
    },

    value() {
      return result;
    },
  };
}

let total = computeAmout()
  .crore(5)
  .crore(2)
  .crore(7)
  .lacs(20)
  .lacs(15)
  .thousand(45)
  .value();

console.log(total);
