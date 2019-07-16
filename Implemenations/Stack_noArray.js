class Stack {
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

    const popped = this.storage[this.count];
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
}

export default Stack;