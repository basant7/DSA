let array = [-5, 1, -2, 3, -1, 2, -2];

function maxSumSubArray(arr) {
  let i = 1;
  let max = arr[0];
  let current = arr[0];
  while (i < arr.length) {
    if (current + arr[i] < arr[i]) {
      current = arr[i];
    } else {
      current += arr[i];
    }
    max = current > max ? current : max;
    i++;
  }
  console.log(max);
}

maxSumSubArray(array);
