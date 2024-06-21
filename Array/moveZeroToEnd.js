let array = [1, 2, 0, 0, 4, 6, 0];

function moveZeroToEnd(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (true) {
    do {
      low++;
    } while (arr[low] != 0);

    do {
      high--;
    } while (arr[high] == 0);

    if (low > high) {
      return;
    }
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
  }
}

function printArray(arr) {
  moveZeroToEnd(arr);
  console.log(arr);
}

printArray(array);
