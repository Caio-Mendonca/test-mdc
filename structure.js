class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
      console.log(`${item} pushed into the stack.`);
    }
  
    pop() {
      if (!this.isEmpty()) {
        const poppedItem = this.items.pop();
        console.log(`${poppedItem} popped from the stack.`);
        return poppedItem;
      } else {
        console.log("Stack is empty. Cannot pop from an empty stack.");
        return null;
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    printStack() {
      if (this.isEmpty()) {
        console.log("Stack is empty.");
      } else {
        console.log("Current stack:");
        for (let i = this.items.length - 1; i >= 0; i--) {
          console.log(this.items[i]);
        }
      }
    }
  }
  
// Example usage:
const stack = new Stack();
  
stack.push(1);
stack.push(2);
stack.push(3);
  
stack.printStack();
  
const poppedItem = stack.pop();
  
stack.printStack();