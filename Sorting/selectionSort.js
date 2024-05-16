let array = [5, 4, 7, 9, 1];

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    // set minimum value to index i
    let min_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      // if the current element is smaller than the element at min_index then
      // min_index will be the current element
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    // swap the minimum value with the value at index i
    if (i != min_index) {
      let temp = arr[i];
      arr[i] = arr[min_index];
      arr[min_index] = temp;
    }
  }
  return arr;
}

console.log(selection(array));
