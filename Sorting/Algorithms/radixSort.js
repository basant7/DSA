let array = [319, 212, 6, 8, 100, 50];

function counting(arr, n, exp) {
  let count = [];
  let output = [];
  //   counting sort start
  for (let i = 0; i < 10; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    // for 1s, 10s and 100s value
    count[Math.floor((arr[i] / exp) % 10)]++;
  }
  for (let i = 1; i < 10; i++) {
    count[i] = count[i - 1] + count[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor((arr[i] / exp) % 10)] - 1] = arr[i];
    count[Math.floor((arr[i] / exp) % 10)]--;
  }
  //   counting sort end
  // copy the output array to the original array
  for (i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr, n) {
  let max = arr[0];
  //   get the maximim element from the array
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // loop till max/i will be greater than 0
  // here max = 319 so therefore we will loop 3 times i.e. 319, 31, 3
  for (let i = 1; Math.floor(max / i) > 0; i = i * 10) {
    counting(arr, n, i);
  }
  console.log(arr);
}

radixSort(array, array.length);
