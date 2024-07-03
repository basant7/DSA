let array = [8, -4, 3, -5, 4];

// find the max sum of subarray
function normalSum(arr) {
  let normalSum = arr[0];
  let currentSum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (currentSum + arr[i] < arr[i]) {
      currentSum = arr[i];
    } else {
      currentSum += arr[i];
    }
    normalSum = currentSum > normalSum ? currentSum : normalSum;
  }
  return normalSum;
}

// check the largest circular sum
function circularSum(arr) {
  let maxNormal = normalSum(arr);
  // if the maximum sum of the subarray is less than 0 then return the sum
  // because all the elements will be -ve then
  if (maxNormal < 0) {
    return maxNormal;
  }
  let max_sum = 0;
  // loop through the array
  for (let i = 0; i < arr.length; i++) {
    // add all the elements of the array and add it to the max_sum
    max_sum += arr[i];
    // make -ve elements +ve and vice versa
    arr[i] = -arr[i];
  }
  // now add the max_sum with the maximum sum of subarray of the reversed array
  let maxCircularSum = max_sum + normalSum(arr);
  // now check for the max value and return it
  return maxNormal > maxCircularSum ? maxNormal : maxCircularSum;
}

console.log(circularSum(array));
