let array = [20, 40, 50, 10, 30, 90, 80, 70, 60];

function cycleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
    let temp = arr[i];
    arr[i] = arr[count];
    arr[count] = temp;
  }
  return arr;
}
console.log(cycleSort(array));

// cycle sort
function cycle(arr) {
  let element, pos;
  for (let start = 0; start < arr.length - 1; start++) {
    // element will be at index start
    element = arr[start];
    // set position as start
    pos = start;
    // loop and find how many elements are smaller than the "element" starting from the next element from start
    // and increment the pos
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < element) {
        pos++;
      }
    }
    // check if pos is at its own starting place then continue
    if (pos == start) {
      continue;
    }
    // check if "element" is equal to the element at pos
    // duplicate check than increment pos
    while (element == arr[pos]) {
      pos++;
    }
    // if pos is not equal to start (for in-place swapping)
    // swap the element with the current pos value
    if (pos != start) {
      let temp = element;
      element = arr[pos];
      arr[pos] = temp;
    }

    // run a loop while pos is not at the same index as start
    while (pos != start) {
      // set pos = start and loop to the array length and find how many elements are smaller to the "element"
      // every time you find a smaller element do pos++
      pos = start;
      for (i = start + 1; i < arr.length; i++) {
        if (arr[i] < element) {
          pos += 1;
        }
      }
      //   duplicate element check than do pos++
      while (element == arr[pos]) {
        pos += 1;
      }
      //   check if "element" is not the same element at pos
      // swap the "element" with current pos element
      if (element != arr[pos]) {
        temp = element;
        element = arr[pos];
        arr[pos] = temp;
      }
    }
  }
  return arr;
}
console.log(cycle(array));
