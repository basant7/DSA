class DynamicArray {
  constructor() {
    this.capacity = 2;
    this.length = 0;
    this.arr = new Array(this.capacity);
  }

  push(value) {
    if (this.length == this.capacity) {
      this.resize();
    }
    this.arr[this.length] = value;
    this.length++;
  }

  resize() {
    this.capacity *= 2;
    let data = new Array(this.capacity);
    for (let i = 0; i < this.length; i++) {
      data[i] = this.arr[i];
    }
    this.arr = data;
  }

  pop() {
    if (this.length === 0) {
      return "no element to delete";
    }
    const value = this.arr[this.length - 1];
    this.arr[this.length - 1] = undefined;
    this.length--;
    return value;
  }

  print() {
    if (this.length === 0) return "no element to print";
    for (let i = 0; i < this.length; i++) {
      console.log(this.arr[i]);
    }
  }
}

const array = new DynamicArray();

array.push(1);
array.push(3);
array.push(5);

array.pop();

console.log(array.print());
