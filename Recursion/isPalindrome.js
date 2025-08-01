let str = "abccba";

function isPalindrome(str, start, end) {
  if (start >= end) {
    return true;
  }
  //   return str[start] == str[end] && isPalindrome(str, start + 1, end - 1);
  //   or
  if (str[start] == str[end]) {
    return isPalindrome(str, start + 1, end - 1);
  } else {
    return false;
  }
}

console.log(isPalindrome(str, 0, str.length - 1));
