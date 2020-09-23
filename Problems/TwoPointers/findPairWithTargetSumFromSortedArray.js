const pair_with_targetsum = function(arr, target_sum) {
  const resultIndices = [];
  const arrLen = arr.length;
  let start = 0;
  let end = arrLen - 1;

  while (start < arrLen && end >= 0) {
    if (arr[start] + arr[end] === target_sum) {
      resultIndices.push(start);
      resultIndices.push(end);

      return resultIndices;
    } else if (arr[start] + arr[end] < target_sum) {
      // if sum is less then increase the start pointer since it is a sorted array
      start += 1;
    } else {
      // decrement the endpointer since the sum is large
      end -= 1;
    }
  }

  return resultIndices;
}


// If the sum of the two numbers pointed by the two pointers is greater than the target sum,
// this means that we need a pair with a smaller sum. So, to try more pairs, we can decrement the end-pointer.

// If the sum of the two numbers pointed by the two pointers is smaller than the target sum,
// this means that we need a pair with a larger sum. So, to try more pairs, we can increment the start-pointer.
