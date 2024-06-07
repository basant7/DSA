function toBinary(number){
    let result = [];
    let i = number
    while(i>0){
        result.push(i%2)
        i = parseInt(i/2)
    }
    console.log(result.reverse())
}

toBinary(6)