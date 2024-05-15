let array = [5, 4, 6, 2, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array));

// optimized solution

function optimizedBubbleSort(arr){
    let swapped = true;
    while(swapped){
        swapped = false;
        for(let i = 0; i< arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i+1]
                arr[i+1] = temp
                swapped = true;
            }
        }
    }
    return arr
}

console.log(optimizedBubbleSort(array))
