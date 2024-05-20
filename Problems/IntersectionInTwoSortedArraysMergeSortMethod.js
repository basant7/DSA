let array_1 = [10, 20, 20, 40, 60];
let array_2 = [20, 20, 60, 80];

function intersection(arr1, arr2) {
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (i > 0 && arr1[i] == arr1[i - 1]) {
      i++;
      continue;
    }
    if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] === arr2[j]) {
      console.log(arr1[i]);
      i++;
      j++;
    }
  }
}
intersection(array_1, array_2);
