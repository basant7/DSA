let array = [3, 0, 1, 0, 4, 0, 2];

function trappingRainWater(arr) {
  let leftMax = [],
    rightMax = [],
    sum = 0;
  // we create twp arrays and fill each array with max elements
  leftMax[0] = arr[0];
  //   fill the first array with the elements given that
  //  if the new array previous value is greater than the original array current value
  // then set the new value in the new array as previous value of new array
  //  else set the new array value as the current array value
  for (let i = 1; i < arr.length; i++) {
    if (leftMax[i - 1] > arr[i]) {
      leftMax[i] = leftMax[i - 1];
    } else {
      leftMax[i] = arr[i];
    }
  }
  //   start from the last element and do same as above with other new array
  rightMax[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (rightMax[i + 1] > arr[i]) {
      rightMax[i] = rightMax[i + 1];
    } else {
      rightMax[i] = arr[i];
    }
  }
  //   now check for the smaller value from both new arrays and
  //  add subtract it with the original array value and add it to the sum
  for (let i = 1; i < arr.length - 1; i++) {
    if (leftMax[i] < rightMax[i]) {
      sum += leftMax[i] - arr[i];
    } else {
      sum += rightMax[i] - arr[i];
    }
  }
  console.log(sum);
}

trappingRainWater(array);
