function backspaceCompare(s, t) {
  let i = s.length - 1,
    j = t.length - 1;
  let skipS = 0,
    skipT = 0;

  while (i >= 0 || j >= 0) {
    while (i >= 0) {
      if (s[i] === "#") {
        skipS++;
        i--;
      } else if (skipS > 0) {
        skipS--;
        i--;
      } else break;
    }

    while (j >= 0) {
      if (t[j] === "#") {
        skipT++;
        j--;
      } else if (skipT > 0) {
        skipT--;
        j--;
      } else break;
    }

    if (s[i] !== t[j]) return false;
    i--;
    j--;
  }

  return true;
}

console.log(backspaceCompare("xywrrmp", "xywrrmu#p"));
