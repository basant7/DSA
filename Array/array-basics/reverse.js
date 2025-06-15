let arr = [1, 2, 3, 4, 5];

let j = arr.length - 1;
for (let i = 0; i < arr.length; i++) {
  if (i > j) {
    break;
  }
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j--] = temp;
}

console.log(arr);
