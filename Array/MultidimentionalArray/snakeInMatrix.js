let array = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function snake(arr) {
  let index = 0;
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      for (let j = 0; j < arr.length; j++) {
        temp[index++] = arr[i][j];
      }
    } else {
      for (let j = arr.length - 1; j >= 0; j--) {
        temp[index++] = arr[i][j];
      }
    }
  }
  return temp;
}

console.log(snake(array)); // 1,2,3,4, 8,7,6,5, 9,10,11,12, 16,15,14,13
