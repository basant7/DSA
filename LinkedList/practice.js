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
}

const singleLinkedList = new LinkedList();

// ab next next krne se acha hai ek baar bs push use kr
singleLinkedList.push("first node");
singleLinkedList.push("second node");
singleLinkedList.push("third node");
singleLinkedList.push("forth node");

console.log(JSON.stringify(singleLinkedList));
