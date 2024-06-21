let array = [1, 2, 3, 4, 5, 6];

function reverse(arr) {
  let result = [],
    index = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    result[index] = arr[i];
    index++;
  }
  console.log(result);
}

// reverse(array);

// other way
function reversePart2(arr) {
  let low = 0;
  let high = arr.length - 1;
  while (low < high) {
    let temp = arr[low];
    arr[low] = arr[high];
    arr[high] = temp;
    low++;
    high--;
  }
  console.log(arr);
}

reversePart2(array);
