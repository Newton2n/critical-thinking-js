// Sort

const numbers = [40, 100, 1, 5, 25, 10, 9, 3, 4, 2];
const fruits = ["Banana", "apple", "Cherry", "date", "lichi", "papaya"];

numbers.sort((a, b) => a - b);
// console.log(numbers);
// fruits.sort();
fruits.sort((a, b) => a.localeCompare(b));
// console.log(fruits)

const players = [
  [
    "Shakib Al Hasan",
    "Masrafe Bin Mortuza",
    "Tamim Iqbal",
    [
      "Rubel",
      "Taskin Ahamed",
      ["Mehedi hasan miraz", "Taijul", ["Mustafizur"]],
    ],
  ],
  [
    "Viral Kohili",
    "Rohit Sharma",
    "MS Dhoni",
    [
      "Bumrah",
      "Bhuvneshwar kumar",
      [
        "Md siraj",
        "Akshdeep",
        "Kuldeep Yadap",
        ["Jadeja", ["Surya kumar yadap"]],
      ],
    ],
  ],
];

// console.log(players.flat(2));
// console.log(players.flat(Infinity)); //** */ .flat(number) number refer  how deep it will be flat . Infinity refer how many nested array no problem all will be flat

const tagsFromPosts = [
  ["javascript", "react", "css"],
  ["node", "express"],
  ["css", "html", "react"],
];

const filter = new Set(tagsFromPosts.flat());

console.log([...filter]);
