let arr = [10, 2, "+", 3, 5, "*", "+", 9, "-"];
let stack = [];
for (let i = 0; i < arr.length; i++) {
  if (!isNaN(arr[i])) {
    stack.push(arr[i]);
  } else {
    let t2 = stack.pop();
    let t1 = stack.pop();
    let result;
    switch (arr[i]) {
      case "+":
        result = t1 + t2;
        break;
      case "-":
        result = t1 - t2;
        break;
      case "*":
        result = t1 * t2;
        break;
      case "/":
        result = t1 / t2;
        break;
    }
    stack.push(result);
  }
  console.log(stack);
}
console.log(stack.pop());
