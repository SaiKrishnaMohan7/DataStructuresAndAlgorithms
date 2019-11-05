class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert (data) {
    if (!this.root) {
      this.root = new Node(data);
    } else if(data > this.root.data) {

    }
  }
}