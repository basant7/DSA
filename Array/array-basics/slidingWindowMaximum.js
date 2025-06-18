let nums = [1, 3, -1, -3, 5, 3, 6, 7],
  k = 3;

function maxSlidingWindow(nums, k) {
  let result = [];
  let max = -Infinity;

  for (let i = 0; i <= nums.length - k; i++) {
    let j = i;
    while (j < i + k) {
      max = max > nums[j] ? max : nums[j];
      j++;
    }
    result.push(max);
  }
  return result;
}

console.log(maxSlidingWindow(nums, k)); // Output: [3,3,5,5,6,7]
