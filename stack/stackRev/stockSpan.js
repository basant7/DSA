class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  stock() {
    let arr = [];
    for (let i = 0; i <= this.top; i++) {
      let span = 1;
      let j = i - 1;
      while (j >= 0 && this.items[i] > this.items[j]) {
        span++;
        j--;
      }
      arr.push(span);
    }
    return arr;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(80);
stack.push(60);
stack.push(70);
stack.push(60);
stack.push(75);
stack.push(85);

console.log(stack.stock());
