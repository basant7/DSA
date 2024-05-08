// If an array have infinite number of elements

// Naive solution
function infinite(arr, n) {
  let i = 0;
  while (true) {
    if (arr[i] === n) return i;
    if (arr[i] > n) return -1;
    i++;
  }
}
console.log(infinite([1, 2, 3, 4, 5, 6, 7, 8], 4));

// binary solution

function binarySearch(arr, n, low, high) {
  if (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === n) {
      return mid;
    } else if (arr[mid] > n) {
      return binarySearch(arr, n, low, mid - 1);
    } else {
      return binarySearch(arr, n, mid + 1, high);
    }
  }
  return -1;
}

function binary(arr, n) {
  if (arr[0] === n) {
    return 0;
  }
  let i = 1;
  while (arr[i] < n) {
    i = i * 2;
  }
  if (arr[i] === n) return i;
  return binarySearch(arr, n, i / 2 + 1, i);
}

console.log(
  binary(
    [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 20, 30, 31, 32, 33, 45, 67, 89, 123, 145,
      167, 233, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254,
    ],
    123
  )
);
