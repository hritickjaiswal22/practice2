class EventEmitter {
  constructor() {
    this.events = {};
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.events[eventName]) this.events[eventName].push(callback);
    else this.events[eventName] = [callback];

    const callbackToBeRemoved = callback;

    return {
      unsubscribe: () => {
        const i = this.events[eventName].indexOf(callbackToBeRemoved);

        if (i >= 0) this.events[eventName].splice(i, 1);
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    if (!this.events[eventName]) return [];

    const result = [];

    for (const fn of this.events[eventName]) {
      result.push(fn(...args));
    }

    return result;
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */
