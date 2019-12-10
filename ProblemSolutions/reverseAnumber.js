
// https://leetcode.com/problems/reverse-integer

// Final Submission, accepted
/**
 * @param {number} x
 * @return {number}
 */

var checkOverflow = function(x) {
  return Math.pow(-2, 31) < x && x < Math.pow(2, 31) - 1;
}
var reverser = function (x) {
  let rev = 0;
  while(x != 0) {
      rev = rev * 10;
      rev = rev + x % 10;
      x = Math.floor(x / 10);
  }
  return rev;
};
var reverse = function(x) {
  let reversed = 0;
  if (x >= 0) {
      reversed = reverser(x);
      if(checkOverflow(reversed)){
        return reverser(x);
      }
  } else {
      let unsignedX = Math.abs(x);
      reversed = reverser(unsignedX);
      if(checkOverflow(reversed)){
        return -reversed;
      }
  }

  return 0;
};