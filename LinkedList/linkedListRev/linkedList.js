class Node {
  // create a constructor that will be called automatically when an instance of the class is created
  // A node have two keys -> 1. value and 2. a pointer.
  constructor(value) {
    this.value = value;
    this.next = null;

    // detect loop example below
    this.isThere = false;
  }
}

class LinkedList {
  // a linked list will have a head to track down the first element and a tail to track down the last element
  // and a length for the length of the linked list
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // create a new node
    let newNode = new Node(value);
    // if head is not there then assign head and tail to new node and increase length by 1
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      // if it is not the first element then add new node at the last
      // we are tacking the last node using tail
      // add new element to the next of the tail
      // update the tail to the last element
      // increase length by 1
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }

  print() {
    // add head to a variable and then loop until the node becomes null or undefined
    // print the value of the node and assign the node to node.next
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  pop() {
    // if there is no head then return false
    if (!this.head) {
      return false;
    }
    // if there is only one element then assign null to head and tail
    // also update the length to 0
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    // track down the last node and to do this we need to traverse untill we get to second last node
    // add the second last node to a variable
    let lastNode = this.head;
    for (let i = 0; i < this.length - 2; i++) {
      lastNode = lastNode.next;
    }

    // update the tail
    // update the next of tail to null
    // decrease the length
    this.tail = lastNode;
    this.tail.next = null;
    this.length--;
  }

  atIndex(index) {
    // add head to a variable and loop until i is not equal to index
    // also add the node to node.next for each iteration with increase in i
    // add a edge case - if there is no node at that index then return false
    let i = 0;
    let node = this.head;
    while (i !== index) {
      if (!node) {
        console.log("No element found");
        return false;
      }
      node = node.next;
      i++;
    }
    console.log(`element at index ${index} is `, node.value);
  }

  deleteFirst() {
    if (!this.head) {
      return false;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    this.head.next = this.head;
    this.length--;
  }

  addAtBegining(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  set(value, index) {
    if (!this.head || index > this.length) {
      return false;
    }
    let node = this.head;
    let i = 0;
    while (i !== index) {
      node = node.next;
      i++;
    }
    node.value = value;
    return;
  }

  insertAnywhere(value, index) {
    if (index < 0 || index > this.length) return false;
    if (index == this.length) this.push(value);
    if (index == 0) this.addAtBegining(value);
    let newNode = new Node(value);
    let node = this.head;
    let i = 0;
    while (i < index - 1) {
      node = node.next;
      i++;
    }
    let nextNode = node.next;
    node.next = newNode;
    newNode.next = nextNode;
    this.length++;
  }

  delereAnywhere(index) {
    if (index > this.length || index < 0) return false;
    if (index === 0) {
      this.deleteFirst();
      return;
    }
    if (index === this.length) {
      this.pop();
      return;
    }
    let i = 0;
    let node = this.head;
    let prev = null;
    while (i !== index) {
      prev = node;
      node = node.next;
      i++;
    }
    prev.next = node.next;
    this.length--;
  }

  makeCircular() {
    this.tail.next = this.head.next.next.next.next;
  }

  // here many try to do it like this using object but there is one flaw here
  // see whenever you pass node as an index for the object, they are always converted to strings instead of references
  // ["[object, object]"]
  detectLoop1() {
    let obj = {};
    let node = this.head;
    while (node != null) {
      if (!obj[node]) {
        obj[node] = node;
        console.log(node.value);
        node = node.next;
      } else {
        console.log("isLoop");
        return;
      }
    }
  }

  // one solution is to modify the original node and add a variable inside it
  detectLoop2() {
    let node = this.head;
    while (node != null) {
      if (node.isThere) {
        console.log("is a loop");
        return;
      }
      node.isThere = true;
      node = node.next;
      console.log(node.value);
    }
  }

  // one solution is to use a set
  detectLoop3() {
    let set = new Set();
    let node = this.head;
    while (node != null) {
      if (set.has(node)) {
        console.log("is a loop");
        return;
      }
      set.add(node);
      node = node.next;
      console.log(node.value);
    }
  }

  // this is the most efficient method also known as floyd's algo
  // also known as two pointer algorithm
  detectLoop4() {
    let first = this.head;
    let second = this.head.next;
    while (second != null) {
      if (first == second) {
        console.log("is a loop wowwww");
        return;
      }
      first = first.next;
      second = second.next.next;
      console.log("first --> ", first.value);
      console.log("second --> ", second.value);
    }
  }
}

const linkedList = new LinkedList();

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
linkedList.push(8);
linkedList.push(9);
// linkedList.pop();
// linkedList.pop();
// linkedList.pop();
// linkedList.atIndex(3);
// linkedList.insertAnywhere(10, 3);
// linkedList.delereAnywhere(3);

// detect loop function calls

linkedList.makeCircular();
// linkedList.detectLoop1();
// linkedList.detectLoop2();
// linkedList.detectLoop3();
linkedList.detectLoop4();

// linkedList.print();
