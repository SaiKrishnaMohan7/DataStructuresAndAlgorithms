class Node {
  constructor(value) {
    this.value = value;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(item) {
    const node = new Node(item);
    if(!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while(true) {
      if (item < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild
      } else if (item > current.value) {
        if (!current.rightChild) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild
      }
    }
  }

  find (item) {
    if (!item) {
      return false;
    }

    let current = this.root;

    while (current) {
      if (item === current.value) {
        return true;
      }

      if (item < current.value) {
        if (!current.leftChild) {
          return false;
        }
        current = current.leftChild;
      }

      if (item > current.value) {
        if (!current.rightChild) {
          return false;
        }
        current = current.rightChild;
      }
    }
  }
}

module.exports = BinarySearchTree;
