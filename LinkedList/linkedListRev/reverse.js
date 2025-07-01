class Node {
  // create a constructor that will be called automatically when an instance of the class is created
  // A node have two keys -> 1. value and 2. a pointer.
  constructor(value) {
    this.value = value;
    this.next = null;
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

  reverse() {}
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
linkedList.pop();
linkedList.pop();
linkedList.pop();

linkedList.print();
