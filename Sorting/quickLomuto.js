let array = [8, 4, 7, 9, 3, 10, 5];

function partition(arr, l, r) {
    // last element in arr will be the pivot
  let p = arr[r];
//   index will be the l - 1 for starting
  let index = l - 1;
  let temp = 0;
  for (let i = l; i < r; i++) {
    // if current element is less than pivot
    if (arr[i] < p) {
        // increment the index and swap(arr[index], arr[i])
      ++index;
      temp = arr[index];
      arr[index] = arr[i];
      arr[i] = temp;
    }
  }

  
  let pI = ++index;
//   swap the element at index with last element of the array
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
