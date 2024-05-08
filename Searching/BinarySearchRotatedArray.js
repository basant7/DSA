let array = [100, 200, 10, 20, 30, 40, 50], startIndex = 0; endIndex = array.length - 1;

function binary(arr, first, last){
    if(first <= last){
        let mid = Math.floor((first + last) / 2);
        if(arr[mid] > arr[first]){
            return binary(arr, mid + 1, last)
        }else if(arr[mid] <= arr[first]){
            if(mid === 0 || arr[mid -1] > arr[mid]){
                return mid
            }else{
                return binary(arr, first, mid - 1)
            }
        }
    }
    return -1
}

console.log(binary(array, startIndex, endIndex))