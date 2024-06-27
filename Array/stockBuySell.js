let array = [3, 6, 9, 12, 8, 7, 6, 5, 20];

function stock(arr) {
  let profit = 0;
  let i = 1,
    j = 0;
  // start i from 2nd and j from 1st element
  while (i < arr.length) {
    // check if the current element is greater then the next element then
    // take j as the next element and increment j by 1
    if (arr[j] > arr[j + 1]) {
      j++;
      //   also check for j as it should not exceed i
      // and if it exceeds then do i = j + 1
      if (j >= i) {
        i = j + 1;
      }
      // if the previous element j is less than the current element i
      // also check if the current element is greater than the next element or if current element is the last element
    } else if (
      arr[j] < arr[i] &&
      (arr[i] > arr[i + 1] || i == arr.length - 1)
    ) {
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
