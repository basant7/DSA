class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    let val = this.items[0];
    for (let i = 0; i < this.items.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.items.length--;
    return val;
  }

  isEmpty() {
    if (!this.items.length) {
      return true;
    }
    return false;
  }

  front() {
    if (!this.items.length) {
      return false;
    }
    return this.items[0];
  }

  rear() {
    if (!this.items.length) {
      return false;
    }
    return this.items[this.items.length - 1];
  }

  reverse() {
    let stack = [];
    while (this.items.length) {
      stack.push(this.dequeue());
    }
    while (stack.length) {
      this.items.push(stack.pop());
    }
    return this.items;
  }
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();
console.log(queue.reverse());

console.log("The front element is -> ", queue.front());
console.log("The rear element is -> ", queue.rear());
