class Stack {
  constructor() {
    this.items = null;
    this.begining_top = null;
    this.end_top = null;
    this.length = null;
  }

  //   assign the length where stack one will start from begining to end and stack two will start from end to begining
  // takes a parameter 'n' to specify the size of the array
  twoStacks(n) {
    this.length = n;
    this.begining_top = -1;
    this.end_top = n;
    this.items = new Array(n);
  }

  insertInStackOne(value) {
    // add check so that end index should not be less than begining index
    // stack 1 elements should not override the stack 2 elements
    if (this.begining_top < this.end_top) {
      this.begining_top++;
      this.items[this.begining_top] = value;
      return true;
    }
    return false;
  }

  insertInStackTwo(value) {
    // add check so that begining index should not be greater than end index
    // stack 2 elements should not override the stack 1 elements
    if (this.begining_top < this.end_top) {
      this.end_top--;
      this.items[this.end_top] = value;
      return true;
    }
    return false;
  }

  deleteFromStackOne() {
    // check if there are elements in stack 1
    if (this.begining_top >= 0) {
      const elementToDelete = this.items[this.begining_top];
      this.begining_top--;
      return elementToDelete;
    }
    return false;
  }

  deleteFromStackTwo() {
    // check if there are elements in stack 2
    if (this.end_top < this.length) {
      const elementToDelete = this.items[this.end_top];
      this.end_top++;
      return elementToDelete;
    }
    return false;
  }

  //   size of stack 1
  sizeOfStackOne() {
    return this.begining_top + 1;
  }

  //   size of stack 2
  sizeOfStackTwo() {
    return this.end_top + 1;
  }
}

const stack = new Stack();
stack.twoStacks(10);
stack.insertInStackOne(1);
stack.insertInStackOne(2);
stack.insertInStackOne(3);
stack.insertInStackOne(4);
stack.insertInStackOne(5);
stack.insertInStackTwo(6);
stack.insertInStackTwo(7);
stack.insertInStackTwo(8);
stack.insertInStackTwo(9);
stack.insertInStackTwo(10);

console.log(stack);

stack.deleteFromStackOne();
stack.deleteFromStackOne();
stack.deleteFromStackTwo();

console.log(stack);
