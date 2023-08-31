window.localStorageWithExpiry = function () {
  return {
    setItem(key, value, expiry = 5000) {
      localStorage.setItem(
        key,
        JSON.stringify({
          value,
          expiryTime: Date.now() + expiry,
        })
      );
    },

    getItem(key) {
      const value = JSON.parse(localStorage.getItem(key));

      if (!value) return null;

      if (Date.now() >= value.expiryTime) {
        this.removeItem(key);
        return null;
      }

      return value.value;
    },

    removeItem(key) {
      localStorage.removeItem(key);
    },
  };
};
