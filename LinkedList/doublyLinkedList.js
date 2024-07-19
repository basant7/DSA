class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DuublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    // new node bna
    let newNode = new Node(value);
    // check kr ki koi element hai bhi ya nahi linked list may
    if (!this.head) {
      // nahi hai to head and tail ko vo element assign kr dey
      this.head = newNode;
      this.tail = this.head;
      this.length++;
    } else {
      // tail jo hogi uske next may vo new node add kr de
      this.tail.next = newNode;
      //   new node k previous pointer ko tail dede
      newNode.prev = this.tail;
      //   or tail may vo new node add krde
      this.tail = newNode;
      this.length++;
    }
    return;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    // agar linked list may ek hi element hai to head and tail
    // ko null assign krde na baba
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    // tail may tail ka previous daal do
    this.tail = this.tail.prev;
    // or tail k next ko null krdo
    this.tail.next = null;
    this.length--;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.value);
      node = node.next;
    }
  }

  insertAtBigining(value) {
    let newNode = new Node(value);
    // agar linked list khali hai to head and tail ko new node assign krdo
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    }
    // jo head ka prev hoga usme new node daal do
    this.head.prev = newNode;
    // new node jo hogi uske next may head daal do
    newNode.next = this.head;
    // or head ko new Node assign krdo
    this.head = newNode;
    this.length++;
  }

  deleteAtBegining() {
    if (!this.head) return null;
    // agr ek hi element hai to head and tail ko khali krde
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    }
    // head ka next element kisi variable may store krde
    let node = this.head.next;
    // us variable k prev ko null krde
    node.prev = null;
    // or head ko vo next node assign krde
    this.head = node;
    this.length--;
  }

  get(index) {
    // check kro ki kisi chutiye ney 0 se kum index or linked list
    // ki actual length se jada value to mahi daal di params may
    if (index < 0 || index >= this.length) {
      return false;
    }
    let count = 0;
    let node = this.head;
    // count tab tak chlata ja jab tak index k brabar na ho jaye
    while (count !== index) {
      node = node.next;
      count++;
    }
    return node;
  }

  set(value, index) {
    // index wala element nikaal
    let node = this.get(index);
    if (!node) {
      return false;
    }
    // uski value may new value add krde
    node.value = value;
    return;
  }
}

const doublyLinkedList = new DuublyLinkedList();

doublyLinkedList.push(1);
doublyLinkedList.push(2);
doublyLinkedList.push(3);
doublyLinkedList.push(4);
doublyLinkedList.push(5);
doublyLinkedList.push(6);
doublyLinkedList.push(7);
doublyLinkedList.push(8);
doublyLinkedList.pop();
doublyLinkedList.insertAtBigining(9);
doublyLinkedList.deleteAtBegining();
doublyLinkedList.get(5);
doublyLinkedList.set(9, 5);
console.log("\n");
doublyLinkedList.print();

// console.log(doublyLinkedList);
