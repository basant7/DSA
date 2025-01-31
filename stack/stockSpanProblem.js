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

  // Input: arr[] = [60, 10, 20, 30, 40, 35, 30, 50, 70, 65]
  //                [1, 1, 2, 3, 4, 1, 1, 6, 8, 1]

  // Input: arr[] = [100, 80,   60,   70,   60,   75,   85]
  //  1   1-0   2-1   3-1   4-3   5-1   6-0
  // If there is element greater on left side {
  //           span = index of current element - index of element that is closest greater than the current element
  //           e.g 85 is at index 6 and element that is closest greater than 85 is 100 that is at position 0
  //           span = 6 - 0 = 6
  // } else {
  //           span = current index + 1
  // }
  // Output: [1, 1, 1, 2, 1, 4, 6]

  stockSpan() {
    console.log(this.top)
    for (let i = 0; i <= this.top; i++) {
      let span = 1;
      let j = i - 1;
      while (j >= 0 && this.arr[i] >= this.arr[j]) {
        span++;
        j--;
      }
      console.log("the span is ----> ", span);
    }
  }
}

const stack = new Stack();

stack.insert(100);
stack.insert(80);
stack.insert(60);
stack.insert(70);
stack.insert(60);
stack.insert(75);
stack.insert(85);

stack.printAll();
stack.printTop();

// stack.delete();

stack.printAll();
stack.printTop();

stack.stockSpan();
