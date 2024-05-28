let array = [0,1,1,2,0,1];

function partition(arr, l, h){
    let low = l;
    let mid = l;
    let high = h;
    while(mid <= high){
        if(arr[mid] === 0){
            let temp = arr[low];
            arr[low] = arr[mid]; 
            arr[mid] = temp;
            low++; 
            mid++;
        }else if(arr[mid] === 1){
            mid++;
        }else{
            let temp = arr[mid];
            arr[mid] = arr[high]; 
            arr[high] = temp;
            high--;
        }
        console.log
    }
    return arr
}

function swap(a, b){
    let temp = a;
    a = b; 
    b = temp;
}

console.log(partition(array, 0, array.length - 1))