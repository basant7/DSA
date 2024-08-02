class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.head2 = null;
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

  makeIntersection() {
    this.head2 = new Node(5);
    this.head2.next = new Node(15);
    this.head2.next.next = new Node(35);
    this.head2.next.next.next = this.head.next.next.next;
  }

  findIntersection() {
    if (!this.head || !this.head2) {
      return false;
    }
    let obj = {};
    let curr1 = this.head;
    let curr2 = this.head2;
    while (curr1) {
      obj[curr1.value] = curr1.value;
      curr1 = curr1.next;
    }
    while (curr2) {
      if (obj[curr2.value]) {
        return curr2.value;
      }
      curr2 = curr2.next;
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
linkedList.makeIntersection();
console.log("The intersection point is -> ", linkedList.findIntersection());
