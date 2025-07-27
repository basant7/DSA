let nums = [2, 4, 1, 1, 6, 5];

var countHillValley = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    let j = i - 1;
    let k = i + 1;
    let same1 = 0;
    while (j >= 0 && nums[j] == nums[i]) {
      j--;
      same1++;
    }
    if (j < 0) {
      continue;
    }
    while (k < nums.length && nums[k] == nums[i]) {
      k++;
    }
    if (k == nums.length) {
      continue;
    }
    if (
      ((nums[i] > nums[k] && nums[i] > nums[j]) ||
        (nums[i] < nums[k] && nums[i] < nums[j])) &&
      same1 <= 0
    ) {
      count++;
    }
  }
  return count;
};

var countHillValleyEfficient = function (nums) {
  let arr = [nums[0]];
  let count = 0;
  //   remove consecutive duplicates
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      arr.push(nums[i]);
    }
  }
  for (let i = 1; i < arr.length - 1; i++) {
    if (
      (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) ||
      (arr[i - 1] > arr[i] && arr[i] < arr[i + 1])
    ) {
      count++;
    }
  }

  return count;
};

console.log(countHillValley(nums));
console.log(countHillValleyEfficient(nums));
