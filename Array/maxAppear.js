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

function maxAppearBetter(leftArray, rightArray) {
  let freq = new Array(101).fill(0);
  // Traverse through all ranges and mark begining and ending in freq array
  // eq if 1st element in left array is 2 then at 2nd position the value will increment by 1
  // and if the 1st element of the right array is 4 then the 4+1=5th position will be decremented
  for (let i = 0; i < leftArray.length; i++) {
    freq[leftArray[i]]++;
    freq[rightArray[i] + 1]--;
  }
  let res = 0;
  //   now do prefix in the freq array and check for the largest value there and return its index
  for (let i = 1; i < freq.length; i++) {
    freq[i] += freq[i - 1];
    if (freq[i] > res) res = i;
  }
  return res;
}

console.log(maxAppear(array1, array2));
console.log(maxAppearBetter(array1, array2));
