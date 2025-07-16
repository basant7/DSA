let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];

function DT(temp) {
  let stack = [];
  let answers = [];
  for (let i = temp.length - 1; i >= 0; i--) {
    while (stack.length > 0 && temp[i] >= temp[stack[stack.length - 1]]) {
      stack.pop();
    }
    if (stack.length > 0) {
      answers[i] = stack[stack.length - 1] - i;
    } else {
      answers[i] = 0;
    }
    stack.push(i);
  }
  return answers;
}

console.log(DT(temperatures));
