/**
 - it takes callbackfn✅, value✅, index✅, array✅, thisArg❌ as an input
 - returns new array with each element being the result of the callback function✅
 - iterate over each element of an array and constructs a new array from the results of every iterative cycle✅
 - callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.✅
 - it is chainable✅
 */

const arr = [1, 2, 3, , , '', null, undefined, [], {}, 4, 5, 6];

if (!Array.prototype.myMap) {
  Array.prototype.myMapFn = function (callback, val, index, arr) {
    if (typeof callback !== 'function') {
      throw new TypeError(`Callback :- ${callback} should be a function`);
    }

    const contextArr = this;
    let newArr = [];
    for (let i = 0; i < contextArr.length; i++) {
      if (i in contextArr) {
        const newValue = callback(contextArr[i], i, contextArr);
        newArr.push(newValue);
      }
    }
    return newArr;
  };
}

const customMapCheck = arr.myMapFn((val, index, arr) => {
  return `The value of array ${arr} at ${index} is ${val}`;
});

console.log('customMapCheck:- ', customMapCheck);

const inBuiltMapCheck = arr.map((val, index, arr) => {
  return `The value of array ${arr} at ${index} is ${val}`;
});

console.log('inBuiltMapCheck:- ', inBuiltMapCheck);

