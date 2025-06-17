let target = 7,
  nums = [2, 3, 1, 2, 4, 3];

function minSubArrayLen(target, nums) {
  let i = 0;
  let j = 1;
  let sum = nums[i];
  let result = Number.MAX_SAFE_INTEGER;
  while (j <= nums.length && i < nums.length && j > i) {
    if (sum < target) {
      sum = sum + nums[j];
      j++;
    } else if (sum > target) {
      sum -= nums[i];
      i++;
    } else {
      result = Math.min(result, j - i + 1);
      sum -= nums[i];
      i++;
    }
  }
  return result;
}

console.log(minSubArrayLen(target, nums)); // Output: 2
