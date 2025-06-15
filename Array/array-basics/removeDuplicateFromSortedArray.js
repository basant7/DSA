let arr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4][(0, 1, 1)];
var removeDuplicates = function (nums) {
  let obj = {};
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = nums[i];
      result.push(nums[i]);
    }
  }
  return result;
};

console.log(removeDuplicates(arr));
