//* Grouping and Aggregating Data

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

const result = surveyResponses.reduce((acc, currentValue) => {
  //   acc[currentValue] = (acc[currentValue] || 0) + 1;

  if (acc[currentValue]) {
    acc[currentValue] = acc[currentValue] + 1;
  } else {
    acc[currentValue] = 1;
  } // readability over shortcut
  return acc;
}, {});
console.log(result);

console.log(result["A"], result["B"], result["C"]);
//? Output
// { A: 5, C: 3, B: 5, D: 1 }
