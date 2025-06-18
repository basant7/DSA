let target = 1,
  nums = [1, 4, 4];

function minSubArrayLen(target, nums) {
  let i = 0;
  let j = 0;
  let sum = 0;
  let result = Number.MAX_SAFE_INTEGER;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
    while (sum >= target) {
      result = result < i - j + 1 ? result : i - j + 1;
      sum -= nums[j];
      j++;
    }
  }
  return result;
}

console.log(minSubArrayLen(target, nums)); // Output: 2
