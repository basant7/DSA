let array = [10, 10, 10, 25, 30, 30];

function frequencies(arr) {
  let count = 1;
  let i;
  for (i = 1; i < arr.length; i++) {
    if (arr[i - 1] == arr[i]) {
      count++;
    } else {
      console.log("count of ", arr[i - 1], " = ", count);
      count = 1;
    }
  }
  console.log("count of ", arr[i - 1], " = ", count);
}

frequencies(array);

// using hash map ( object )
function freq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }
  }
  console.log(obj);
}

freq(array);
