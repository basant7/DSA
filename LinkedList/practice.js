class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let node = new Node("first node");
// if we want to add new nodes to the next nodes we can do it like this
// but maan le tere pass 100 records hue to tu esa krte rhega kya
// chutiya thodi hai tu
node.next = new Node("second node");
node.next.next = new Node("third node");
node.next.next.next = new Node("forth node");

// asan tarika, ek linked list class bna jiske andr push method bna or push method ko call kr
// or elements add krta ja linked list m
class LinkedList {
  constructor() {
    // first element ko represent krega
    this.head = null;
    // last element ko represent krega
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

  //   agr last element delete krna hai to pop method use kr na
  pop() {
    // agar linked list khali hai to chutiye pop kyu kr rha
    if (this.length === 0) {
      return;
    }
    // agr linked list m ek hi element hai to head and tail null ho jayenge or length 0
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }

    let lastNode = this.head;
    let nodeToDelete;
    // jab tk last node tak na pahunch jaye traverse krta reh
    // or second last element ko ek variable ko store kr lo
    while (lastNode.next !== null) {
      nodeToDelete = lastNode;
      lastNode = lastNode.next;
    }
    // us second last element ko tail m store kr de and
    // tail ka next null kr do
    this.tail = nodeToDelete;
    this.tail.next = null;
    this.length--;
    return;
  }

  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }
}

const singleLinkedList = new LinkedList();

// ab next next krne se acha hai ek baar bs push use kr
singleLinkedList.push("first node");
singleLinkedList.push("second node");
singleLinkedList.push("third node");
singleLinkedList.push("forth node");
singleLinkedList.pop();

singleLinkedList.traverse();

// console.log(JSON.stringify(singleLinkedList));
