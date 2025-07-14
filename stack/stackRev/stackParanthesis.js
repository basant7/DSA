class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  pop() {
    if (this.top > 0) {
      this.top--;
      this.items.pop();
      return true;
    }
    return false;
  }

  print() {
    let i = 0;
    while (i <= this.top) {
      console.log(this.items[i]);
      i++;
    }
  }

  peek() {
    if (this.top < 0) {
      return false;
    }
    console.log(this.items[this.top]);
  }

  size() {
    console.log(this.top + 1);
  }

  validParanthesis(data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === "[" || data[i] === "(" || data[i] === "{") {
        if (i === data.length - 1) {
          return false;
        }
        this.push(data[i]);
      } else {
        if (!this.checkValidity(this.items[this.top], data[i])) {
          return false;
        } else {
          this.pop();
        }
      }
    }
    return true;
  }

  checkValidity(a, b) {
    console.log(a, b);
    if (
      (a === "[" && b === "]") ||
      (a === "(" && b === ")") ||
      (a === "{" && b === "}")
    ) {
      return true;
    }
    return false;
  }
}

const stack = new Stack();
// stack.push("[");
// stack.push("(");
// stack.push("{");
// stack.push("}");
// stack.push(")");
// stack.push("]");

// stack.pop();

// stack.peek();

// stack.size();

// stack.print();

console.log(stack.validParanthesis("([]"));
