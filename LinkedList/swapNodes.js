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

  swapNodesValues() {
    let curr = this.head;
    while (curr != null && curr.next != null) {
      let temp = curr.value;
      curr.value = curr.next.value;
      curr.next.value = temp;
      curr = curr.next.next;
    }
    return;
  }

  swapNodesUsingPointers() {
    let prev = this.head;
    let curr = this.head.next;
    this.head = this.head.next;
    while (curr && curr.next) {
      let next = curr.next;
      curr.next = prev;
      // if there are odd elements in LL (for 9)
      // if this condition is not there tben console will
      // not print 9
      if (next == null || next.next == null) {
        prev.next = next;
        break;
      }
      // 3rd node jo hoga uska next node 3rd ki jagah ayega
      // or prev jo hoga vo curr ki jagah ayega to fir
      // humko prev ko 3rd k next may point krana hoga
      prev.next = next.next;
      // prev and next ko update kro
      prev = next;
      curr = prev.next;
    }
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

linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.push(6);
linkedList.push(7);
linkedList.push(8);
linkedList.push(9);
// linkedList.swapNodes();
linkedList.swapNodesUsingPointers();
linkedList.print();
