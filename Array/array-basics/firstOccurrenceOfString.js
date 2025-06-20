let haystack = "hello",
  needle = "ll";

function strStr(haystack, needle) {
  // loop through the haystack string
  if (needle.length === 0) return 0; // If needle is empty, return 0
  if (haystack.length < needle.length) return -1; // If haystack is shorter than needle, return -1
  for (let i = 0; i < haystack.length; i++) {
    let j = 0;
    // Check if the substring starting at i matches the needle
    while (j < needle.length && haystack[i + j] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i;
    }
  }
  return -1; // If needle is not found, return -1
}

console.log(strStr(haystack, needle));
