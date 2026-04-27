// //* Stateless vs Stateful

// const counter = (amount) => {
//   let count = 0;

//   count = count + amount;

//   return count;
// };

// console.log(counter(3));
// console.log(counter(2));

const counter = {
  count: 0,

  add(amount) {
    this.count = this.count + amount;
  },

  print() {
    console.log(this.count);
  },
};

counter.add(2);
counter.add(3);

counter.print();

const counter = (amount) => {
  let allAmount = 0;
  allAmount += amount;
  return allAmount;
}; // * stateless

console.log(counter(2));
console.log(counter(3));
console.log(counter(5));

const obj = {
  allAmount: 0,
  counter(amount) {
    this.allAmount += amount;
    return this.allAmount;
  },
  print() {
    console.log(this.allAmount);
  },
}; //*stateful

obj.counter(2);
obj.counter(4);
obj.counter(6);

console.log(obj.print());
