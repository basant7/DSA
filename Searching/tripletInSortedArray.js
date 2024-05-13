let array = [2, 3, 4, 8, 9, 20, 40],
  num = 32,
  startIndex = 0,
  lastIndex = array.length - 1;

function triplet(arr, n, first, last) {
  while(first < last){
    for(let second = first + 1; second < last;second++ ){
        let minusNum = n - arr[first];
        if(arr[second] + arr[last] === minusNum){
            return arr[first] + " " + arr[second] + " " +arr[last];
        }else if(arr[second] + arr[last] > n){
            last--;
        }
    }
    first++
  }
  return -1
}

console.log(triplet(array, num, startIndex, lastIndex))


// re-write for better understanding
function isTriplet(arr, n){
    // arr.length - 3 because j and k will be at length-2 and length-1
    for(let i = 0; i < arr.length - 3; i++){
        if(isPair(arr, n - arr[i], i+1)){
            return  arr[i]+ " "+ isPair(arr, n - arr[i], i+1);
        }
    }
    return -1
}

function isPair(arr, sum, si){
    let i = si, j = arr.length - 1;
    while(i< j){
        if(arr[i] + arr[j] === sum){
            return arr[i] + " " + arr[j]
        }else if(arr[i] + arr[j] < sum){
            i++
        }else{
            j--
        }
    }
    return false;
}

console.log(isTriplet(array, num))
