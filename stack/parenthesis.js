function matching(a, b) {
  return (
    (a === "(" && b === ")") ||
    (a === "[" && b === "]") ||
    (a === "{" && b === "}")
  );
}

class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  insert(value) {
    this.top++;
    this.items.push(value);
  }

  remove() {
    this.items.pop();
    this.top--;
  }

  parenthesis(str) {
    // loop through the string "({[]})"
    for (let i = 0; i < str.length; i++) {
      // check if it is a starting parenthesis then insert into the stack
      if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
        this.insert(str[i]);
      } else {
        // else check if the next parenthesis coming is equal to the parenthesis at the top or not
        // if not same then return false else remove the top parenthesis.
        if (!matching(this.items[this.top], str[i])) {
          return false;
        } else {
          this.remove();
        }
      }
      console.log(this.items);
    }
    // return true if all parenthesis are in matching order
    return true;
  }
}

const stack = new Stack();

console.log(stack.parenthesis("{}({[]})"));
