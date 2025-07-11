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
      return;
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
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

stack.pop();

stack.peek();

stack.size();

stack.print();
