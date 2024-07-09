let array = [3, 4, 8, 9, -9, 7];

// solution 1
function equilibrium(arr) {
  // 1. get the prefix sum
  // 2. get the postfix sum
  // 3. check if PreSum == PostSum -> return true
  let preTemp = [];
  let postTemp = [];
  preTemp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    preTemp[i] = arr[i] + preTemp[i - 1];
  }
  postTemp[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    postTemp[i] = arr[i] + postTemp[i + 1];
  }
  let i = 0;
  while (i < preTemp.length && i < postTemp.length) {
    if (preTemp[i] === postTemp[i]) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(equilibrium(array));

// solution 2
function equilibriumBetter(arr) {
  let rs = 0;
  for (let i = 0; i < arr.length; i++) {
    rs += arr[i];
  }
  //   if we do rs - arr[0] then we will get the sum
  //  of all previous elements from arr[1] to arr.length
  let ls = 0;
  for (let i = 0; i < arr.length; i++) {
    rs = rs - arr[i];
    if (ls == rs) return true;
    ls = ls + arr[i];
  }
  return false;
  //   rs = 22, ls = 0
  // i = 0, ls = 0, rs = 22-3 = 19
  // i = 1, ls = 0 + 3 = 3, rs = 19 - 4 = 15
  // i = 2, ls = 3 + 4 = 7, rs = 15 - 8 = 7
  // and therefore ls == rs -> return true
}

console.log(equilibriumBetter(array));
