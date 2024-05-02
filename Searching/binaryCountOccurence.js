let arr = [10,20,30,30,30,30,30,30,30,30,30,30,30,30,30,30, 40,50], n = 30; firstIndex = 0; lastIndex = arr.length - 1;

function firstOccurence(arr, n, start, end){
    let mid = Math.floor((start + end)/2);
    if(start <= end){
        if(arr[mid] > n){
            return firstOccurence(arr, n, start, mid - 1);
        }else if(arr[mid] < n){
            return firstOccurence(arr, n, mid + 1, end);
        }else{
            if(mid === 0 || arr[mid] !== arr[mid -1]){
                return mid
            }else{
                return firstOccurence(arr, n, start, mid - 1)
            }
        }
    }
    return -1
}

function lastOccurence(arr, n, start, end){
    let mid = Math.floor((start + end)/2);
    if(start <= end){
        if(arr[mid] > n){
            return lastOccurence(arr, n, start, mid - 1);
        }else if(arr[mid] < n){
            return lastOccurence(arr, n, mid + 1, end);
        }else{
            if(mid === 0 || arr[mid] !== arr[mid + 1]){
                return mid
            }else{
                return lastOccurence(arr, n, mid + 1, end)
            }
        }
    }
    return -1
}

function countOccurence(){
    let first = firstOccurence(arr, n, firstIndex, lastIndex);
    if(first == -1){
        return 0;
    }else{
        return (lastOccurence(arr, n, firstIndex, lastIndex) - first + 1);
    }
}
console.log(countOccurence());