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

  nthNodeFromLast(n) {
    if (n < 0 || n > this.length) return false;
    let count = 0;
    let curr = this.head;
    while (count !== this.length - n) {
      curr = curr.next;
      count++;
    }
    console.log(
      `The element at ${n}th position count from last to first is -> `,
      curr.value
    );
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

linkedList.push(4);
linkedList.push(3);
linkedList.push(6);
linkedList.push(9);
linkedList.push(2);
linkedList.push(8);
linkedList.push(7);
linkedList.push(5);
linkedList.push(1);
linkedList.print();
linkedList.nthNodeFromLast(4);
