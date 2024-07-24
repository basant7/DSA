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
circularSinglyLinkedList.traverse();
