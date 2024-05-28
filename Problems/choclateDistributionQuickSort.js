// distribute the choclate to children in such a way that the gap is minimum
// between choclates distribution for each kid
let array = [7, 3, 1, 8, 9, 12, 56];

function partition(arr, l, h) {
  let pivot = arr[l];
  let i = l - 1;
  let j = h + 1;
  while (true) {
    do {
      i++;
    } while (arr[i] < pivot);

    do {
      j--;
    } while (arr[j] > pivot);

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

function choclate(arr, l, h, m) {
  quickSort(arr, l, h);
  let min = Infinity;
  let startingIndex;
  let endingIndex;
//   m will be the no. of childern
  for (let i = 0; i < arr.length - m - 1; i++) {
    if (arr[i + m - 1] - arr[i] < min) {
      startingIndex = i;
      endingIndex = i + m - 1;
    }
  }
  for (let i = startingIndex; i <= endingIndex; i++) {
    console.log(arr[i]);
  }
}

choclate(array, 0, array.length - 1, 3);
