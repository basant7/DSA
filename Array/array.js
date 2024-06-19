// second largest

let array = [12, 10, 8, 15, 14, 9]

function secondLargest(arr){
    let max = -Infinity, secondMax = -Infinity;
    for(let i = 0; i< arr.length; i++){
        if(max < arr[i]){
            secondMax = max;
            max = arr[i];
        }else if(secondMax < arr[i] && max != arr[i]){
            secondMax = arr[i]
        }
    }
    console.log("largest element in the array is ", max)
    console.log("Second largest element in the array is ", secondMax)
}

secondLargest(array)