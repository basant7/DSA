// naive solution with complexity O(n)
let number = 36;

function squareRoot(n){
    let i = 1;
    let result;
    while(i*i <= n){
        result = i
        i++
    }
    return result
}

console.log(squareRoot(number))

// using binary search algorithm
// function binary(n){
//     let num = n
//     let low = 1, high = n;
//     if(low <= high){
//         let mid = Math.floor((low + high)/2);
//         let sqrt = mid * mid
//         if(sqrt == num){
//             return mid
//         }else if(sqrt > num){
//             return binary(n, )
//         }
//     }
// }

// binary(n)