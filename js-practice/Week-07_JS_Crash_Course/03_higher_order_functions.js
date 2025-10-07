// HOF

// forEach loop :- it returns undefined

const dreamBikes = [
  'Hero Xpulse 200 4V',
  'RE Bullet 350',
  'Bajaj Dominar 250',
  'Suzuki V-Storm SX 250',
  'Yezdi Adventure 250',
  'RE Classic 350',
];

// dreamBikes.forEach(function (bike) {
//   console.log(bike);
// });

// dreamBikes.forEach((bike) => {
//   // console.log(bike);
// });

function favBikes(bike) {
  // console.log(bike);
}

dreamBikes.forEach(favBikes);

dreamBikes.forEach((bike, index, array) => {
  // console.log(bike, index, array);
});

const programmingLang = [
  {
    langName: 'Javascript',
    langFileName: '.js',
  },
  {
    langName: 'Java',
    langFileName: '.java',
  },
  {
    langName: 'Python',
    langFileName: '.py',
  },
];

programmingLang.forEach((item) => {
  // console.log(item.langName);
});

const addArr = [1, 2, 3, 4, 5, 6];

addArr.forEach((arr_num) => {
  // if (typeof arr_num == 'number') console.log(arr_num * 10);
});

/**
 *  
 * forEach imp points to note

 console.log(
   programmingLang.forEach((item) => {
     console.log(item.langName);
  })
 ); // * it gives undefined bcoz forEach doesnt returns anything 

 
 * forEach() expects a synchronous function — it does not wait for promises. Make sure you are aware of the implications while using promises (or async functions) as forEach callbacks.

*/

// filter method

// it was different from forEach bcoz forEach doesnt return anything and if we want to return anything and applying conditions to array only then we use filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const conditionalNums = myNums.filter((nums) => nums >= 4);

const conditionalNums = myNums.filter((nums) => {
  return nums >= 4;
});

// console.log(conditionalNums);

// const coding = ["js","py","java","cpp","ruby","go"];

// const value = coding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(value);

const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.filter((num) => num>4);
// const newNum = myNum.filter((num) => {
//     // num>4;  // ouput is empty array bcoz we start new blockso we have to write return before this if we write direcly as above we dont have to write return keyword

//     return num > 4;
// });

// USING FOREACH LOOP

// const newNum = [];

// myNum.forEach((num) => {
//     if (num > 4) {
//         newNum.push(num);
//     }
// });
// console.log(newNum);

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let userBooks = books.filter((b) => b.genre == 'History');

userBooks = books.filter((bk) => bk.publish >= 2000);

userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre == 'History');

// userBooks = books.filter((b) => b.title).map((b) => b.title); // this is for practice only

// console.log(userBooks);

/** Filter imp points
  
    - The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered  down to just the elements from the given array that pass the test implemented by the provided function.
    
    - A shallow copy of the given array containing just the elements that pass the test. If no elements pass the test, an empty array is returned.

    - The filter() method is generic. It only expects the this value to have a length property and integer-keyed properties.

    - callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

    - The filter() method is an iterative method. It calls a provided callbackFn function once for each element in an array, and constructs a new array of all the values for which callbackFn returns a truthy value. Array elements which do not pass the callbackFn test are not included in the new array. Read the iterative methods section for more information about how these methods work in general.

    - Even though filter() is generic, it is not designed for transformation.
      It returns elements that match a condition but does not modify them.
 
 */

//

// map method

const numLst = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numLst.map((nums) => console.log(nums * 10));
const newNums = numLst.map((nums) => nums * 10);
// console.log(numLst);
// console.log(newNums); // gives -> [10,20,30,40,50,60,70,80,90,100]

// method chaining

const newNumsLst = newNums
  .map((nums) => nums / 10)
  .map((nums) => nums + 1.34)
  .map((nums) => Math.ceil(nums))
  .filter((nums) => nums > 4);

// console.log(newNumsLst);

/** map method imp points
 
    - The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

    - It returns A new array with each element being the result of the callback function.

    - callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

    - The map() method is generic. It only expects the this value to have a length property and integer-keyed properties.

    - Since map builds a new array, calling it without using the returned array is an anti-pattern; use forEach or for...of instead.
 */
//

// reduce and reduceRight methods

// reduce for left-to-right.
// reduceRight is for right-to-left
// other than this every thing is similar and see this from mdn docs

const myArray = [1, 2, 3];

// const myArrTotal = myArray.reduce(function(accumulator, currentValue){
//   return accumulator + currentValue
// }, 0)

// let initialValue = 0;
// const myArrTotal = myArray.reduce(function (accumulator, currentValue) {
//   console.log(
//     `Accumulator : ${accumulator} and currentValue : ${currentValue}`
//   );
//   return accumulator + currentValue;
// }, initialValue);

const myArrTotal = myArray.reduce((acc, currVal) => acc + currVal, 0);

// console.log(myArrTotal);

const shoppingCart = [
  {
    itemName: 'JavaScript Course',
    price: 2999,
  },
  {
    itemName: 'Python Course',
    price: 999,
  },
  {
    itemName: 'Full Stack Course',
    price: 2999,
  },
  {
    itemName: 'App Development Course',
    price: 10000,
  },
  {
    itemName: 'AI/ML Course',
    price: 12999,
  },
];

const totalCartPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);

// console.log(totalCartPrice)

/**
  
  - accumulator changes its datatype according to the provided intialValue 
  - read the mdn docs (full article on reduce)


 */
