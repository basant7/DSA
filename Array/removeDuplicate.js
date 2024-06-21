let array = [10, 20, 20, 20, 30, 30];

function removeDuplicate(arr) {
  let temp = [],
    index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!temp.includes(arr[i])) {
      temp[index] = arr[i];
      index++;
    }
  }
  console.log(temp);
}

removeDuplicate(array);
