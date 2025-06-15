let str = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (
      (charCode >= 65 && charCode <= 90) ||
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      result += s[i];
    }
  }

  let i = 0;
  let j = result.length - 1;
  while (i < j) {
    if (result[i].toLowerCase() !== result[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome(str));
