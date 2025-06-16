let nums = [1, 12, -5, -6, 50, 3],
  k = 4;

function maxSubarray(arr, k) {
  let sum = 0;
  // first we find the sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
  }
  // we need to find the maximum sum later which will be divided by k to find the max average
  let maxSum = sum;

  for (let i = k; i < arr.length; i++) {
    sum += arr[i] - arr[i - k]; // here we add the next element in the array and subtract the (i-k)th element
    //  e.g if k = 4 then (1 + 12 + (-5) + (-6) + 50) = 52 but we will subtract 1 that is in the beginning and we get 51
    maxSum = maxSum < sum ? sum : maxSum;
  }

  return maxSum / k;
}

console.log(maxSubarray(nums, k));
