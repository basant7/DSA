let arr = [3, 7, 8, 9, 4, 5, 1];

let result = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > result) {
    result = arr[i];
  }
}
console.log(result);
