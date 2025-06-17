let s1 = "ab";
let s2 = "eidbaooo";

var checkInclusion = function (s1, s2) {
  let s1Count = {};
  let s2Count = {};
  let k = s1.length;
  for (let i = 0; i < k; i++) {
    if (!s1Count[s1[i]]) {
      s1Count[s1[i]] = 1;
    } else {
      s1Count[s1[i]]++;
    }
  }
  for (let i = 0; i < s2.length; i++) {
    if (!s2Count[s2[i]]) {
      s2Count[s2[i]] = 1;
    } else {
      s2Count[s2[i]]++;
    }
    // We need to maintain a window of size k in s2
    // If the window size exceeds k, we remove the character that is no longer in the window
    // This is done by checking if i >= k, which means we have processed at least k characters
    // and we can start removing characters from the left side of the window
    if (i >= k) {
      // Decrease the count of the character that is sliding out of the window
      s2Count[s2[i - k]]--;
      if (s2Count[s2[i - k]] == 0) delete s2Count[s2[i - k]];
    }
    if (i >= k - 1 && isEqual(s1Count, s2Count)) {
      return true;
    }
  }
  return false;
};

function isEqual(s1, s2) {
  if (Object.keys(s1).length !== Object.keys(s2).length) return false;
  for (let i in s1) {
    if (s1[i] !== s2[i]) {
      return false;
    }
  }
  return true;
}
