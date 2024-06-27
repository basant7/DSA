let array = [1, 5, 3, 8, 12, 8, 14, 15, 12, 15];

function stock(arr) {
  let profit = 0;
  let i = 1,
    j = 0;
  // start i from 2nd and j from 1st element
  while (i < arr.length) {
    // if the previous element j is less than the current element i
    // also check if the current element is greater than the next element or if current element is the last element
    if (arr[j] < arr[i] && (arr[i] > arr[i + 1] || i == arr.length - 1)) {
      // subtract the previous element at j from the current element at i and add it to the profit
      profit += arr[i] - arr[j];
      //   increment i by 2 and j will be the previous element of i
      i = i + 2;
      j = i - 1;
      //   if the current element is less than the next element then go to next element
    } else if (arr[i] < arr[i + 1]) {
      i++;
    }
  }
  return profit;
}

console.log(stock(array));
