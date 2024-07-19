class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DuublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // new node bna
    let newNode = new Node(value);
    // check kr ki koi element hai bhi ya nahi linked list may
    if (!this.head) {
      // nahi hai to head and tail ko vo element assign kr dey
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      // tail jo hogi uske next may vo new node add kr de
      this.tail.next = newNode;
      //   new node k previous pointer ko tail dede
      newNode.prev = this.tail;
      //   or tail may vo new node add krde
      this.tail = newNode;
      this.length++;
    }
    return;
  }
}

const doublyLinkedList = new DuublyLinkedList();

doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
doublyLinkedList.push(8);

console.log(doublyLinkedList);
