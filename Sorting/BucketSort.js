let array = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434];

function insertion(arr) {
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    // if j > 0 and prev element is greater then curr element then swap and do j--
    while (j > 0 && arr[j - 1] > arr[j]) {
      let temp = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = temp;
      j--;
    }
  }
}

function bucketSort(arr) {
  // create buckets with length of array i.e. 6 empty arrays inside buckets array
  let buckets = Array.from({ length: arr.length }, () => []);
  //   add the elements into the different bucket based on the arr.length * arr[i] calculations.
  for (let i = 0; i < arr.length; i++) {
    let bi = Math.floor(arr.length * arr[i]);
    buckets[bi].push(arr[i]);
  }
  //   now sort each array inside bucket using insertion sort
  for (let i = 0; i < buckets.length; i++) {
    insertion(buckets[i]);
  }
  let index = 0;
  //   now add the elements from each array in buckets to original array
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr[index++] = buckets[i][j];
    }
  }
  console.log(arr);
}

bucketSort(array);
