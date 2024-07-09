let nums = [0, 0, 1];
// Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.
function findMaxLength(nums) {
  // Convert 0s to -1s
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums[i] = -1;
    }
  }
  //   [-1, -2, -1, -2, -3, -4, -3, -2];
  // Dictionary to store the first occurrence of each cumulative sum
  let obj = {};
  let sum = 0;
  let max = 0;
  // We will run a loop and check for each element
  // if the element is not present then add it to object with the value of nums as index and index as value
  // if the element is already present in the object then we will minus the first occurence of that value
  // with the current index and then we will see if the max length that we stored earlier is > max length between the
  // occurence e.g suppose -2 is at index 1 and next occurence is at index 6 then 6-1=5 and suppose the next occuence of -2
  // is at index 8 then 8-1=7 and we will compare 5,7 which is greater and that will be the current max
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum == 0) {
      max = i + 1;
    } else if (sum in obj) {
      max = max < i - obj[sum] ? i - obj[sum] : max;
    } else {
      obj[sum] = i;
    }
  }

  return max;
}

console.log(findMaxLength(nums));
