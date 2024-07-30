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

  removeDuplicates() {
    // 2 pointers lelo jo head and head k next ko point kr rhe ho
    let prev = this.head;
    let curr = prev.next;
    // jab tak previous element ka next null na ho jaye
    while (prev.next !== null) {
      // agar previous element and current element same nahi hai
      // to for previous may current daal do or current may current ka next
      if (prev.value !== curr.value) {
        prev = curr;
        curr = curr.next;
      } else {
        // agar prev and curr same hai to curr ko remove kr do
        // prev ka next curr k next ko point krega and curr ko curr
        // k next assign krdo
        prev.next = curr.next;
        curr = curr.next;
      }
    }
    return;
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
linkedList.push(20);
linkedList.push(30);
linkedList.push(30);
linkedList.push(30);
linkedList.removeDuplicates();
linkedList.print();
