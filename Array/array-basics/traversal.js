// Array traversal patterns

// using loop
let arr = [2, -1, 5, 6, 0, -3];

for (let i = 0; i < arr.length; i++) {
  console.log("using loop -> ", arr[i]);
}

// using recursion
function trav(arr, n) {
  if (n <= 0) {
    return;
  }

  trav(arr, n - 1);
  console.log("using recursion -> ", arr[n - 1]);
}

function print() {
  let arr = [2, -1, 5, 6, 0, -3];
  trav(arr, arr.length);
  return 0;
}

print();

// traverse array in reverse

// using loop
for (let i = arr.length - 1; i >= 0; i--) {
  console.log("reverse traversal -> ", arr[i]);
}

// using recursion

function trav2(arr, n) {
  if (n >= arr.length - 1) {
    return;
  }
  trav2(arr, n + 1);
  console.log("reverse traversal using recursion -> ", arr[n + 1]);
}

function print2() {
  let arr = [2, -1, 5, 6, 0, -3];
  trav2(arr, -1);
  return 0;
}

print2();
