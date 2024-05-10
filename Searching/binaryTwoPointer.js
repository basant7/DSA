// Two pointer technique

let array = [2,5,8,12,30], num = 17, startIndex = 0, endIndex = array.length - 1;
// let array = [2,4,8,9,11,12,20,30], num = 23, startIndex = 0, endIndex = array.length - 1;

function binary(arr, n, first, last){
    if(arr.length <= 0){
        return false
    }
    if(arr[0] > n){
        return -1
    }
    while(first < last){
        if(arr[first] + arr[last] === n){
            return first + " " +last;
        }else if(arr[first] + arr[last] > n){
            // if the element at index first + element at index last are greater than 23
            // then decrement the last index because the values after the first index will
            // always be greater than 23
            last--
        }else{
            // if the element at index first + element at index last are less than 23
            // then increment the first index because the values before the last index will
            // always be smaller than 23
            first++
        }
    }
    return -1
}

console.log(binary(array, num, startIndex, endIndex))