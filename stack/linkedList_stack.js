class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  pop() {
    if (this.head === null) {
      console.log("Underflow");
      return;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
  }

  isEmpty() {
    return this.head === null;
  }

  peek() {
    if (this.isEmpty()) {
      return false;
    } else {
      return this.head.value;
    }
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());

console.log(stack);
