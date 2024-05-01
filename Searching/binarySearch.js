let arr = [1,2,3,4,5,6,7,8], n=7;
let lowIndex = arr[0], highIndex = arr.length - 1;
function binary(arr, n, low, high){
    while(low <= high){
        let midIndex = Math.floor((low + high) / 2);
        if(n === arr[midIndex]){
            console.log("Element found at index ", midIndex)
            return true;
        }else if(n > midIndex){
            low = midIndex + 1;
        }else{
            high = midIndex - 1;
        }
    }
    return false
}

binary(arr, n, lowIndex, highIndex)