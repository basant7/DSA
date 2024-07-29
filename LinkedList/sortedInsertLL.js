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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    if (value < this.head.value) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return;
    }
    let nextNode = this.head;
    let prevNode = nextNode;
    while (value > nextNode.value) {
      if (nextNode.next == null) {
        nextNode.next = newNode;
        this.length++;
        return;
      }
      prevNode = nextNode;
      nextNode = nextNode.next;
    }

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
