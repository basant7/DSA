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

  palindrome() {
    if (!this.head) return false;
    let slow = this.head;
    let fast = this.head.next;
    // to get middle element and last element
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    let prev = slow;
    let curr = prev.next;
    let ele = slow.next;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    slow.next = prev;
    ele.next = null;
    fast = slow.next;
    slow = this.head;
    let rev = fast;
    while (fast && slow && slow != rev) {
      console.log(slow.value, fast.value);
      if (slow.value !== fast.value) {
        return false;
      }
      slow = slow.next;
      fast = fast.next;
    }
    return "yes";
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

linkedList.push("a");
linkedList.push("b");
linkedList.push("c");
linkedList.push("c");
linkedList.push("b");
linkedList.push("a");
console.log(linkedList.palindrome());
// linkedList.print();
