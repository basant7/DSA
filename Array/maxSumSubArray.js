let array = [-5, 1, -2, 3, -1, 2, -2];

function maxSumSubArray(arr) {
  let i = 1;
  let max = arr[0];
  let current = arr[0];
  while (i < arr.length) {
    // check if the current element + previous element is less than the current element then
    // add the current element to current variable
    if (current + arr[i] < arr[i]) {
      current = arr[i];
    } else {
      // if the current variable + previous element is greater than the current element then
      // take current variable + previous element as the new current variable
      current += arr[i];
    }
    // compare current and max and update max
    max = current > max ? current : max;
    i++;
  }
  console.log(max);
}

maxSumSubArray(array);
