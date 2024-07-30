class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    let newNode = new Node(value);
    // agar LL khali hai to head may new node daal do
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    // agar 1st element se choti hai value to head may new node daal do
    // or current head ko 2nd element bna do
    if (value < this.head.value) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }
    let nextNode = this.head;
    let prevNode = nextNode;
    // jab tak value < current node na ho jaye tab tak chlao ye loop
    while (value > nextNode.value) {
      // agar last element se bdi hai value to last element k next may new node add kr do
      if (nextNode.next == null) {
        nextNode.next = newNode;
        this.length++;
        return;
      }
      // varna prevNode and next node store krlo
      prevNode = nextNode;
      nextNode = nextNode.next;
    }
    // beech may insert krne k liye
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return;
  }

  print() {
    let count = 0;
    let node = this.head;
    while (count < this.length) {
      console.log(node.value);
      node = node.next;
      count++;
    }
  }
}

let linkedList = new LinkedList();

linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(7);
linkedList.insert(2);
linkedList.insert(5);
linkedList.insert(1);
linkedList.insert(6);
linkedList.print();
