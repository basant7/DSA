let array = [1, 2, 3, 4, 5, 6, 7, 8];

function leftRotate(arr) {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
}

function repeatForR(arr, r) {
  for (let i = 0; i < r; i++) {
    leftRotate(arr);
  }
  return arr;
}

// console.log(repeatForR(array, 3));

// Method 2

function leftRotateBetter(arr, r) {
  let temp = [];
  for (let i = 0; i < r; i++) {
    temp[i] = arr[i];
  }
  //   temp = [1,2,3]
  for (let i = r; i < arr.length; i++) {
    arr[i - r] = arr[i];
  }
  //   arr = [4,5,6,7,8,4,5,6]
  for (let i = 0; i < temp.length; i++) {
    arr[arr.length - r + i] = temp[i];
  }
  //   arr = [4,5,6,7,8,1,2,3]
  console.log(arr);
}

leftRotateBetter(array, 3);
