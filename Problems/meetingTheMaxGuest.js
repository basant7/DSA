let arrivalArray = [600, 700, 900]
let departureArray = [800, 730, 1000]

function meeting(arr_1, arr_2){
    let i = 1, j= 0;
    let count = 1, curr = 1;
    while(i< arr_1.length && j < arr_2.length){
        // if the small element is present in array 1 then it is arrival of the guest and therefore count++
        if(arr_1[i] <= arr_2[j]){
            count++;
            i++;
        }else{
        // if the small element is present in array 2 then it is departure of the guest and therefore count--  
            count--;
            j++;
        }
        // get the maximum of the total guest meetup
        if(count > curr){
            curr = count
        }
    }
    console.log(curr)
}

meeting(arrivalArray, departureArray)

// 600    A   1
// 700    A   2
// 730    D   1
// 800    D   0
// 900    A   1
// 1000   D   0