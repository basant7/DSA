// Find Duplicates using multiple Algorithms
let array = [4, 8, 3, 9, 8, 10, 2, 1, 4, 6];

// using bubbleSort for sorting
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

// using selection sort for sorting
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    if (i != min_index) {
      let temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
  }
}

// using insertion sort for sorting
function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    while (j >= 0 && arr[j + 1] < arr[j]) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
  console.log(arr);
}

// using merge sort for sorting
function merge(arr, l, mid, h) {
  let low = mid - l + 1;
  let high = h - mid;
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < low; i++) {
    arr1[i] = arr[l + i];
  }
  for (let i = 0; i < high; i++) {
    arr2[i] = arr[mid + 1 + i];
  }

  let i = 0,
    j = 0;
  let k = l;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr[k] = arr1[i];
      i++;
    } else {
      arr[k] = arr2[j];
      j++;
    }
    k++;
  }
  while (i < arr1.length) {
    arr[k] = arr1[i];
    i++;
    k++;
  }
  while (j < arr2.length) {
    arr[k] = arr2[j];
    j++;
    k++;
  }
}

function mergeSort(arr, l, r) {
  if (l < r) {
    let mid = Math.floor((r + l) / 2);
    mergeSort(arr, l, mid);
    mergeSort(arr, mid + 1, r);
    merge(arr, l, mid, r);
  }
}

// using quick sort for sorting
function quick(arr, l, h) {
  let p = arr[l];
  let i = l - 1;
  let j = h + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < p);

    do {
      j--;
    } while (arr[j] > p);

    if (i >= j) {
      return j;
    }

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function quickSort(arr, l, r) {
  if (l < r) {
    let p = quick(arr, l, r);
    quickSort(arr, l, p);
    quickSort(arr, p + 1, r);
  }
}

// find duplicates function
function findDuplicates(arr) {
  if (arr.length <= 0) {
    console.log("Empty array");
    return;
  }

  //   call sort functions (remove comment of the sort you want to use)
  //   bubbleSort(arr);
  //   selectionSort(array);
  // insertionSort(array);
  // mergeSort(arr, 0, arr.length - 1);
  quickSort(arr, 0, arr.length - 1);
  console.log(arr);

  let temp = [];
  let index = 0;
  let alreadyaddedElement;
  for (let i = 0; i < arr.length - 1; i++) {
    // check if the element is already added to the temp array
    if (arr[i] == arr[i + 1] && alreadyaddedElement != arr[i]) {
      alreadyaddedElement = arr[i];
      temp[index++] = arr[i];
    }
  }
  if (temp.length > 0) {
    for (let i = 0; i < temp.length; i++) {
      console.log("Duplicate Elements ---> ", temp[i]);
    }
    return;
  }
  console.log("No duplicate elements");
}

findDuplicates(array);
