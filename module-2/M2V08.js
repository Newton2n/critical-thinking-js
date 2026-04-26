//*  Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 20 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 12 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? if(category)

const aggregatingData = sales.reduce((acc, currentValue) => {
  const { category, price, quantity } = currentValue;
  //   if (acc[category]) {
  //     const singleTotalProductPrice = price * quantity;

  //     acc[category] = {
  //       totalRevenue: acc[category].totalRevenue + singleTotalProductPrice,

  //       itemCount: acc[category].itemCount + quantity,
  //     };
  //   } else {
  //     acc[currentValue.category] = {
  //       totalRevenue: price * quantity,
  //       itemCount: quantity,
  //     };
  //   } //!my approach

  if (!acc[category]) {
    acc[currentValue.category] = {
      totalRevenue: 0,
      itemCount: 0,
    };
  }

  acc[category].totalRevenue += price * quantity;
  acc[category].itemCount += quantity;

  return acc;
}, {});

console.log(aggregatingData);

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };
