let arr = [3, 7, 9, 4, 9, 8, 5, 1];

let largest = -Infinity;
let secondLargest = -Infinity;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  }
  // check if current element is greater than secondLargest and also check that current element is not equal to largest element
  if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}
console.log("Second largest element is -> ", secondLargest);
