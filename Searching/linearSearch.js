let arr = [1,2,3,4,9,5,7,8], n = 5;
for(let i = 0; i < arr.length-1; i++){
    if(arr[i] === n){
        console.log(n, " Found at Index ", i)
    }
}