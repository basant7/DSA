let array = [1, 0, 0, 1, 1, 1, 0, 0, 1, 1];

function maxConsecutive(arr) {
  let max = 0;
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      current = 0;
    } else {
      current++;
      max = current > max ? current : max;
    }
  }
  console.log(max);
}

maxConsecutive(array);
