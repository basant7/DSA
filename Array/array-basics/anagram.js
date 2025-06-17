let s = "cbaebabacd",
  p = "abc";

var findAnagrams = function (s, p) {
  let sCount = {};
  let pCount = {};
  let result = [];
  let k = p.length;
  for (let i = 0; i < k; i++) {
    if (!pCount[p[i]]) {
      pCount[p[i]] = 1;
    } else {
      pCount[p[i]]++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!sCount[s[i]]) {
      sCount[s[i]] = 1;
    } else {
      sCount[s[i]]++;
    }

    if (i >= k) {
      sCount[s[i - k]]--;
      if (sCount[s[i - k]] == 0) delete sCount[s[i - k]];
    }

    if (i >= k - 1 && isEqual(sCount, pCount)) {
      result.push(i - k + 1);
    }
  }
  return result;
};

function isEqual(s, p) {
  if (Object.keys(s).length !== Object.keys(p).length) return false;
  for (let i in s) {
    if (p[i] !== s[i]) {
      return false;
    }
  }
  return true;
}

console.log(findAnagrams(s, p)); // Output: [0, 6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of  // "abc".
// Note that the order of output does not matter.
// Note: This solution uses a sliding window approach to find all anagrams of p in s.
// It maintains a count of characters in both the current window of s and the string p,
// and checks for equality of these counts to determine if an anagram exists at each position.
