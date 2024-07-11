let array1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
let array2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

function rotateBy90(arr) {
  let temp = new Array(4);
  for (let i = 0; i < 4; i++) {
    temp[i] = new Array(4);
  }
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      temp[n - j - 1][i] = arr[i][j];
    }
  }
  console.log(temp);
}

function rotateBy90Better(arr) {
  //   first transpose the array and then reverse columns in the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      let t = arr[i][j];
      arr[i][j] = arr[j][i];
      arr[j][i] = t;
    }
  }
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let low = 0,
      high = arr.length - 1;
    while (low < high) {
      let t = arr[low][i];
      arr[low][i] = arr[high][i];
      arr[high][i] = t;
      low++;
      high--;
    }
  }

  console.log(arr);
}

rotateBy90Better(array1);
rotateBy90(array2);

//  [ 4, 8, 12, 16 ]
//  [ 3, 7, 11, 15 ]
//  [ 2, 6, 10, 14 ]
//  [ 1, 5, 9, 13 ]
