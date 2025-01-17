class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    let newNode = new Node(value);
    // agar element hi nahi hai linked list may to fir
    // head and tail ko new node assign krdo
    // or LL ko circular bnane k liye tail k next ko
    // head assign krdo
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
      this.length++;
      return;
    }
    // tail k next ko new node dedo
    this.tail.next = newNode;
    // tail may tail ka next daal do
    this.tail = this.tail.next;
    // or circular bna do LL ko
    this.tail.next = this.head;
    this.length++;
    return;
  }

  pop() {
    let count = 0;
    // agr LL khali hai to false return krdo
    if (!this.head) return false;
    // agar ek hi element hai to head and tail ko
    // null assign krdo
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    // 2 variables bnao -> last may head daal do
    let last = this.head;
    let secondLast;
    // count tab tak chlega jab tk LL k last element tak nahi pahunch jate
    while (count < this.length) {
      secondLast = last;
      last = last.next;
      //  yahan se secondLast element nikal lo
    }
    // us second last element ko tail may daal do
    this.tail = secondLast;
    // tail k next ko null kr dete taaki last element ka link na bache
    // but humne isko circular bnana hai to hum tail k next may head daal denge
    this.tail.next = this.head;
    this.length--;
    return;
  }

  traverse() {
    if (!this.head) {
      return false;
    }
    let temp = this.head;
    do {
      // console.log(temp);
      console.log(temp.value);
      temp = temp.next;
    } while (temp != this.head);
  }

  insertAtBegining(value) {
    let newNode = new Node(value);
    // agar LL khali hai to fir head and tail ko new node assign krdo
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // circular bnane k liye
      this.tail.next = this.head;
      this.length++;
      return;
    }
    // current head ko kisi variable may store krlo
    let currentHead = this.head;
    // head ko new node assign krdo
    this.head = newNode;
    // head k next may purana head daal do
    this.head.next = currentHead;
    // tail ko new head ko point krne k liye
    this.tail.next = this.head;
    this.length++;
    return;
  }

  deleteAtBegining() {
    if (this.length < 0) return false;
    // agar ek hi element hai to head and tail ko
    // null assign krdo
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    // head k agli node ko nextNode may daal do
    let nextNode = this.head.next;
    // fir agli node ko head bna do
    this.head = nextNode;
    // last node head ko point kra do
    this.tail.next = this.head;
    this.length--;
    return;
  }

  get(index) {
    // agar LL khali hai ya fir index length se jada hai to false return kr do
    if (this.length < 0 || this.length <= index) return false;
    let node = this.head;
    let count = 0;
    // count tab tak chlao jab tak vo index tak nahi pahunch jata
    while (count !== index) {
      node = node.next;
      count++;
    }
    return node;
  }

  pushAtIndex(value, index) {
    let newNode = new Node(value);
    // agar kisi chutiye ney index < 0 ya > linked list ki length
    // to false return krdo
    if (index < 0 || index > this.length) return false;
    // agar index === linked list length to fir value last m jayegi
    if (index === this.length) this.push(value);
    // agr index === 0 to value first m jayegi
    if (index === 0) this.insertAtBegining(value);
    // current index pr jo node abhi hai usko ek variable m store krlo (prev)
    let prevNode = this.get(index - 1);
    // index pr jo element hai usko ek variable may daal do
    let curr = prevNode.next;
    // pichli node k next ko new node assign krdo
    prevNode.next = newNode;
    // new node k next may current daal do
    newNode.next = curr;
    this.length++;
    return;
  }

  deleteAtIndex(index) {
    // agar kisi chutiye ney index < 0 ya > linked list ki length
    // to false return krdo
    if (index < 0 || index >= this.length) return false;
    // agar index last element ko refer kr rha hai to pop krdo
    if (index == this.length) return this.pop();
    // jis index ko delete krna hai uska prevoius element nikal lo
    let prevNode = this.get(index - 1);
    // current index pr jo element hai usko ek variable may store krdo
    let curr = prevNode.next;
    // previous node ka next ko current node k next ko assign krdo
    prevNode.next = curr.next;
    this.length--;
    return;
  }
}

let circularSinglyLinkedList = new CircularSinglyLinkedList();
circularSinglyLinkedList.push(1);
circularSinglyLinkedList.push(2);
circularSinglyLinkedList.push(3);
circularSinglyLinkedList.push(4);
circularSinglyLinkedList.insertAtBegining(5);
circularSinglyLinkedList.insertAtBegining(6);
circularSinglyLinkedList.deleteAtBegining();
console.log("Get element at index 3 -> ", circularSinglyLinkedList.get(3));
circularSinglyLinkedList.pushAtIndex(7, 3);
circularSinglyLinkedList.deleteAtIndex(4);
circularSinglyLinkedList.traverse();
