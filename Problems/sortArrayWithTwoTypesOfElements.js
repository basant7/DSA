// place all the nagative first using quick sort

let array = [13, -12, 18, -10, 3, 7, -1, -6, 12];

function partition(arr, l, h){
    let i = l-1;
    let j = h+1;
    while(true){
        do{
            i++
        }while(arr[i] < 0);

        do{
            j--
        }while(arr[j] > 0 )

        if(i >=j) return j;
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp
    }
}

function quickSort(arr, l, h){
    partition(arr, l, h);
    console.log(arr)
}

quickSort(array, 0, array.length-1)