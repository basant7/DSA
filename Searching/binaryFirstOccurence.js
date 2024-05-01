let arr = [1, 10, 10, 15, 15, 20, 20, 20],
  n = 30,
  first = 0,
  last = arr.length - 1;
function binary(arr, n, startIndex, lastIndex) {
  if (arr.length === 0) {
    return false;
  }
  if (startIndex <= lastIndex) {
    let midIndex = Math.floor((startIndex + lastIndex) / 2);
    if (arr[midIndex] > n) {
      return binary(arr, n, startIndex, midIndex - 1);
    } else if (arr[midIndex] < n) {
      return binary(arr, n, midIndex + 1, lastIndex);
    } else {
      if (midIndex === 0 || arr[midIndex - 1] != arr[midIndex]) {
        return midIndex;
      } else {
        return binary(arr, n, startIndex, midIndex - 1);
      }
    }
  }
  return false;
}

console.log(binary(arr, n, first, last));
