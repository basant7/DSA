let array = [4,10,3,5,1]

function maxHeapify(arr, n, i){
    // create parent, left node and right node
    let parent = i;
    let leftChild = 2*i + 1;
    let rightChild = 2*i + 2;

    // check if left node index is less than arr length and also check
    // if left child is greater than the current parent
    // if yes then make left node as the parent index;
    if(leftChild < n && arr[leftChild] > arr[parent]){
        parent = leftChild;
    }
    // check if right node index is less than arr length and also check
    // if right child is greater than the current parent
    // if yes then make right node as the parent index;
    if(rightChild < n && arr[rightChild] > arr[parent]){
        parent = rightChild;
    }

    // if parent is not the same as before then swap it with the
    // element at i index and call maxHeapify again to create the correct
    // order of the elenents at top nodes.
    if(parent != i){
        let temp = arr[parent];
        arr[parent] = arr[i];
        arr[i] = temp;
        maxHeapify(arr, n, parent)
    }
    // when parent will be equal to i then we will come out of this function
}

// to convert an array to max heap
function buildHeap(arr, n){
    // we build the max heap here
    for(let i = Math.floor(n/2 -1); i>=0; --i){
        maxHeapify(arr, n, i)
    }

    // one by one extract the elements from the heap
    for(let i = n-1; i>=0; i--){
        // move current root from the heap to the end of the array
        // and call the max heap again
        let temp = arr[i];
        arr[i] = arr[0];
        arr[0] = temp
        maxHeapify(arr, i, 0)
    }
    return arr;
}

console.log(buildHeap(array, array.length))