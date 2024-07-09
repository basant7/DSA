let array = [3, 4, 6, 1, 1, 1, 1, 4];
// given an array, check if it can be partitioned into 3  different parts with equal sum
function partitionSum(arr) {
  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  if (totalSum % 3 !== 0) return false;

  let partitionNumber = totalSum / 3;
  let partitionIncrement = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === partitionNumber) {
      partitionIncrement++;
      sum = 0;
    }

    if (partitionIncrement == 2) return true;
  }
  return false;
}

console.log(partitionSum(array));
