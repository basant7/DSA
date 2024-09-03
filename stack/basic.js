class Stack {
    constructor(value){
        this.arr = [];
        this.top = -1;
    }

    push(value){
        this.top++;
        this.arr[this.top] = value
    }

    remove(){
        if(this.top > 0){
            this.top--;
            this.arr.pop();
            return;
        }
        return false;
    }

    peek(){
        if(this.top < 1){
            return false;
        }else{
            return this.arr[this.top]
        }
    }

    isEmpty(){
        if(this.top < 1){
            return true
        }
        return false;
    }

    size(){
        return this.arr.length;
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.remove();
stack.remove();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack);