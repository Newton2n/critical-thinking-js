// ? Queue (FIFO)
//? Array implementation
class Queue {
  items = [];
  constructor() {}

  //*on(1)
  enQueue(item) {
    return this.items.push(item);
  }

  
  //! o(n)
  deQueue() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items.shift();
  }
   //*on(1)
  isEmpty() {
    return this.items.length === 0;
  }
   //*on(1)
  size() {
    return this.items.length;
  }

   //*on(1)
  print(){
    console.log(this.items.join(" to "))
  }
}


const newQueue = new Queue()

newQueue.enQueue(1)
newQueue.enQueue(10)
newQueue.enQueue(100)
newQueue.enQueue(1000)
newQueue.enQueue(10000)
newQueue.enQueue(100000)

console.log(newQueue.size())
newQueue.print()

newQueue.deQueue()
newQueue.deQueue()
newQueue.deQueue()
newQueue.deQueue()
newQueue.deQueue()
newQueue.deQueue()
newQueue.print()

console.log(newQueue.isEmpty())