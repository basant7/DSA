class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoubleLinkedList {
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
    node.prev = this.tail;
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  print() {
    let i = 0;
    let node = this.head;
    while (i < this.length) {
      console.log(node.value);
      node = node.next;
      i++;
    }
    return;
  }

  reverse() {
    if (this.length == 0) return false;
    if (this.length == 1) return;

    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let prevElement = null;
    let currElement = this.tail;
    while (currElement) {
      prevElement = currElement.prev;
      currElement.prev = currElement.next;
      currElement.next = prevElement;
      currElement = currElement.prev;
    }
  }
}

let doubleLinkedList = new DoubleLinkedList();

doubleLinkedList.push(1);
doubleLinkedList.push(2);
doubleLinkedList.push(3);
doubleLinkedList.push(4);
doubleLinkedList.push(5);

doubleLinkedList.reverse();
doubleLinkedList.print();
