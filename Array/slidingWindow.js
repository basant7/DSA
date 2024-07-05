let array = [1, 8, 30, -5, 20, 7];

function slidingWindow(arr, k) {
  let sum = 0;
  //   run loop till i is less than array length - k that for the last 3 elements
  // "i" should only go upto 3rd last element otherwise for the last windows it will be [element, element, undefined]
  for (let i = 0; i <= arr.length - k; i++) {
    let curr = 0;
    // start another loop that will run upto the window size
    for (j = 0; j < k; j++) {
      // add the current element with the element at position i+j
      curr += arr[i + j];
    }
    sum = curr > sum ? curr : sum;
  }
  console.log(sum);
}

slidingWindow(array, 3);
