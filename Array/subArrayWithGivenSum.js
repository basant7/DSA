let array = [1, 4, 0, 0, 3, 10, 5];

// My solution
function subArrayWithGivenSum(arr, k) {
  let curr = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    // check if the current sum is < k then add the ith element to the current sum
    if (curr < k) {
      curr = curr + arr[i];
    }
    // if the current sum becomes greater than the k
    // remove the element at j from the current sum and then increment the j to next position
    // also decrement the i to reloop the current element
    if (curr > k) {
      curr = curr - arr[j];
      i--;
      j++;
    }
    if (curr == k) {
      return "yes";
    }
  }
  return "no";
}

// geeks of geeks solution
function sumArray(arr, k) {
  let curr = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    curr = curr + arr[i];
    // check if k is < current sum then minus the element at index j from the current sum
    // and increment the j
    // run loop and do the above until k becomes equal or greater than current sum
    while (k < curr) {
      curr -= arr[j];
      j++;
    }
    if (curr == k) {
      return "yes";
    }
  }
  return "no";
}

console.log(sumArray(array, 7));

console.log(subArrayWithGivenSum(array, 7));
