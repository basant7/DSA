function sum(n) {
  if (n <= 0) {
    return 0;
  }

  return sum(Math.floor(n / 10)) + (n % 10);
}

console.log(sum(9987));

// sum(253)
//     \
//      sum(25) + 3      7+3 = 10
//             \
//              sum(2) + 5    2+5 = 7
//                    \
//                     sum(0) + 2      0+2 = 2
//                           \
//                            sum(0) = 0
