// https://stackoverflow.com/questions/42684177/node-js-es6-classes-with-require
module.exports = class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push (item) {
    this.storage[this.count] = item;
    this.count ++;
  }

  pop () {
    if (this.count === 0) {
      return undefined;
    }

    const popped = this.storage[this.count - 1];
    delete this.storage[this.count];
    this.count --;

    return popped;
  }

  peek () {
    return this.storage[this.count - 1];
  }

  size () {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }
}
