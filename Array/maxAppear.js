let array1 = [1, 2, 4];
let array2 = [4, 5, 7];

function maxAppear(arr1, arr2) {
  let freq = new Array(100).fill(0);
  for (let i = 0; i < arr1.length; i++) {
    for (let j = arr1[i]; j <= arr2[i]; j++) {
      freq[j] = freq[j] + 1;
    }
  }

  let res = 0;
  for (let i = 1; i < freq.length; i++) {
    if (freq[i] > res) {
      res = i;
    }
  }
  return res;
}

console.log(maxAppear(array1, array2));
