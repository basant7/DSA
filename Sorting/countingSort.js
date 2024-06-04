let array = [1,4,4,1,0,1];

// naive solution
function counting(arr){
    let count = [];
    for(let i = 0; i < arr.length; i++){
        count[i] = 0;
    }
    for(let i = 0; i< arr.length; i++){
        count[arr[i]]++;
    }
    let index = 0;
    for(let i = 0; i < count.length; i++){
        for(let j = 0; j < count[i]; j++){
            arr[index] = i
            index++;
        }
    }
    console.log(arr)
}
counting(array)