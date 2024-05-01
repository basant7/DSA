let arr = [10,20,30,40,50,60,70], n=20;
let start = 0, end=arr.length - 1;
function binary(arr, n, startIndex, endIndex){
    if(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex + endIndex) / 2);
        if(arr[midIndex] === n){
            console.log(midIndex)
        }else if (arr[midIndex] > n){
            binary(arr, n, startIndex, midIndex-1)
        }else{
            binary(arr, n, midIndex+1, endIndex)
        }
    }
    return false
}

binary(arr, n, start, end)