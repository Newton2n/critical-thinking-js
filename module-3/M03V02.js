//// let allAmount = 0;
//// const counter = (amount) => {
////   allAmount += amount;
////   return allAmount;
//// }; //! making stateless function to stateful ,this is not appropriate

//// counter(2)
//// counter(5)
//// counter(3)
//! function should be pure function
//// console.log(allAmount)
//// console.log(counter(10))

// const createCounter = () => {
//   let allAmount = 0;
//   return (amount) => {
//     allAmount += amount;
//     return allAmount;
//   };
// }; //! this way to make function stateful also not appropriate

// const counter = createCounter();

// counter(5)
// counter(5)

// console.log(counter(5))

//? class

class Counter {
  constructor(amount) {
    this.allAmount = amount;
  }
  add(amount) {
    this.allAmount += amount;
  }
  print(){
    console.log(this.allAmount)
  }
} //? javascript class is stateful

const counter1 = new Counter(10)

counter1.add(5)
counter1.add(5)

counter1.print()

const counter2 = new Counter(100)

counter1.add(50)
counter1.add(50)

counter1.print()
