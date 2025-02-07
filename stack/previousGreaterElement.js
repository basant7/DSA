class Stack {
  constructor() {
    this.arr = [];
    this.top = -1;
  }

  insert(value) {
    this.top++;
    this.arr[this.top] = value;
  }

  delete() {
    if (this.top < 0) {
      return false;
    }
    this.arr.pop();
    this.top--;
  }

  printTop() {
    if (this.top < 0) {
      return false;
    }
    console.log("The top element is ", this.arr[this.top]);
  }

  printAll() {
    for (let i = 0; i <= this.top; i++) {
      console.log(this.arr[i]);
    }
  }

  previousGreaterElement() {
    for (let i = 0; i <= this.top; i++) {
      let j = i;
      // while j is greater than 0, go back to check if any previous element is greater than the current element
      while (j >= 0) {
        if (this.arr[i] >= this.arr[j]) {
          j--;
        } else {
          console.log(this.arr[j]);
          break;
        }
      }
      if (j < 0) {
        console.log(-1);
      }
    }
  }
}

const stack = new Stack();

stack.insert(15);
stack.insert(10);
stack.insert(18);
stack.insert(12);
stack.insert(4);
stack.insert(6);
stack.insert(2);
stack.insert(8);

stack.printAll();
stack.printTop();

// stack.delete();

stack.printAll();
stack.printTop();

stack.previousGreaterElement();
