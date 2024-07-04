let array = [8, 8, 6, 6, 6, 8, 7, 8, 8];

function majority(arr) {
  let maxCount = 0;
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count++;
      }
    }
    if (count > maxCount) {
      maxCount = count;
      pos = i;
    }
  }
  if (maxCount > arr.length / 2) {
    return pos;
  } else {
    return -1;
  }
}

// console.log(majority(array));

// optimized solution
function majorityElem(arr) {
  let res = 0,
    count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[res] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count == 0) {
      (res = i), (count = 1);
    }
  }
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[res] === arr[i]) {
      count++;
    }
  }
  if (count < arr.length / 2) {
    return -1;
  }
  return res;
}

console.log(majorityElem(array));
