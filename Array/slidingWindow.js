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

// linear time approach
function slidingWindowBetter(arr, k) {
  let curr = 0;
  // add all elements of the current window
  for (let i = 0; i < k; i++) {
    curr += arr[i];
  }
  let maxSum = curr;
  // now run another loop from k to length of the array
  for (let i = k; i < arr.length; i++) {
    // add the sum of the current window with the next element
    //  and also subtract the previous element i.e. if k = 3 then i-k = 3-3 = arr[0]
    curr += arr[i] - arr[i - k];
    maxSum = curr > maxSum ? curr : maxSum;
  }
  console.log(maxSum);
}

slidingWindowBetter(array, 3);

slidingWindow(array, 3);
