class Node {
  constructor(value = null) {
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

  segregate() {
    // take 4 variables to store start of even, end of even and start of odd, end of odd
    let evenStart = null;
    let evenEnd = null;
    let oddStart = null;
    let oddEnd = null;
    let current = this.head;
    while (current != null) {
      // Even values
      if (current.value % 2 == 0) {
        // if the evenStart is null then assign current to evenStart and evenEnd
        // both will start from current that will be the first even element
        if (evenStart == null) {
          evenStart = evenEnd = current;
        } else {
          // place the current at the end of the Even LL
          evenEnd.next = current;
          //   update the evenEnd
          evenEnd = evenEnd.next;
        }
      } else {
        // if the oddStart is null then assign current to oddStart and oddEnd
        // both will start from current that will be the first odd element
        if (oddStart == null) {
          oddStart = oddEnd = current;
        } else {
          // plece the current at the end of the odd LL
          oddEnd.next = current;
          //   update the oddEnd
          oddEnd = oddEnd.next;
        }
      }
      current = current.next;
    }
    // if the evenStart or oddStart is null that means there is either
    // no even element or no odd element
    // in that case return head
    if (evenStart == null || oddStart == null) {
      return this.head;
    }
    // now point the end of evenEnd to oddStart to make the complete LL
    // with segregated even odd nodes.
    evenEnd.next = oddStart;
    oddEnd.next = null;
    return evenStart;
  }
}

let linkedList = new LinkedList();

linkedList.push(11);
linkedList.push(22);
linkedList.push(33);
linkedList.push(44);
linkedList.push(55);
linkedList.push(66);
linkedList.push(77);
console.log("Segregated even odd LL -> ", linkedList.segregate());
