class Stack {
  constructor(value) {
    this.array = [];
    this.top = -1;
  }

  insert(value) {
    this.top++;
    this.array[this.top] = value;
  }

  delete() {
    if (this.top > 0) {
      this.top--;
      this.array.pop();
      return;
    }
    return false;
  }

  peek() {
    if (this.array < 0) {
      return false;
    }
    return this.array[this.top];
  }

  isEmpty() {
    if (this.top < 0) {
      return true;
    }
    return false;
  }

  size() {
    return this.top;
  }
}

const stack = new Stack();

stack.insert(2);
stack.insert(4);
stack.insert(6);
stack.insert(8);
console.log(stack.peek());
stack.delete();
console.log(stack.isEmpty());
console.log(stack.size());

// stack via linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedListStack {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    // new node k next may head daal do
    newNode.next = this.head;
    // head ko new node assign krdo
    this.head = newNode;
    this.length++;
  }

  delete() {
    if (!this.head) {
      console.log("underFlow");
      return;
    }
    let temp = this.head;
    this.head = this.head.next;
    temp = null;
    this.length--;
  }

  size() {
    console.log("The size of the stack is ", this.length);
  }

  isEmpty() {
    if (!this.head) {
      console.log("Stack is empty");
    }
  }

  peek() {
    if (!this.head) {
      return "Empty stack";
    }
    return `The top element in the stack is ${this.head.value}`;
  }
}

const linkedListStack = new LinkedListStack();

linkedListStack.insert(1);
linkedListStack.insert(3);
linkedListStack.insert(5);
linkedListStack.insert(7);

console.log(linkedListStack.peek());

linkedListStack.size();

linkedListStack.delete();

linkedListStack.size();

console.log(linkedListStack.peek());

linkedListStack.isEmpty();
