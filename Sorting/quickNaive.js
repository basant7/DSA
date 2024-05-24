let array = [3, 2, 1, 78, 9798, 97];

function partition(arr, l, r) {
  let p = arr[r];
  let temp = [];
  let index = 0;

  for (let i = l; i <= r; ++i) {
    if (arr[i] < p) {
      temp[index] = arr[i];
      index++;
    }
  }

  let position_of_pivot = index;

  temp[index] = p;
  index++;

  for (let i = l; i <= r; ++i) {
    if (arr[i] > p) {
      temp[index] = arr[i];
      index++;
    }
  }

  for (let i = l; i <= r; ++i) {
    arr[i] = temp[i - l];
  }
  return position_of_pivot;
}

function naive(arr, l, r) {
  if (l < r) {
    let p = partition(arr, l, r);
    naive(arr, l, p - 1);
    naive(arr, p + 1, r);
  }
}

function print(arr, l, r) {
  naive(arr, l, r);
  return arr;
}

console.log(print(array, 0, array.length - 1));
