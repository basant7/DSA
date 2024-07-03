let array = [8, -4, 3, -5, 4];

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

// console.log(normalSum(array));

function circularSum(arr) {
  let maxNormal = normalSum(arr);
  if (maxNormal < 0) {
    return maxNormal;
  }
  let max_sum = 0;
  for (let i = 0; i < arr.length; i++) {
    max_sum += arr[i];
    arr[i] = -arr[i];
  }
  let maxCircularSum = max_sum + normalSum(arr);
  return maxNormal > maxCircularSum ? maxNormal : maxCircularSum;
}

console.log(circularSum(array))
