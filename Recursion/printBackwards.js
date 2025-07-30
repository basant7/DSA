function print(n) {
  if (n === 0) {
    return true;
  }
  console.log(n);
  print(n - 1);
}

print(5);
