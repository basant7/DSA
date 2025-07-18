class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  prevGreatest() {
    let arr = [];
    for (let i = 0; i <= this.top; i++) {
      let j = i;
      while (j >= 0) {
        if (this.items[i] < this.items[j]) {
          arr.push(this.items[j]);
          break;
        }
        j--;
      }
      if (j < 0) {
        arr.push(j);
      }
    }
    return arr;
  }

  nextGreatest() {
    let arr = [];
    for (let i = 0; i <= this.top; i++) {
      let j = i + 1;
      while (j <= this.top) {
        if (this.items[j] > this.items[i]) {
          arr.push(this.items[j]);
          break;
        }
        j++;
      }
      if (j > this.top) {
        arr.push(-1);
      }
    }
    return arr;
  }

  nextGreatest2() {
    let stack = [];
    let result = [];
    // first we will make the array double hypothatically
    // if the array is of 5 elements then we will start from 2*n i.e double last index
    // because it is a circular array question
    for (let i = this.items.length * 2 - 1; i >= 0; i--) {
      // While the stack is not empty and the current element is greater than the element at the top of the stack,
      // pop elements from the stack. This ensures we remove smaller elements that can't be the "next greater element."
      //
      // We use `i % items.length` to loop around the array in a circular manner,
      // because we're simulating the array being repeated twice (2 * N) to handle wrap-around comparisons.
      while (
        stack.length &&
        this.items[i % this.items.length] >= stack[stack.length - 1]
      ) {
        stack.pop();
      }
      // Now we start filling the actual result array.
      // We only update the result for indices within the original array length (not the extended 2*N loop).
      // For each index, if the stack has elements, the top of the stack is the next greater element.
      // Otherwise, there is no greater element, so we assign -1.
      if (i < this.items.length) {
        result[i] = stack.length ? stack[stack.length - 1] : -1;
      }
      // push next element in stack
      stack.push(this.items[i % this.items.length]);
    }
    return result;
  }
}

const stack = new Stack();

// prev greatest element
// stack.push(15);
// stack.push(10);
// stack.push(18);
// stack.push(12);
// stack.push(4);
// stack.push(6);
// stack.push(2);
// stack.push(8);

// next greatest element - 1
// stack.push(5);
// stack.push(15);
// stack.push(10);
// stack.push(8);
// stack.push(6);
// stack.push(12);
// stack.push(9);
// stack.push(18);

// next greatest element - 2
stack.push(100);
stack.push(1);
stack.push(11);
stack.push(1);
stack.push(120);
stack.push(111);
stack.push(123);
stack.push(1);
stack.push(-1);
stack.push(-100);

// console.log(stack.prevGreatest());
// console.log(stack.nextGreatest());
console.log(stack.nextGreatest2());
