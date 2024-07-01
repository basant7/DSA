let array = [10, 12, 14, 7, 8];

function EvenOddSubarray(arr) {
  let max = 1;
  let current = 1;
  let temp = [];
  // add remainder to the new tamp array
  // 0 -> even & 1 -> odd
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i] % 2);
  }
  // temp [0,0,0,1,0]
  for (let i = 1; i < temp.length; i++) {
    // if last element is not equal to the current element then
    // increment current and compare it with max to check which is the bigger value
    if (temp[i - 1] != temp[i]) {
      current++;
      max = current > max ? current : max;
    } else {
      current = 1;
    }
  }
  console.log(max);
}

function EvenOddSubarrayAlternate(arr) {
  let max = 1;
  let current = 1;

  for (let i = 1; i < arr.length; i++) {
    if (
      (arr[i - 1] % 2 === 0 && arr[i] % 2 === 1) ||
      (arr[i - 1] % 2 === 1 && arr[i] % 2 === 0)
    ) {
      current++;
      max = current > max ? current : max;
    } else {
      current = 1;
    }
  }
  console.log(max);
}

EvenOddSubarray(array);
EvenOddSubarrayAlternate(array);
