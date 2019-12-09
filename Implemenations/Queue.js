class Queue {
  constructor() {
    this.storage = [];
    this.count = 0;
  }

  // O(1)
  enqueue (item) {
    this.storage.push(item);
    this.count++;
  }

  // O(N) for this implementation
  dequeue () {
    const removedItem = this.storage.shift();
    this.count--;

    return removedItem;
  }

  // O(1)
  peek () {
    return this.storage[0];
  }

  // O(1)
  back () {
    return this.storage[this.count - 1];
  }

  // O(1)
  isEmtpy () {
    return this.count === 0;
  }

  // O(1)
  size () {
    return this.count;
  }

  // isFull not implemented, we don't have fixed size arrays in JS
}

export default Queue;