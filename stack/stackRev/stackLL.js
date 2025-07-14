class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  // in push operation place every new node at the begining instead of last
  // It will help us in pop operation because it will help us to pop the element from the first position
  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.length++;
      return;
    }

    let curr = this.head;
    this.head = newNode;
    newNode.next = curr;
    this.length++;
  }

  pop() {
    if (!this.head) return false;
    if (this.length == 1) {
      this.head = null;
      this.length--;
      return;
    }

    this.head = this.head.next;
    this.length--;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);

stack.pop();

stack.print();
