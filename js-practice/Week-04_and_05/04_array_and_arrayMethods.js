// console.log(Array.from({ name: 'Sanidhya', age: 20, city: 'Ahmedabad' })); // why not running bcoz Array.from property is only works on iteerable or array like objects

let arr = [1, 2, 3, 4, 5, 6, 7];
let arr2 = ['Spiderman', 'Batman', 'Superman', 'Thor'];

console.log(arr.at(2)); // at method

console.log(arr2.concat(arr)); // concat method

// Every method

// const arr1 = Array(1, 3, 5, 7, 9); // gives false in this case due to not matching condition

const arr1 = Array(0, 2, 4, 6, 8);

let evenNums = arr1.every(function (num) {
  return num % 2 === 0;
});

console.log(evenNums);

// fill method

const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(myarr.fill(5)); // Array.fill(value) // it replace the full array with the given value

console.log(myarr.fill(5, 6)); // Array.fill(value, start) // it replace the full array with the given value from the given starting point

// console.log(myarr.fill(5, 4 , 7)); // Array.fill(value, start , end) // it fills the range of indices with given value

// flat method

const Heroes = [
  'Spiderman',
  ['Shaktiman', 'krish'],
  'Hulk',
  [
    'Thor',
    'Hawkeye',
    'Ironman',
    ['LadyThor', 'LadyHulk', 'Antman', ['Black Panther', 'Captain America']],
  ],
];

console.log(Heroes.flat(Infinity));

// includes method

const class10 = ['Sanidhya', 'Hitesh', 'Tirth', 'Priyanshu'];

// console.log(class10.includes('Sanidhya')); // gives true

console.log(class10.includes('Sanidhya', 2)); // it gives false bcoz there is no such type of element on that index

// indexOf method

console.log(class10.indexOf('Hitesh', 3));
console.log(class10.indexOf('Tirth'));

//  join method

console.log(class10.join(', '));

// keys method

let keyArr = class10.keys();

for (const key of keyArr) {
  console.log(key);
}

// values method

let valArr = class10.values();

for (const val of valArr) {
  console.log(val);
}

// pop method

const cars = [
  'HM Contessa',
  'XUV 3X0',
  'kia carens',
  'ScorpioN',
  'Tata Safari Storme',
];

console.log(cars.pop());
console.log(cars);

// push method

console.log(cars.push('Tata Sierra')); // here outcome is 5 bcoz it gives the new length of array
console.log(cars);

// reverse method

console.log(cars.reverse()); // it permanently changes the parent array also to avoid this we have other method called toReversed
console.log(cars);

// toReversed method

const bikes = [
  'Hero Xpulse 4V pro',
  'Yezdi Adventure',
  'Suzuki V Storm 250',
  'RE Bullet 350',
  'Bajaj Dominar 250',
];

console.log(bikes.toReversed());
console.log(bikes);

// shift method

const NumArr = [1, 2, 3, 4, 5, 6, 7];

const shiftedArr = NumArr.shift(0);
console.log(NumArr); // here first element removed from array
console.log(shiftedArr); // it prints that removed element

// unshift method

const unshiftedArr = NumArr.unshift(0, 1);
console.log(NumArr);
console.log(unshiftedArr);

// some method // The some() method of Array instances tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

// slice method

const sportsCars = [
  'BMW M5',
  'Dodge SRT Demon',
  'Nissan GTR',
  'Cheverolet Camaro',
  'Ford Mustang GT',
];

console.log(sportsCars.slice(3)); // it splits the array of the given range and returns new array on basis of that and it doesnt count the end value
console.log(sportsCars.slice(2, 4));
console.log(sportsCars.slice(-3, 5));
console.log(sportsCars.slice(-3));
console.log(sportsCars.slice(3));

// splice method

const IndianStartups = [
  'postman',
  'OYO',
  'Zomato',
  'CRED',
  'Zostel',
  'Flipkart',
  'Zoho',
];
console.log(IndianStartups);
//  IndianStartups.splice(index, count, values)

console.log(IndianStartups.splice(2, 3, 'Swiggy', 'Rapido')); // it starts with the given index value and from their it counts the array elements and delete them and print that array when we print it
console.log(IndianStartups); // and when we print the whole array it was changed due to splice method

// toSpliced method

const religiousCities = [
  'Somnath',
  'Dwarka',
  'Kashi',
  'Kedarnath',
  'Varanasi',
  'Hampi',
];
console.log(religiousCities.toSpliced(1, 0, 'Ujjain', 'Badrinath')); // it adds the value at index 1
console.log(religiousCities); // it was same as splice method but it not change the original array and returns new array with changes

// toString method
const strArr = [1, 2, '3w', 'abc'];
console.log(strArr.toString());
console.log(strArr);

// toLocaleString method

console.log(strArr.toLocaleString()); // it uses specially for dates and numbers , else it works same as toString method
console.log(strArr);

// with method

const laptops = ['Macbook Air', 'HP Victus 15', 'Samsung book 4'];

console.log(laptops.with(1, 'ASUS Tuf 15')); // it replace the value of given index to new value and returns new array without changing parent array
console.log(laptops);

// forEach method

laptops.forEach(function (e) {
  console.log(e);
});

// it was in HOF file
// filter method
// map method
// reduce method
// reduceRight method
