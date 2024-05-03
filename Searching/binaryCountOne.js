let arr = [0,0,0,1,1,1,1,1,1], n = 1; firstIndex = 0; lastIndex = arr.length - 1;

function binary(arr, n, start, end){
    if(arr.length <= 0){
        return -1
    }
    if(start <= end){
        let mid = Math.floor((start + end) / 2)
        if(arr[mid] == 0){
            return binary(arr, n, mid + 1, end)
        }else{
            if(mid == 0 || arr[mid - 1] != 1){
                return (arr.length - mid);
            }else{
                return binary(arr, n, start, mid - 1)
            }
        }
    }
    return -1
}

console.log(binary(arr, n, firstIndex, lastIndex))