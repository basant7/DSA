let s = "aabb";
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    let j = 0;
    let isThere = false;
    while (j < s.length) {
      if (i !== j && s[i] != s[j]) {
        isThere = true;
        break;
      }
      j++;
    }
    if (!isThere) {
      return i;
    }
  }
  return -1;
};

console.log(firstUniqChar(s)); // Output: 0
