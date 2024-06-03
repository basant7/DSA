let array = [4,10,3,5,1]

function maxHeapify(arr, n, i){
    let parent = i;
    let leftChild = 2*i + 1;
    let rightChild = 2*i + 2;
    if(leftChild < n && arr[leftChild] > arr[parent]){
        parent = leftChild;
    }
    if(rightChild < n && arr[rightChild] > arr[parent]){
        parent = rightChild;
    }

    if(parent != i){
        let temp = arr[parent];
        arr[parent] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, n, parent)
    }
}

// to convert an array to max heap
function buildHeap(arr, n){
    // we build the max heap here
    for(let i = Math.floor(n/2 -1); i>=0; --i){
        maxHeapify(arr, n, i)
    }

    for(let i = n-1; i>=0; i--){
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp
        maxHeapify(arr, i, 0)
    }
    return arr;
}

console.log(buildHeap(array, array.length))