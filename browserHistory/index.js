class BrowserHistory {
  constructor() {
    this.history = [];
    this.currentUrlIndex = -1;
  }

  visits(url) {
    this.history.push(url);
    this.currentUrlIndex = this.history.length - 1;
  }

  current() {
    return this.history[this.currentUrlIndex];
  }

  backward() {
    if (this.currentUrlIndex > 0) this.currentUrlIndex--;
  }

  forward() {
    if (this.currentUrlIndex < this.history.length - 1) this.currentUrlIndex++;
  }
}
