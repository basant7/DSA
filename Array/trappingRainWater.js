let array = [3, 0, 1, 0, 4, 0, 2];

function trappingRainWater(arr) {
  let leftMax = [],
    rightMax = [],
    sum = 0;
  leftMax[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (leftMax[i - 1] > arr[i]) {
      leftMax[i] = leftMax[i - 1];
    } else {
      leftMax[i] = arr[i];
    }
  }
  rightMax[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (rightMax[i + 1] > arr[i]) {
      rightMax[i] = rightMax[i + 1];
    } else {
      rightMax[i] = arr[i];
    }
  }
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
