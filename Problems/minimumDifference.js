// to find the minimum difference between elements in an array
// first sort the array and then do (arr[i] - arr[i+1]) and push each
// difference into a temp array and then find the minimum element there

let array = [20, 13, 2, 6, 9];

function partition(arr, l, h) {
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

    if (i >= j) return j;

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function quickSort(arr, l, h) {
  if (l < h) {
    let p = partition(arr, l, h);
    quickSort(arr, l, p);
    quickSort(arr, p + 1, h);
  }
}

function minimumDiff(arr, l, h) {
  quickSort(arr, l, h);
  console.log(arr);
  let temp = [],
    index = 0;
  for (let i = 0; i < arr.length-1; i++) {
    temp[index++] = arr[i + 1] - arr[i];
  }
  console.log(temp)
  let min = Infinity;
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] < min) {
      min = temp[i];
    }
  }
  return min;
}

console.log(minimumDiff(array, 0, array.length - 1));
