const Stack = require('../Implemenations/Stack_noArray');

const stack = new Stack();

function stringReversal(str) {
  let reverse = '';
  const charArr = str.split('');

  if (str.length === 0 || !str) {
    return '';
  }

  // populate stack O(n)
  charArr.forEach(element => {
    stack.push(element);
  });

  // Strings are immujtable in JS, so a new object is created in memory every time
  // Java has StringBuffer class
  // https://jsperf.com/string-concat-without-sringbuilder/7 concatenation is fastest in JS
  while (!stack.isEmpty()) {
    reverse += stack.pop();
  }

  return reverse;

};

// console.log(stringReversal('abcd'));

function isBalanced(str) {
  // https://stackoverflow.com/questions/4547609/how-do-you-get-a-string-to-a-character-array-in-javascript/34717402#34717402
  const charArr = str.split('');
  const stack = new Stack();
  const leftBrackets = ['(', '<', '{','['];
  const rightBrackets = [')', '>', '}', ']'];

  const isLeftExpression = expr => {
    return leftBrackets.includes(expr);
  };

  const isRightExpression = expr => {
    return rightBrackets.includes(expr);
  };

  const doBracketsMatch = (left, right) => {
    return leftBrackets.indexOf(left) === rightBrackets.indexOf(right);
  };

  // Push into stack and compare with the next char
  charArr.forEach(char => {
    if (isLeftExpression(char)) {
      stack.push(char);
    }
    if (isRightExpression(char) && !stack.isEmpty()) {
      const top = stack.pop();
      if (doBracketsMatch(top, char)) {
        return true;
      }
    }
  });

  return stack.isEmpty();
}