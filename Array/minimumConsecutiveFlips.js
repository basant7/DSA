let array = [1, 1, 0, 0, 0, 1, 0, 1, 1, 1];

function flips(arr) {
  let firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // check if the current element and previous element are not same
    if (arr[i] != arr[i - 1]) {
      // check if the current element and first element are not same
      if (arr[i] !== firstElement) {
        console.log("from ", i, " to ");
      } else {
        console.log(i - 1);
      }
    }
  }
}

return flips(array);
