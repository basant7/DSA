let s = "abbaca";

function removeAdjacent(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length && stack[stack.length - 1] === s[i]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.join("");
}

console.log(removeAdjacent(s)); // Output: "ca"
