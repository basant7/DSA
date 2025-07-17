let nums = ["-", "+", 2, "*", 3, 1, 9];

let stack = [];
for (let i = nums.length - 1; i >= 0; i--) {
  if (!isNaN(nums[i])) {
    stack.push(nums[i]);
  } else {
    let t1 = stack.pop();
    let t2 = stack.pop();
    let result;
    switch (nums[i]) {
      case "+":
        result = t2 + t1;
        break;
      case "-":
        result = t2 - t1;
        break;
      case "*":
        result = t2 * t1;
        break;
      case "/":
        result = t2 / t1;
        break;
    }
    stack.push(result);
  }
}

console.log(stack.pop());
