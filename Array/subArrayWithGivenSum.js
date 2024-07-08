let array = [1, 4, 0, 0, 3, 10, 5];

// My solution
function subArrayWithGivenSum(arr, k) {
  let curr = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (curr < k) {
      curr = curr + arr[i];
    }
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
function sumArray(arr, sum) {
  let curr = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    curr = curr + arr[i];
    while (sum < curr) {
      curr -= arr[j];
      j++;
    }
    if (curr == sum) {
      return "yes";
    }
  }
  return "no";
}

console.log(sumArray(array, 7));

console.log(subArrayWithGivenSum(array, 7));
