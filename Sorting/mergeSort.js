let array = [10, 4, 2, 6, 9, 8, 1],
  firstIndex = 0,
  lastindex = array.length - 1;

function merge(arr, left, mid, right) {
  // create n1 which will be the length of the left half of the array
  // create n2 which will be the length of the right half of the array
  let n1 = mid - left + 1;
  let n2 = right - mid;

  let arr1 = [],
    arr2 = [];
  for (let i = 0; i < n1; i++) {
    // take left+i from the array to increment to next variable in the array
    // and add it to arr1
    arr1[i] = arr[left + i];
  }

  for (let j = 0; j < n2; j++) {
    // take mid + j + 1 from the array to increment to next variable in the array
    // and add it to arr2
    arr2[j] = arr[mid + 1 + j];
  }

  // k will be equal to left because the new array will have to update the index
  // where the next element is to be placed
  let i = 0,
    j = 0,
    k = left;

  while (i < n1 && j < n2) {
    if (arr1[i] >= arr2[j]) {
      arr[k] = arr2[j];
      j++;
    } else {
      arr[k] = arr1[i];
      i++;
    }
    k++;
  }
  while (i < n1) {
    arr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < n2) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}

function mergeSort(arr, left, right) {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid);
    mergeSort(arr, mid + 1, right);
    merge(arr, left, mid, right);
  }
}

function printArray(arr) {
  mergeSort(array, firstIndex, lastindex);
  return arr
}

console.log(printArray(array));
