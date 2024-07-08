// find sum of array 2 to 6 using prefix sum

let array = [2, 4, 5, 4, 6, 1];

function prefixSum(arr) {
  let temp = [];
  temp[0] = arr[0];
  for (let i = 1; i < arr.length; i++) {
    temp[i] = arr[i] + temp[i - 1];
  }
  return temp;
}

function getSum(arr, from, to) {
  let temp = prefixSum(arr);
  if (from == 0) return temp[to];
  return temp[to] - temp[from - 1];
}

console.log(getSum(array, 2, 5));
