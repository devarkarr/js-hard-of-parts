/** @format */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

// This is mutating methods
arr1.reverse(); // [3,2,1]
arr1.splice(1, 1, 6); // replace 1 element at index 1 with 6 - [3,6,1]
arr1.sort(); // [1,3,6]

// This is non-mutating methods
const reversed = arr2.toReversed();
const spliced = arr2.toSpliced(1, 1, 6);
const sorted = arr2.toSorted();

const deepArr = [1, 2, [1, 2], 2];
const flattened = deepArr.flat();
// Can set depth (even 'Infinity'),default to 1 
console.log(flattened);

const last2 = flattened.findLastIndex((x) => x === 2);
// Last 2 is at idx 4
console.log(last2);

function oddOrEven(num) {
  return num % 2 === 0 ? "even" : "odd";
}

const grouped = Object.groupBy(flattened, oddOrEven);
// Popular SQL Statement
console.log(grouped);

console.log(arr1);

console.log(reversed, spliced, sorted);
