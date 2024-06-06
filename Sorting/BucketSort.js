let array = [0.897, 0.565, 0.656, 0.1234, 0.665, 0.3434]

function insertion(arr){
    for(let i = 0; i< arr.length; i++){
        let currentElem = arr[i];
        let j = i-1
        while(j>=0 && arr[j] > currentElem){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = currentElem
    }
}

function bucketSort(arr){
    let buckets = Array.from({length: arr.length}, () => []);
    for(let i =0; i< arr.length; i++){
        let bi = Math.floor(arr.length * arr[i])
        buckets[bi].push(arr[i])
    }
    for(let i = 0; i< buckets.length; i++){
        insertion(buckets[i])
    }
    console.log(buckets)
    let index = 0;
    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j< buckets[i].length; j++){
            arr[index++] = buckets[i][j]
        }
    }
    console.log(arr)
}

bucketSort(array)