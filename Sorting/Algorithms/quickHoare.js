let array = [8, 4, 7, 9, 3, 10, 5];

function partition(arr, l, r) {
  let p = arr[l];
  let i = l - 1;
  let j = r + 1;
  while (true) {
    // stop while loop where you find element greater than the pivot
    do {
      i++;
    } while (arr[i] < p);

    // stop while loop where you find element less than pivot
    do {
      j--;
    } while (arr[j] > p);

    // if the left index becomes greater or equal to the right index then return j
    if (i >= j) {
      return j;
    }

    // swap the left bigger element with the smaller right element
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
}

function hoare(arr, l, r) {
  if (l < r) {
    let p = partition(arr, l, r);
    hoare(arr, l, p);
    hoare(arr, p + 1, r);
  }
}

function print(arr, l, r) {
  hoare(arr, l, r);
  return arr;
}

console.log(print(array, 0, array.length - 1));
