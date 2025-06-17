let s = "aab";

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    // if the character is already in the set, we need to remove characters from the left until we can add the current character
    // this ensures that we always have unique characters in the set
    while (set.has(s[i])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[i]);
    max = max > set.size ? max : set.size;
  }
  return max;
};

console.log(lengthOfLongestSubstring(s));
