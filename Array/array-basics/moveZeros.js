let arr = [0, 1, 0, 3, 12];

var moveZeroes = function (nums) {
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] === 0 && nums[j] != 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    } else if (nums[i] !== 0 && nums[j] === 0) {
      i++;
    }
  }
  return nums;
};

console.log(moveZeroes(arr));
