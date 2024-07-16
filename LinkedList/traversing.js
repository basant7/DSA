class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.length = 0;
  }

  push(element) {
    // create a new node
    let newNode = new Node(element);
    // check if there is no head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // is there is already a head present then add the new node
      // in the next of the tail and assign the tail newNode
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // check if there is no head then return as there is nothing to delete
    if (!this.head) {
      return;
    }
    // if there is only one element then remove it and make the head, tail as null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let currentNode = this.head;
    let newTail = null;
    // loop until we add second last element into the variable
    while (currentNode) {
      if (currentNode.next) {
        newTail = currentNode;
      }
      currentNode = currentNode.next;
    }
    // assign the second last element as the tail and next = null
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    return;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.pop();

console.log(linkedList);
