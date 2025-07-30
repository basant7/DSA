function factorial(n) {
  if (n == 0 || n == 1) {
    return n;
  }

  let fact = n * factorial(n - 1);
  return fact;
}

console.log(factorial(4));
