class Stack{
    constructor(){
        this.arr = [];
        this.top = -1;
    }
    
    insert(value){
        this.top++;
        this.arr[this.top] = value;
    }

    delete(){
        if(this.top < 0){
            return false;
        }
        this.arr.pop();
        this.top--;
    }

    printTop(){
        if(this.top < 0){
            return false;
        }
        console.log("The top element is ", this.arr[this.top]);
    }

    printAll(){
        for(let i = 0; i <= this.top; i++){
            console.log(this.arr[i])
        }
    }
}

const stack = new Stack();

stack.insert(10)
stack.insert(20)
stack.insert(30)
stack.insert(40)
stack.insert(50)

stack.printAll();
stack.printTop();

stack.delete();

stack.printAll();
stack.printTop();
