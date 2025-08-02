var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let tempMax = max;
    let tempMin = min;
    if (curr >= max * curr && curr >= min * curr) {
      tempMax = curr;
    } else if (max * curr >= curr && max * curr >= min * curr) {
      tempMax = max * curr;
    } else {
      tempMax = min * curr;
    }

    if (curr <= max * curr && curr <= min * curr) {
      tempMin = curr;
    } else if (max * curr <= curr && max * curr <= min * curr) {
      tempMin = max * curr;
    } else {
      tempMin = min * curr;
    }
    max = tempMax;
    min = tempMin;
    if (max > result) {
      result = max;
    }
  }
  return result;
};

console.log(maxProduct([2, 3, -2, 4]));
