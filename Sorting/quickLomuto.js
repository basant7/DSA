let array = [8, 4, 7, 9, 3, 10, 5];

function partition(arr, l, r) {
  let p = arr[r];
  let index = l - 1;
  let temp = 0;
  for (let i = l; i < r; i++) {
    if (arr[i] < p) {
      ++index;
      temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }

  let pI = ++index;
  temp = arr[index];
  arr[index] = p;
  arr[r] = temp;
  return pI;
}

function lomuto(arr, l, r) {
  if (l < r) {
    let p = partition(arr, l, r);
    lomuto(arr, l, p - 1);
    lomuto(arr, p + 1, r);
  }
}

function print(arr, l, r) {
  lomuto(arr, l, r);
  return arr;
}

console.log(print(array, 0, array.length - 1));
