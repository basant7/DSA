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

  // two pointer approach
  detectLoop_1() {
    // take two pointers
    // 1st pointer will jump 1 step at a time
    // 2nd pointer will jump 2 steps at a time
    let R1 = this.head;
    let R2 = R1.next;
    while (R2 && R2.next) {
      // if both the pointers become same
      if (R1 == R2) return true;
      //   jump 1 step
      R1 = R1.next;
      //   jump 2 steps
      R2 = R2.next.next;
    }
    return false;
  }

  // point each node to temp and
  // if any node already points to temp then it is a loop
  detectLoop_2() {
    // create a temp node
    let temp = new Node();
    let current = this.head;
    while (current != null) {
      // if current's next is null then return because its not a loop then
      if (current.next == null) {
        return false;
      }
      //   if current's next == temp that means it is a loop
      if (current.next == temp) {
        return true;
      }
      //   store the next element
      let next = current.next;
      //   point current to temp
      current.next = temp;
      //   update temp
      current = next;
    }
    return false;
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
//   linkedList.print();
console.log(linkedList.detectLoop_1());
console.log(linkedList.detectLoop_2());
