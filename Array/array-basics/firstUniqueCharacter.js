let s = "aabb";
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let j = 0;
    let isFound = false;
    while (j < s.length) {
      if (i !== j && s[i] == s[j]) {
        isFound = true;
        break;
      }
      j++;
    }
    if (!isFound) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar(s)); // Output: -1

// todo
// add question link
// add time and space complexity
// add more test cases
// add explanation of the code
// add github link
// add leetcode link
// add approaches
