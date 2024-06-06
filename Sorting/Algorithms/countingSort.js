let array = [1, 4, 4, 1, 0, 1];
let newArray = [1, 4, 4, 1, 0, 1];

// naive solution
function counting(arr) {
  let count = [];
  for (let i = 0; i < arr.length; i++) {
    count[i] = 0;
  }
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]]++;
  }
  let index = 0;
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      arr[index] = i;
      index++;
    }
  }
  console.log(arr);
}
counting(array);

// general purpose implementation
function countingSort(arr, n, k) {
  let count = [];
  //   create an array with values 0
  for (let i = 0; i < k; i++) {
    count[i] = 0;
  }
  //   count the array elements and add it to count array
  // suppose 1 is present 3 times then count array will have 3 in 1st position as element
  for (let i = 0; i < n; i++) {
    count[arr[i]]++;
  }
  //   console.log(count);
  //   add the current element of the element to the previous element
  for (let i = 1; i < k; i++) {
    count[i] = count[i - 1] + count[i];
  }
  //   console.log(count);
  // Now create a new array and loop through the original array from last index to first
  // put that element in the position eg. suppose last element of the array is 1 then in the count
  // array at position 1 there is 3 and we have to add the last element 1 in 3-1 = 2nd position in
  // the new array output then the 3 in the count array at position 1 will become 2.
  let output = [];
  for (let i = n - 1; i >= 0; i--) {
    output[count[arr[i]] - 1] = arr[i];
    count[arr[i]]--;
  }
  console.log(output);
}

countingSort(newArray, newArray.length, 5);
