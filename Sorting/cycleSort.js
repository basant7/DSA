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
    element = arr[start];
    pos = start;
    for (let i = start + 1; i < arr.length; i++) {
      if (arr[i] < element) {
        pos++;
      }
    }
    if (pos == start) {
      continue;
    }
    while (element == arr[pos]) {
      pos++;
    }
    if (pos != start) {
      let temp = element;
      element = arr[pos];
      arr[pos] = temp;
    }

    while (pos != start) {
      pos = start;
      for (i = start + 1; i < arr.length; i++) {
        if (arr[i] < element) {
          pos += 1;
        }
      }
      while (element == arr[pos]) {
        pos += 1;
      }

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
