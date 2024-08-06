class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.head1 = null;
    this.head2 = null;
    this.tail = null;
    this.tail1 = null;
    this.tail2 = null;
    this.length = 0;
  }

  push_1(value) {
    let newNode = new Node(value);
    if (!this.head1) {
      // agr head null hai to new node head m ayega na
      // or ek node hogi linked list m to first and last element same hoga na
      // to head and tail same hoga
      this.head1 = newNode;
      this.tail1 = newNode;
      this.length++;
    } else {
      // agr new node jo hai vo first element nahi hai to for
      // jo last element hoga list m uske next m new node add krenge hum bhailog
      this.tail1.next = newNode;
      // or tail ko update krke usme new node add kr denge
      this.tail1 = newNode;
      this.length++;
    }
  }

  push_2(value) {
    let newNode = new Node(value);
    if (!this.head2) {
      // agr head null hai to new node head m ayega na
      // or ek node hogi linked list m to first and last element same hoga na
      // to head and tail same hoga
      this.head2 = newNode;
      this.tail2 = newNode;
      this.length++;
    } else {
      // agr new node jo hai vo first element nahi hai to for
      // jo last element hoga list m uske next m new node add krenge hum bhailog
      this.tail2.next = newNode;
      // or tail ko update krke usme new node add kr denge
      this.tail2 = newNode;
      this.length++;
    }
  }

  printBothLL() {
    let node = this.head;
    while (node) {
      console.log(node);
      console.log(node.value);
      node = node.next;
    }
  }

  merge() {
    let curr_1 = this.head1;
    let curr_2 = this.head2;
    // check 1st element in both LL
    // the smaller one will be head and tail
    if (curr_1.value < curr_2.value) {
      this.head = curr_1;
      this.tail = curr_1;
      curr_1 = curr_1.next;
    } else {
      this.head = curr_2;
      this.tail = curr_2;
      curr_2 = curr_2.next;
    }

    while (curr_1 && curr_2) {
      // if element of 1st LL is smaller
      // create a new node with the value of 1st LL element
      // add it to the last of the LL i.e in tail.next
      // and update the tail
      if (curr_1.value <= curr_2.value) {
        let newNode = new Node(curr_1.value);
        this.tail.next = newNode;
        this.tail = this.tail.next;
        curr_1 = curr_1.next;
      } else {
        // if element of 2nd LL is smaller
        // create a new node with the value of 2st LL element
        // add it to the last of the LL i.e in tail.next
        // and update the tail
        let newNode = new Node(curr_2.value);
        this.tail.next = newNode;
        this.tail = this.tail.next;
        curr_2 = curr_2.next;
      }
    }
    // check for remaining elements in LL
    // and push it to the new LL
    while (curr_1) {
      let newNode = new Node(curr_1.value);
      this.tail.next = newNode;
      this.tail = this.tail.next;
      curr_1 = curr_1.next;
    }
    while (curr_2) {
      let newNode = new Node(curr_2.value);
      this.tail.next = newNode;
      this.tail = this.tail.next;
      curr_2 = curr_2.next;
    }
  }
}

let linkedList = new LinkedList();

linkedList.push_2(1);
linkedList.push_1(2);
linkedList.push_1(3);
linkedList.push_2(4);
linkedList.push_1(5);
linkedList.push_1(6);
linkedList.push_2(7);
linkedList.push_1(8);
linkedList.push_2(9);
linkedList.merge();
linkedList.printBothLL();
