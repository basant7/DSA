class Node {
  constructor(value = null) {
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

  push(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // agr head null hai to new node head m ayega na
      // or ek node hogi linked list m to first and last element same hoga na
      // to head and tail same hoga
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      // agr new node jo hai vo first element nahi hai to for
      // jo last element hoga list m uske next m new node add krenge hum bhailog
      this.tail.next = newNode;
      // or tail ko update krke usme new node add kr denge
      this.tail = newNode;
      this.length++;
    }
  }

  // delete a node if only pointer to a node is given
  deleteNode(node) {
    if (node.next == null) {
      return false;
    }
    // 10 20 30 40 50 -> 30 delete
    // 10 20 40 40 50 -> 30 may 40 daal do
    // 10 20 40 50 -> ab 1st 40 ko 50 ko point kra do
    node.value = node.next.value;
    node.next = node.next.next;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

let linkedList = new LinkedList();

linkedList.push(10);
linkedList.push(20);
linkedList.push(30);
linkedList.push(40);
linkedList.push(50);
linkedList.push(60);
linkedList.push(70);
let nodeToDelete = linkedList.head.next.next.next;
linkedList.deleteNode(nodeToDelete);
linkedList.print();
