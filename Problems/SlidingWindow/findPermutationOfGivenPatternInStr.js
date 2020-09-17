const find_permutation = function(str, pattern) {
  let matched = 0;
  let windowStart = 0;
  let patternCharFreq = new Map();
  let char, leftChar, rightChar = '';

  for (let i = 0; i < pattern.length; i++) {
    char = pattern[i];
    if (patternCharFreq.has(char)) {
      patternCharFreq.set(char, patternCharFreq.get(char) + 1);
    }
    patternCharFreq.set(char, 0);
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    rightChar = str[windowEnd];

    if (patternCharFreq.has(rightChar)) {
      patternCharFreq.set(rightChar, patternCharFreq.get(rightChar) - 1);
      if (patternCharFreq.get(rightChar) === 0) {
        matched += 1;
      }
    }

    if (matched === patternCharFreq.size) {
      return true;
    }

    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;

      if (patternCharFreq.has(leftChar)) {
        if (patternCharFreq.get(leftChar) === 0) {
          matched -= 1;
        }
        patternCharFreq.set(leftChar, patternCharFreq.get(leftChar) + 1);
      }
    }
  }

  return false;
};
