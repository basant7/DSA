class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    for (let i = 0; i < this.items.length - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
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
}

let queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);

queue.dequeue();

console.log("The front element is -> ", queue.front());
console.log("The rear element is -> ", queue.rear());
