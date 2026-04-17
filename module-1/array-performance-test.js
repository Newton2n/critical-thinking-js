/**
 * RECAP: FAST CODE VS. SLOW CODE
 * Order of n o(n)
 */

// --- 1. THE SETUP ---
const size = 1_000_000; // 1 million items
const list = [];

for (let i = 0; i < size; i++) {
  list.push(i);
}

// --- 2. THE HEAVY WORK (Slow) ---
// This is slow because the computer must "touch" every single
// item in the list one-by-one. If the list is huge, this is slow.
// if a loop need to iterate into every single element of an array it will o(n) Linear time complexity,

console.time("Mapping (Slow)");
const objects = list.map((num) => ({ id: num }));
console.timeEnd("Mapping (Slow)");

console.time("Finding (Slow)");
const found = list.find((num) => num === 999_999);
console.timeEnd("Finding (Slow)");

// --- 3. THE SHORTCUT (Fast) ---
// This is instant. The computer doesn't look through the list;
// it just grabs the item at that exact "address."

console.time("Index Access (Fast)");
const quick = list[999_999];
console.timeEnd("Index Access (Fast)");

// --- 4. MEASURING TIME ---
const start = performance.now();
// (Any code you want to measure)
const end = performance.now();
console.log(`Total time: ${end - start} ms`);
