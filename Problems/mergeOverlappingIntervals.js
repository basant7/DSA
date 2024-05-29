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
  let start = 0;
  let end = arr[res].length - 1;
  let temp = [];
  for (let i = 1; i <= n; i++) {
    if (arr[res][end] >= arr[i][start]) {
      arr[res][end] =
        arr[res][end] >= arr[i][arr[i].length - 1]
          ? arr[res][end]
          : arr[i][arr[i].length - 1];
      arr[res][start] =
        arr[res][start] <= arr[i][start] ? arr[res][start] : arr[i][start];
      temp[res] = arr[res];
    } else {
      res++;
      arr[res] = arr[i];
      temp[res] = arr[i];
    }
  }
  return temp;
}

console.log(
  intervalsEfficient(intervalCollection, intervalCollection.length - 1)
);
