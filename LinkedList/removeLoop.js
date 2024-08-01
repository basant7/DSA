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

  makeLLCircular() {
    this.tail.next = this.head.next.next;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  removeLoop() {
    // Run 2 pointers approach
    let pointer1 = this.head;
    let pointer2 = pointer1;
    while (pointer2 && pointer2.next) {
      pointer1 = pointer1.next;
      pointer2 = pointer2.next.next;
      //   if the pointers match then update pointer1 to head and get out of loop
      if (pointer1 == pointer2) {
        pointer1 = this.head;
        break;
      }
    }
    let curr;
    // now until pointer1 != pointer2
    // get the node where both the pointers meet
    // and take the pointer before the pointer2 and make it null
    // this will eliminate the loop
    while (pointer1 != pointer2) {
      pointer1 = pointer1.next;
      curr = pointer2;
      pointer2 = pointer2.next;
    }
    curr.next = null;
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
linkedList.makeLLCircular();
linkedList.removeLoop();
linkedList.print();
