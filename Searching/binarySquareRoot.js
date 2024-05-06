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
function binary(n){
    let num = n
    let low = 1, high = n, ans = -1;
    while(low <= high){
        let mid = Math.floor((low + high)/2);
        let sqrt = mid * mid
        if(sqrt == num){
            return mid
        }else if(sqrt > num){
            high = mid - 1;
        }else{
            low = mid + 1;
            ans = mid
        }
    }
    return ans
}

console.log(binary(36))