let array = [2, 4, 1, 3, 5];
// A pair of (arr[i], arr[j]) forms an inversion when i<j and arr[i] > arr[j]
function naiveInversion(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        // (4,1), (2,1), (4,3)
        count = count + 1;
      }
    }
  }
  return count;
}

console.log(naiveInversion(array));

// ------------------------------------------------------------------------------

function countAndMerge(arr, left, mid, right) {
  let n1 = mid - left + 1;
  let n2 = right - mid;
  let arr1 = [],
    arr2 = [];
  for (let i = 0; i < n1; i++) arr1[i] = arr[i + left];
  for (let j = 0; j < n2; j++) arr2[j] = arr[mid + 1 + j];
  let res = 0,
    i = 0,
    j = 0,
    k = left;
  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      arr[k++] = arr1[i++];
    } else {
      arr[k++] = arr2[j++];
      res = res + (mid - i);
    }
  }
  while (i < n1) arr[k++] = arr1[i++];
  while (j < n2) arr[k++] = arr2[j++];
  return res;
}

function inversionCount(arr, left, right) {
  let res = 0;
  if (left < right) {
    let mid = left + (right - left) / 2;
    res += inversionCount(arr, left, mid);
    res += inversionCount(arr, mid + 1, right);
    res += countAndMerge(arr, left, mid, right);
  }
  return res;
}

console.log(inversionCount(array, 0, array.length - 1));


