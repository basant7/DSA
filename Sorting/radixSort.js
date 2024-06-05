let array = [319, 212, 6, 8, 100, 50];

function counting(arr, n, exp) {
  let count = [];
  let output = [];
  for (let i = 0; i < 10; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    count[Math.floor((arr[i] / exp) % 10)]++;
  }
  for (let i = 1; i < 10; i++) {
    count[i] = count[i - 1] + count[i];
  }
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor((arr[i] / exp) % 10)] - 1] = arr[i];
    count[Math.floor((arr[i] / exp) % 10)]--;
  }
  for (i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}

function radixSort(arr, n) {
  let max = arr[0];
  for (let i = 0; i < n; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  for (let i = 1; Math.floor(max / i) > 0; i = i * 10) {
    counting(arr, n, i);
  }
  console.log(arr);
}

radixSort(array, array.length);
