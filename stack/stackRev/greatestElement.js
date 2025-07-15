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

// next greatest element
stack.push(5);
stack.push(15);
stack.push(10);
stack.push(8);
stack.push(6);
stack.push(12);
stack.push(9);
stack.push(18);

console.log(stack.prevGreatest());
console.log(stack.nextGreatest());
