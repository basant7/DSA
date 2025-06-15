let arr = [2, 0, 2, 1, 1, 0];

var sortColors = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let j = i + 1;
    while (j < nums.length) {
      if (nums[i] > nums[j]) {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
      }
      j++;
    }
    i++;
  }
  return nums;
};

sortColors(arr);
