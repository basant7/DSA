function print(n) {
  if (n === 0) {
    return true;
  }
  print(n - 1);
  console.log(n);
}

print(5);
