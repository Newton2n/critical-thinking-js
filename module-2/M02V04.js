// const arr = [1, 9, 5, 7, 9, 11, 13, 45, 10];

// const hasEven = arr.some((number) => number % 2 === 0);

// console.log(hasEven);

// const accessServer = ["Admin", "Owner", "Manager"];
// const currentUser = ["user", "viewer", "Owner"];

// const isAccessAble = currentUser.some((role) => accessServer.includes(role));

// console.log(isAccessAble);

// const newArr = Array.from({ length: 7 }, (value, number) => {
//   return number * number;
// });
// console.log(newArr);

const makeArr = (start, end, step) => {
  return Array.from(
    { length: Math.ceil((end - start) / step) },
    (_, number) => (start + number) * step,
  );
};

console.log(makeArr(1, 10, 5));
