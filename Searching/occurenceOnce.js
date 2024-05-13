let array = [0,2,1,3,2,2];

function occurence(arr){
    // 1st approach -> sort the array and then check if arr[i] == arr[i+1] and return the repeated number.
    // 2nd approach -> create a new array with size similiar to the current array and mark it false
    let arr1 = new Array(arr.length).fill(false);
    for(let i = 0; i< arr.length; i++){
        if(arr1[arr[i]]){
            return arr[i]
        }
        arr1[arr[i]] = true
    }
}

console.log(occurence(array))