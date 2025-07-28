class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(val) {
    this.queue.push(val);
    this.sum += val;

    if (this.queue.length > this.size) {
      this.sum -= this.queue.shift();
    }

    return this.sum / this.queue.length;
  }
}

const movingAverage = new MovingAverage(3);
console.log(movingAverage.next(1)); // return 1.0
console.log(movingAverage.next(10)); // return (1 + 10) / 2 = 5.5
console.log(movingAverage.next(3)); // return (1 + 10 + 3) / 3 = 4.66667
console.log(movingAverage.next(5)); // window becomes [10, 3, 5], return (10 + 3 + 5) / 3 = 6.0
