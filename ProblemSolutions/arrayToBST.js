const BST = require('../Implemenations/BST');

function arrToBST(arr) {
  const bst = new BST();

  for (let i = 0; i < arr.length; i++) {
    bst.insert(arr[i]);
  }
  console.log(bst.find(1));
  return bst
}

console.log(arrToBST([10, 5, 15, 6, 1, 8, 12, 18, 17]));