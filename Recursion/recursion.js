let n = 253;
let st = "a";

function rec1(n) {
  if (n === 0) return;
  console.log("n1 is ", n);
  rec1(n - 1);
  console.log("n2 is ", n);
}
// rec1(n);

function rec2(n) {
  if (n === 0) return;
  rec2(n - 1);
  console.log(n);
  rec2(n - 1);
}
// rec2(n)

function rec3(n) {
  if (n === 1) return 0;
  else return 1 + rec3(n / 2);
}
// console.log(rec3(n))

function rec4(n) {
  if (n === 0) return;
  console.log("before -> ", n);
  rec4(n - 1);
  console.log("after -> ", n);
}

// rec4(n)

// factorial
function rec5(n) {
  if (n == 0) return 1;
  return n * rec5(n - 1);
}

// console.log(rec5(n))

// fibonacci
function rec6(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return rec6(n - 1) + rec6(n - 2);
}

// for (let i = 0; i < n; i++) {
//   console.log(rec6(i));
// }

// sum of first n natural numbers
function rec7(n) {
  if (n == 0) return 0;
  return n + rec7(n - 1);
}

// console.log(rec7(n));

function palindrome(st, start, end) {
  if (start >= end) {
    return true;
  }

  if (st[start] !== st[end]) return false;
  if (st[start] === st[end]) {
    return palindrome(st, start + 1, end - 1);
  }
}

// console.log(palindrome(st, 0, st.length - 1));

// sun of digits using recursion
function sum(n) {
  if (n === 0) return 0;
  return sum(parseInt(n / 10)) + (n % 10);
}

console.log(sum(n));
