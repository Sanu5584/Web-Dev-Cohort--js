// Numbers

const score = 400;
console.log(score);

const balance = new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNum = 1123.368543;
// console.log(otherNum.toPrecision(4));

const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// Math

console.log(Math);
// console.log(Math.abs(-34));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.7));
// console.log(Math.sqrt(5));
// console.log(Math.min(4, 5, 6, 6, 7, 4));
// console.log(Math.max(4, 5, 6, 6, 7, 4));

console.log(Math.random()); // it gives value btw 0 and 1 only

console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
