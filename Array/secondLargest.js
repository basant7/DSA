// second largest

let array = [12, 10, 8, 15, 14, 9];

function secondLargest(arr) {
  // give max the predefault lowest value
  let max = -Infinity,
    secondMax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    // check if max is less than the current element then
    //  replace the value of max with the current element
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
      //   for the secondMax check if the current element is greater than the secondMax
      //  and also check if the current element is not the same as the max
    } else if (secondMax < arr[i] && max != arr[i]) {
      secondMax = arr[i];
    }
  }
  console.log("largest element in the array is ", max);
  console.log("Second largest element in the array is ", secondMax);
}

secondLargest(array);
