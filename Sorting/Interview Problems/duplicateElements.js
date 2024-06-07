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

// find duplicates function
function findDuplicates(arr) {
  if (arr.length <= 0) {
    console.log("Empty array");
    return;
  }

  //   call sort functions (remove comment of the sort you want to use)
  //   bubbleSort(arr);
  selectionSort(array);

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
