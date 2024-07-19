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

  pop() {
    if (!this.head) {
      return null;
    }
    // agar linked list may ek hi element hai to head and tail
    // ko null assign krde na baba
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    // tail may tail ka previous daal do
    this.tail = this.tail.prev;
    // or tail k next ko null krdo
    this.tail.next = null;
    this.length--;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  insertAtBigining(value) {
    let newNode = new Node(value);
    // agar linked list khali hai to head and tail ko new node assign krdo
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    // jo head ka prev hoga usme new node daal do
    this.head.prev = newNode;
    // new node jo hogi uske next may head daal do
    newNode.next = this.head;
    // or head ko new Node assign krdo
    this.head = newNode;
    this.length++;
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
doublyLinkedList.pop();
doublyLinkedList.insertAtBigining(9);
doublyLinkedList.print();

// console.log(doublyLinkedList);
