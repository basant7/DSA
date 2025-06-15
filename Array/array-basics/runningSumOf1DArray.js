let arr = [1, 2, 3, 4];

for (let i = 1; i < arr.length; i++) {
  arr[i] += arr[i - 1];
}

console.log(arr);

// https://leetcode.com/problems/running-sum-of-1d-array/submissions/1663492488/
