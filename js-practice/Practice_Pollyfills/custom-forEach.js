/**
forEach :- 
  - it takes function as a callback✅
  - it executes for every value of the array✅
  - it returns undefined✅
  - it is not chainable✅
  - callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays✅
  - it accepts callback✅, value✅, index✅, array✅ and thisArg❌ as a parameters
 */

const arr = [1, 2, 3, , , '', null, undefined, [], {}, 4, 5, 6];

if (!Array.prototype.myForEach) {
  // yaha pe check karna hoga forEach hai yaa nhi but isme ye chalega nhi isliye myForEach check kiya
  Array.prototype.myForEach = function (callback, val, index, arr) {
    if (typeof callback !== 'function') {
      throw new TypeError(`callback ${callback} should be a function`);
    }

    const contextArr = this;
    for (let i = 0; i < contextArr.length; i++) {
      if (i in contextArr) {
        callback(contextArr[i], i, contextArr);
      }
    }
  };
}

// using custom forEach
const customForEachCheck = arr.myForEach((val, index, array) => {
  console.log(
    `custom: The value of index ${index} is ${val} and array is ${array}`
  );
});

console.log('customForEachCheck: ', customForEachCheck);

// using in-built forEach
const builtinForEachCheck = arr.forEach((val, index, array) => {
  console.log(
    `In-built: The value of index ${index} is ${val} and array is ${array}`
  );
});

console.log('builtinForEachCheck: ', builtinForEachCheck);
