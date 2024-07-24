class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    this.tail.next = newNode;
    this.tail = this.tail.next;
    this.tail.next = this.head;
    this.length++;
  }

  traverse() {
    if (!this.head) {
      return false;
    }
    let temp = this.head;
    do {
      console.log(temp.value);
      temp = temp.next;
    } while (temp != this.head);
  }
}

let circularSinglyLinkedList = new CircularSinglyLinkedList();
circularSinglyLinkedList.push(1);
circularSinglyLinkedList.push(2);
circularSinglyLinkedList.push(3);
circularSinglyLinkedList.push(4);
circularSinglyLinkedList.traverse();
