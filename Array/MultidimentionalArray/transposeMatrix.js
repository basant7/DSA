let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function transpose(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = temp;
    }
  }
  return arr;
}

console.log(transpose(array, 4, 4));
// [ 1, 5, 9, 13 ]
// [ 2, 6, 10, 14 ]
// [ 3, 7, 11, 15 ]
// [ 4, 8, 12, 16 ]
