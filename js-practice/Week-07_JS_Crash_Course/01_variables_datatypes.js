var name = 'Sanidhya';
const PI = 3.142;

let fullName = 'Sanidhya Patel'; // String
let num = 320; // Number
let isLoggedIn = true; // Boolean
let nothing = null; //  Object
let undefinedVar = undefined; // undefined
let symbolVar = Symbol(); // Symbol

// console.log(typeof nothing);
// console.log(typeof undefinedVar);

let user = {
  name: 'Sanu',
  age: 20,
  isStudent: true,
};

// conversion

let num2 = '43a';
// let convertedNum = Number(num2); // recommended -> standard approach
// let convertedNum = +num2;
let convertedNum = parseInt(num2);

// console.log(convertedNum); // gives Not a number (NaN)
// console.log(typeof convertedNum);

let str = 123;
let convertedStr = String(str);

// console.log(convertedStr);

// Operations

let a = 20,
  b = 30;

let sum = a + b;
// console.log(sum);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b); // remainder/modulo
// console.log(a ** b); // power

/** Comparision */

let x = 5;
let y = 10;

// console.log(x == y); // checks value
// console.log(x > y);
// console.log(x < y);
// console.log(x === y); // strict check // checks datatype also
// console.log(x <= y);
// console.log(x >= y);
// console.log(x != y);
// console.log(x !== y);

/** Math */

// console.log(Math);
// console.log(typeof Math); // object

// console.log(Math.max(10, 20));
// console.log(Math.min(10, 20));
// console.log(Math.random()); // gives random value btw 0 and 1
// console.log(Math.floor(Math.random() * 10) + 1);

/** Date and Time */

/** Strings */

let fName = 'Sanidhya';
let lName = 'Delvadiya';

let myName = fName + ' ' + lName;
console.log(myName);
