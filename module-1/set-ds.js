const newSet = new Set();
console.log(newSet);

newSet.add("Cat");
newSet.add("Dog");
newSet.add("Cow");
console.log(newSet);
console.log(newSet.has("Cow"));
console.log(newSet.size);

const data = new Set(["apple", "banana", "strawberry", "lichi", "apple"]);

console.log(data.size);
console.log(data.delete("apple"));
console.log(data.delete("papaya"));
console.log(data);

let arr = [1, 2, 3, 4, 5, 6, 6, 7, 6, 8, 8, 8];

let removeDuplicate = [...new Set(arr)];

console.log(removeDuplicate);

const userArr = ["Newton", "Rehen", "Zoha", "Newton"];
let newArrFor = userArr.forEach((user) => user);
let newArrMap = userArr.map((user) => user);
console.log(newArrFor); // does not create new arr
console.log(newArrMap); // does create a new arr

console.log(userArr.length);
const refineUser = [...new Set(userArr)];

const setArrFor = refineUser.forEach((user) => user);
const setArrMap = refineUser.map((user) => user);
console.log(setArrFor);
console.log(setArrMap);

refineUser.push("Bepari");

console.log(refineUser);

const userId = [1, 2, 3, 3, 3, 4, 5, 6, 6, 7, 7, 7, 7, 8, 9, 10];

const refineUserId = new Set(userId);
refineUserId.forEach((id) => console.log("UserId", id));
const refineUserIdArr = Array.from(refineUserId);
console.log(refineUserIdArr);
console.log(refineUserId);

const fruitArr = [
  "Apple",
  "Banana",
  "Strawberry",
  "Lichi",
  "Apple",
  "Mango",
  "Jackfruit",
  "Avocado",
  "Watermelon",
  "Lichi",
];

const removeDuplicateItem = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}; // normal way it o(n2)

const removeDuplicateItemSet = (arr) => {
//   const newArrSet = new Set(arr);
  const newArrSet = [...new Set(arr)];
  return newArrSet
//   return Array.from(newArrSet)
};
console.log(removeDuplicateItem(fruitArr));
console.log(removeDuplicateItemSet(fruitArr));

const generateData = (size) => {
  const basicData = [
    "Apple",
    "Banana",
    "Strawberry",
    "Lichi",
    "Apple",
    "Mango",
    "Jackfruit",
    "Avocado",
    "Watermelon",
    "Lichi",
  ];

  const generateData = [];

  for (let i = 0; i < size; i++) {
    const randomNumber = Math.floor(Math.random() * basicData.length);

    generateData.push(basicData[randomNumber]);
  }
  return generateData;
};

const hugeData = generateData(10000000);
const hugeData2 = generateData(10000000);

const removeDuplicateItem2 = (arr) => {
  let newArr = [];

  arr.forEach((item) => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  return newArr;
}; // normal way it o(n2)

console.time("NormalArr");
console.log(removeDuplicateItem2(hugeData));

console.timeEnd("NormalArr");

const removeDuplicateItemSet2 = (arr) => {
  const newArrSet = new Set(arr);
  //   const newArrSet = [...new Set(arr)];
  //   return newArrSet;
  return Array.from(newArrSet);
};

console.time("setArr");
console.log(removeDuplicateItemSet2(hugeData2));

console.timeEnd("setArr");
