let array_1 = [10, 20, 20, 40, 60];
let array_2 = [20, 20, 60, 80];

function union(arr1, arr2) {
  // SOLUTION 1 ------>
  // let arr = [], k = 0;
  // for(let i = 0; i< arr1.length; i++){
  //     arr[k] = arr[i];
  //     k++;
  // }
  // for(let j = 0; j< arr2.length; j++){
  //     arr[k] = arr[j];
  //     k++;
  // }
  // sort(arr);
  // for(let i = 0; i< arr.length; i++){
  //     if(i > 0 && arr[i] == arr[i - 1]){
  //         continue;
  //     }
  //     console.log(arr[i])
  // }

  // SOLUTION 2
  let i = 0,
    j = 0;
  while (i < arr1.length && j < arr2.length) {
    // if the previous element in arr1 is equal to the current element of arr1 then continue
    if (i > 0 && arr1[i] == arr1[i - 1]) {
      i++;
      continue;
    }
    // if the previous element in arr2 is equal to the current element of arr2 then continue
    if (j > 0 && arr2[j] == arr2[j - 1]) {
      j++;
      continue;
    }
    if (arr1[i] > arr2[j]) {
      console.log(arr2[j]);
      j++;
    } else if (arr1[i] < arr2[j]) {
      console.log(arr1[i]);
      i++;
    } else {
      console.log(arr1[i]);
      i++;
      j++;
    }
  }
  // print the remaining elements of the arr1 and arr2
  // and also check if the previous element is not equal to the current element
  while (i < arr1.length) {
    if (i > 0 && arr1[i] != arr1[i - 1]) {
      console.log(arr1[i]);
      i++;
    }
  }
  while (j < arr2.length) {
    if (j > 0 && arr2[j] != arr2[j - 1]) {
      console.log(arr2[j]);
      j++;
    }
  }
}

union(array_1, array_2);
