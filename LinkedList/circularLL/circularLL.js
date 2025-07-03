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
}

let circularLL = new CircularLL();

circularLL.push(1);
circularLL.push(2);
circularLL.push(3);
circularLL.push(4);
circularLL.push(5);

circularLL.print();
