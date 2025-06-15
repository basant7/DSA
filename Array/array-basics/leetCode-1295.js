// find numbers with even digits

let arr = [12, 345, 2, 6, 7896];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].toString().length % 2 == 0) {
    count++;
  }
}
console.log(count);
