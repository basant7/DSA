const intervalCollection = [
  [1, 3],
  [2, 6],
  [5, 10],
  [15, 18],
  [19, 21],
  [20, 24],
  [25, 29],
];
function intervals(intervalArray, l, h) {
  let low = l;
  let mid = l;
  let temp = [];
  let index = l;
  while (mid < h) {
    do {
      mid++;
    } while (
      mid != h &&
      intervalArray[mid][intervalArray[mid].length - 1] >=
        intervalArray[mid + 1][0]
    );

    temp[index++] = [
      intervalArray[low][0],
      intervalArray[mid][intervalArray[mid].length - 1],
    ];
    low = mid + 1;
  }
  return temp;
}

console.log(intervals(intervalCollection, 0, intervalCollection.length - 1));

// more efficient
function intervalsEfficient(arr, n) {
  let res = 0;
  // starting index of inner array i.e [1, 3] so start will be at 0 i.e. 1
  let start = 0;
  // last index of the inner array i.e. [1, 3] so 3
  let end = arr[res].length - 1;
  let temp = [];
  for (let i = 1; i <= n; i++) {
    // if the last index of the prev array is greater than the first element of the current array
    // then of inside this if condition e.g. [1,3], [2,6] here if 3 >= 2
    if (arr[res][end] >= arr[i][start]) {
      // place the smallest element of index 0 i.e. 1 or 2 from [1,3], [2,6] as the first element in new inner array i.e. [1]
      // place the maximum element of  last index i.e. 3 or 6 from [1,3], [2,6] as the last element in new inner array i.e. [1, 6]
      arr[res][end] =
        arr[res][end] >= arr[i][arr[i].length - 1]
          ? arr[res][end]
          : arr[i][arr[i].length - 1];
      arr[res][start] =
        arr[res][start] <= arr[i][start] ? arr[res][start] : arr[i][start];
      // add the new subarray to temp array
      temp[res] = arr[res];
    } else {
      // if the last index of the prev array is not greater than the first element of the current array then goto the next element
      res++;
      arr[res] = arr[i];
      // copy the current subarray to the temp
      temp[res] = arr[i];
    }
  }
  return temp;
}

console.log(
  intervalsEfficient(intervalCollection, intervalCollection.length - 1)
);
