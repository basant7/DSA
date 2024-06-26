let array = [3, 4, 9, 1, 8];

// Naive solution
function maxDiff(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > max) {
        max = arr[j] - arr[i];
      }
    }
  }
  return max;
}

// console.log(maxDiff(array));

// efficient solution
function maxDiffEfficient(arr) {
  // take max value as the difference of 1st and 2nd element
  let maxVal = arr[1] - arr[0];
  //   take min value as the first element
  let minVal = arr[0];
  for (let j = 1; j < arr.length; j++) {
    // check if current maxValue is less than the difference of the current value and minValue
    if (maxVal < arr[j] - minVal) {
      maxVal = arr[j] - minVal;
    }
    // also check if the minValue is greater than the current value
    if (minVal > arr[j]) {
      minVal = arr[j];
    }
  }
  return maxVal;
}

console.log(maxDiffEfficient(array));
