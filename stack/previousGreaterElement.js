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

  isEmpty() {
    if (this.top < 0) {
      return true;
    }
    return false;
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

  previousGreaterElementUsingStack(items) {
    stack.insert(items[0]);
    console.log(-1);
    for (let i = 1; i < items.length; i++) {
      // loop until the stack is empty or the top element of the stack is less than or equal to the current element in the array
      while (!this.isEmpty() && this.arr[this.top] <= items[i]) {
        // if the top element is smaller than the current element in the array then pop the top element
        stack.delete();
      }
      // if the stack if empty then print -1 else print the top element
      let result = stack.isEmpty() ? -1 : this.arr[this.top];
      console.log(result);
      stack.insert(items[i]);
    }
  }
}

const stack = new Stack();

// stack.insert(15);
// stack.insert(10);
// stack.insert(18);
// stack.insert(12);
// stack.insert(4);
// stack.insert(6);
// stack.insert(2);
// stack.insert(8);

// stack.printAll();
// stack.printTop();

// stack.delete();

// stack.printAll();
// stack.printTop();

// if you want to run the below function using array then un-comment the above
// stack.previousGreaterElement();

// if you want to run the below function using stack then comment the above
stack.previousGreaterElementUsingStack([20, 30, 10, 5, 15]);
