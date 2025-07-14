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
}

const stack = new Stack();
stack.push(15);
stack.push(10);
stack.push(18);
stack.push(12);
stack.push(4);
stack.push(6);
stack.push(2);
stack.push(8);

console.log(stack.prevGreatest());
