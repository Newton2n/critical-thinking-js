class Stack {
  #items = [];
  constructor() {}

 //* o(1)
  push(item) {
    this.#items.push(item);
  }
 
  //*o(1)
  pop() {
    if (this.#items.length === 0) {
      return undefined;
    }
    return this.#items.pop();
  }
  
  //*o(1)
  peek() {
    if (this.#items.length === 0) {
      return undefined;
    }

    return this.#items[this.#items.length - 1];
  }

  //*o(1)
  isEmpty() {
    return this.#items.length === 0;
  }
  
  //*o(1)
  size(){
    return this.#items.length
  }

  //*o(1)
  print(){
    console.log(this.#items.slice().reverse().join(" from "))
  }
}

const newStack = new Stack();

newStack.push(10)
newStack.push(20)
newStack.push(30)
newStack.push(40)

console.log(newStack.size())
console.log(newStack.peek())
console.log(newStack.pop())
console.log(newStack.size())
console.log(newStack.isEmpty())
newStack.print()
console.log(newStack.peek())

