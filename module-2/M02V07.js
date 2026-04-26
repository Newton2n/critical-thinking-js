//* Grouping  Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
  "E",
  "F",
  "E",
];

const groupData = surveyResponses.reduce((acc, currentValue) => {
  //   acc[currentValue] = (acc[currentValue] || 0) + 1;

  if (acc[currentValue]) {
    acc[currentValue] = acc[currentValue] + 1;
  } else {
    acc[currentValue] = 1;
  } // readability over shortcut
  return acc;
}, {});
console.log(groupData);

console.log(groupData["A"], groupData["B"], groupData["C"]);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }
