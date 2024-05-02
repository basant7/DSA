let arr = [10,20,30,40, 40,50,50,50,70], n=50, firstIndex = 0, lastIndex = arr.length - 1;
function binary(arr, n, start, end){
    // if array is empty return false
    if(arr.length <= 0){
        return false
    }
    // if starting index is less than the last index
    if(start <= end){
        // find the mid element
        let mid = Math.floor((start + end)/2)
        // if mid element is smaller than n then starting index will be mid + 1
        if(arr[mid] < n){
            return binary(arr, n, mid + 1, end)
        // if mid element is bigger than n then last index will be mid - 1
        }else if(arr[mid] > n){
            return binary(arr, n, start, mid-1)
        }else{
            // if the mid index becomes 0 OR mid element is not equal to the next element in the array then return the index
            if(mid === 0 || arr[mid + 1] != arr[mid]){
                return mid
            }else{
            // if mid element is equal to the next element in the array then perform search again
            // starting index will be mid + 1
                return binary(arr, n, mid + 1, end)
            }
        }
    }
    return false
}

console.log(binary(arr, n, firstIndex, lastIndex))