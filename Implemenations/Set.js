class SetEnhanced {
  constructor() {
    this.collection = [];
    this.count = 0;
  }

  has (item) {
    return this.collection.indexOf(item) !== -1;
  }

  size () {
    return this.count;
  }

  add (item) {
    if (!this.has(item)) {
      this.collection.push(item);
      this.count = this.count + 1;

      return this.collection;
    }
  }

  remove (item) {
    if(this.has(item)) {
      const index = this.collection.indexOf(item);
      const removed = this.collection.splice(index, 1);
      this.count = this.count -1;

      return removed[0];
    } else {
      throw new Error('Itme doesn\'t exist!');
    }
  }

  union (inputSet) {
    if (inputSet instanceof SetEnhanced) {
      const unionSet = new Set(); // The default ES6 Set
      const { collection: inputSetCollection } = inputSet;

      this.collection.map(setItem => unionSet.add(setItem));
      inputSetCollection.map(inputSetItem => unionSet.add(inputSetItem));

      unionSet.count = unionSet.size;

      // The same object is not returned!
      // This will not have enhanced methods, maybe that's why it hasn't been implemetned yet
      // Same would happen with Intersection
      return unionSet;
    }
    // TODO: Handle else case
  }
  // TODO: Intersection
  // TODO: Difference
  // TODO: Subset
}