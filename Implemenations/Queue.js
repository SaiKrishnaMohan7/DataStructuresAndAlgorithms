class Queue {
  constructor() {
    this.storage = [];
    this.count = 0;
  }

  enqueue (item) {
    this.storage.push(item);
    this.count++;
  }

  dequeue () {
    const removedItem = this.storage.shift();
    this.count--;

    return removedItem;
  }

  front () {
    return this.storage[0];
  }

  back () {
    return this.storage[this.count - 1];
  }

  isEmtpy () {
    return this.count === 0;
  }

  size () {
    return this.count;
  }
}

export default Queue;