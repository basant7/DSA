// the naive solution will be to just sort the array and then result = array[k-1]

// solution using quick sort's partition method
let array = [20, 6, 10, 5, 2, 7];

// function partition(arr, l, h) {
//   let p = arr[h];
//   let temp = [];
//   let index = 0;
//   for (let i = l; i <= h; i++) {
//     if (arr[i] < p) {
//       temp[index++] = arr[i];
//     }
//   }
//   let position = index;
//   temp[index++] = p;

//   for (let i = l; i <= h; i++) {
//     if (arr[i] > p) {
//       temp[index++] = arr[i];
//     }
//   }
//   for (let i = l; i <= h; i++) {
//     arr[i] = temp[i-l]
//   }
//   console.log(arr)
//   return position;
// }
function partition(arr, l, r) {
  var x = arr[r],
    i = l;
  for (j = l; j <= r - 1; j++) {
    if (arr[j] <= x) {
      // Swapping arr[i] and arr[j]
      var temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      i++;
    }
  }

  // Swapping arr[i] and arr[r]
  var temp = arr[i];
  arr[i] = arr[r];
  arr[r] = temp;

  return i;
}

function findKthSmallest(arr, l, r, k) {
  if (k > 0 && k <= r - l + 1) {
    var pos = partition(arr, l, r);
    if (pos - l == k - 1)
        return arr[pos];
    if (pos - l > k - 1)
        return findKthSmallest(arr, l, pos - 1, k);
    return findKthSmallest(arr, pos + 1, r, 
    k - pos + l - 1);
}
  return -1;
}

console.log(findKthSmallest(array, 0, array.length - 1, 2));
