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

  reverseUptoSizeK(k) {
    if (k < 0 || k > this.length) return false;

    let count = 0;

    let prev = null;
    let curr = this.head;
    // jo node k position pr hai and head node ko store krne k liye variables
    let kThElement = curr;
    let headElement;

    while (count !== k) {
      // jo node head bnegi vo headElement may ayega
      headElement = curr;
      // next may curr k next node daal do
      let next = curr.next;
      // curr ka next previous bna do jis se LL reverse hogi
      curr.next = prev;
      // update krdo variables
      prev = curr;
      curr = next;
      count++;
    }
    // jo element k position pr hai uske next may k+1 wale node ko point krado
    kThElement.next = curr;
    // head ko update krdo
    this.head = headElement;
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
linkedList.push(30);
linkedList.push(40);
linkedList.push(50);
linkedList.push(60);
linkedList.reverseUptoSizeK(3);
linkedList.print();
