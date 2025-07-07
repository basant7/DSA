class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = this.head;
      this.length++;
      return;
    }
    this.tail.next = node;
    this.tail = this.tail.next;
    this.tail.next = this.head;
    this.length++;
    return;
  }

  print() {
    if (!this.head) return false;
    if (this.length === 1) {
      console.log(this.head.value);
      return;
    }
    let node = this.head;
    let i = 0;
    while (i < this.length) {
      console.log(node.value);
      node = node.next;
      i++;
    }
    return;
  }

  pop() {
    if (!this.length) return false;
    if (this.length === 1) {
      this.head = this.tail = null;
      this.length = 0;
      return;
    }
    let node = this.head;
    while (node.next != this.tail) {
      node = node.next;
    }
    node.next = this.head;
    this.tail.next = null;
    this.tail = node;
    this.tail.next = this.head;
    this.length--;
  }

  pushAtIndex(value, index) {
    let node = new Node(value);
    if (this.length === 0) {
      this.head = this.tail = node;
      this.length++;
      return;
    }

    if (index >= this.length) {
      this.push(value);
      return;
    }
    let i = 0;
    let currentNode = this.head;
    while (i != index - 1) {
      currentNode = currentNode.next;
      i++;
    }
    let n = currentNode.next;
    currentNode.next = node;
    node.next = n;
    this.length++;
    return;
  }
}

let circularLL = new CircularLL();

circularLL.push(1);
circularLL.push(2);
circularLL.push(3);
circularLL.push(4);
circularLL.push(5);
circularLL.push(6);
circularLL.push(7);
circularLL.push(8);
circularLL.pop();

circularLL.pushAtIndex(10, 5);

circularLL.print();
