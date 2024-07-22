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

  //   ek ek krke sabhi elements print kra traverse method se
  traverse() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  //   pehla element delete
  deleteFirstElement() {
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
    // head ko next node dedo or length-- krdo
    this.head = this.head.next;
    this.length--;
    return;
  }

  // starting m add krna ho element
  addElementAtBeginning(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }
    // new node k next may head daal ho
    // or head ko new node assign krdo
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return;
  }

  getAtIndex(index) {
    // check kro ki kisi chutiye ney 0 se kum index or linked list
    // ki actual length se jada value to mahi daal di params may
    if (index < 0 || index >= this.length) {
      return null;
    }
    let count = 0;
    let node = this.head;
    // count ko increase krte jao or
    // jab count index k equal ho jaye to console kra do node ko
    while (count != index) {
      node = node.next;
      count++;
    }
    return node;
  }

  // kisi position pr kuch or value set krne ka to ye method use krne ka
  set(value, index) {
    let node = this.getAtIndex(index);
    if (!node) {
      return false;
    }
    node.value = value;
  }

  insertAnywhere(value, index) {
    // agar kisi chutiye ney index < 0 ya > linked list ki length
    // to false return krdo
    if (index < 0 || index > this.length) return false;
    // agar index === linked list length to fir value last m jayegi
    if (index === this.length) return this.push(value);
    // agr index === 0 to value first m jayegi
    if (index === 0) return this.addElementAtBeginning(value);
    // current index pr jo node abhi hai usko ek variable m store krlo (prev)
    let prev = this.getAtIndex(index - 1);
    // new node bnao
    let newNode = new Node(value);
    // current index wali node ki value kisi variable m store krdo (nextNode)
    let nextNode = prev.next;
    // prev k next may new node daal do
    prev.next = newNode;
    // new node k next may next wali node daal do
    newNode.next = nextNode;
    this.length++;
  }

  deleteAnywhere(index) {
    // agar kisi chutiye ney index < 0 ya > linked list ki length
    // to false return krdo
    if (index < 0 || index >= this.length) return false;
    // agar index linkedlist k length k brabar hua to past element nikal do
    if (index === this.length) return this.pop();
    // jo delete krna hai uske pichle wala element kisi variable m store krdo
    let prevNode = this.getAtIndex(index - 1);
    // for jis index pr delete krna hai uske next ki value previous k next m daal do
    let nextNode = prevNode.next;
    prevNode.next = nextNode.next;
    // length ek se ghata do
    this.length--;
  }

  reverse() {
    let i = 0;
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let curr = this.tail;
    let nextNode;
    let prevNode = null;
    while (i < this.length) {
      // nextNode may agle node daal do
      nextNode = curr.next;
      // jo current node hai, uske next may pichle node ko daal do
      curr.next = prevNode;
      // pichle node may current ka node daal do
      prevNode = curr;
      // current node may next node daal do
      curr = nextNode;
      i++;
    }

    // 13  27  32  69
    // 1. node = 13                                       node = 27

    // 2. nextNode = 27                                   nextNode = 32
    // 3. node.next = null                                node.next = 13

    // 4. prevNode = 13                                   prevNode = 27
    // 5. node = 27                                       node = 32
    return;
  }
}

const singleLinkedList = new LinkedList();

// ab next next krne se acha hai ek baar bs push use kr
singleLinkedList.push("first node");
singleLinkedList.push("second node");
singleLinkedList.push("third node");
singleLinkedList.push("forth node");
singleLinkedList.push("fifth node");
singleLinkedList.push("sixth node");
singleLinkedList.push("seventh node");
singleLinkedList.push("eight node");
singleLinkedList.pop();
singleLinkedList.deleteFirstElement();
singleLinkedList.addElementAtBeginning("9th node");
singleLinkedList.traverse();
singleLinkedList.getAtIndex(5);
singleLinkedList.set("1st node", 0);
singleLinkedList.insertAnywhere("six and half node", 6);
singleLinkedList.deleteAnywhere(4);
console.log("\n");
singleLinkedList.traverse();
console.log("\n");
singleLinkedList.reverse();
singleLinkedList.traverse();

console.log(JSON.stringify(singleLinkedList));
