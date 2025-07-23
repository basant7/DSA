let arr = [2, 3, 1, 2, 4, 3],
  k = 7;
let sum = 0;
let max = Infinity;
let j = 0;
let i1, i2;

function smallestSubArray(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (i > j && sum > target) {
      sum -= nums[j];
      j++;
    }

    if (sum === target) {
      if (max > i - j) {
        max = i - j;
        i1 = i;
        i2 = j;
      }
    }
  }
  return [i2, i1];
}

console.log(smallestSubArray(arr, k));
