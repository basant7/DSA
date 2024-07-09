let array = [1, 2, 2, 3];

function isMonotonic(arr) {
  if (arr.length <= 1) return true;
  isNonIncreasing = true;
  isNonDecreasing = true;
  // array should be either entire increasing order or decreasing order
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      isNonIncreasing = false;
    }
    if (arr[i - 1] < arr[i]) {
      isNonDecreasing = false;
    }
  }
  // if either one is true, it returns true and if both are false, it returns false
  // if both are false that means that the array is not in increasing and decreasing order
  return isNonIncreasing || isNonDecreasing;
}

console.log(isMonotonic(array));
