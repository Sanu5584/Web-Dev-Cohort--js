/**
- it takes callbackfn✅, value✅, index✅, array✅, thisArg❌ as an input
- iterate over each element of an array and constructs a new array from the results of every iterative cycle✅
- It returns a shallow copy of filtered elements which passed the test in a new array from the given array, if no element pass the test it returns empty array
- callbackFn returns a truthy value
*/

const arr = [1, 2, 3, 4, 5, 6];

const CheckInbuiltfilterMethod = arr.filter(
  (element) => element == element / 2
);

console.log(CheckInbuiltfilterMethod);
