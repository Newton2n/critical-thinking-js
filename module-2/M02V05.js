// Count subtotal
//todo by array.reduce
const cartItems = [
  { id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1 },
  { id: "p-002", name: "Walton USB-C Cable", price: 350, quantity: 2 },
  { id: "p-003", name: "Aarong Kurta", price: 2200, quantity: 1 },
  { id: "p-004", name: "Walton bulb 12 watt", price: 170, quantity: 5 },
  { id: "p-004", name: "Walton fan", price: 5600, quantity: 3 },
];

const subtotal = cartItems.reduce((acc, currentValue) => {
  return acc + currentValue.price * currentValue.quantity;
}, 0);

// console.log(subtotal);
//best player

//todo by array.reduce
const players = [
  { name: "Jamal Bhuyan", score: 88 },
  { name: "Shekh Morsalin", score: 81 },
  { name: "Rakib Hossain", score: 95 },
  { name: "Topu Barman", score: 91 },
  { name: "Sohel Rana", score: 72 },
];

const bestPlayer = players.reduce((acc, currentValue) => {
  return acc.score > currentValue.score ? acc : currentValue;

  // if (acc.score > currentValue.score) {
  //   return acc;
  // } else {
  //   return currentValue;
  // }
  //   console.log(acc.score > currentValue.score )
}, players[0]);

console.log(bestPlayer);
