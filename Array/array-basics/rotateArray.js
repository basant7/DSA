let arr = [1, 2, 3, 4, 5, 6];
let k = 4;

function rotate(arr, k) {
  let temp = [];
  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }
  return temp;
}

console.log(rotate(arr, k));
