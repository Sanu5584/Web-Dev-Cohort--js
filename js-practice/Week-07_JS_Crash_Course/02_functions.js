// functions

function Printfactory() {
  // console.log('Sanidhya Delvadiya');
}

Printfactory();

function addTwoNumbers(num1, num2) {
  // parameters
  return num1 + num2;
  // return keyword :-
}

// console.log(addTwoNumbers(55, 45)); // arguments

// functions with arrays and objects

function calculateCartPrice(...itemPrice) {
  // rest operator
  return itemPrice;
}

// console.log(calculateCartPrice(133, 454, 32, 45));

function calculateCartPrice(price1, price2, ...itemPrice) {
  // in this 133, and 454 goes to price 1 and price 2 and the rest is goes to the rest operated var which we will see in output
  // rest operator
  return itemPrice;
}

// console.log(calculateCartPrice(133, 454, 32, 45));

const user = {
  userName: 'Sanidhya',
  age: 20,
};

function handleObj(obj) {
  return `Username is ${obj.userName} and age is ${obj.age}`;
}

// console.log(handleObj(user));
// console.log(
//   handleObj({
//     userName: 'Hitesh',
//     age: 20,
//   })
// );

const myArr = [200, 300, 400, 500, 600];

function returnSecondValue(getArr) {
  return getArr[1];
}

// console.log(returnSecondValue(myArr));

// console.log(returnSecondValue([121, 343, 5454, 6767, 5685]));

// Arrow functions

// this keyword

const user2 = {
  username: 'Sanidhya',
  age: 20,

  welcomeMsg: function () {
    console.log(`${this.username} , welcome to our website`);
    console.log(this);
  },
};

// user2.welcomeMsg();

// user2.username = 'Priyanshu';

// user2.welcomeMsg();

// console.log(this);

// function chai() {
//   let username = 'Sanidhya';
//   console.log(this.username);
// }
// chai();

// const chai = function () {
//   let username = 'Sanidhya';
//   console.log(this.username);
// };

const chai = () => {
  let username = 'Sanidhya';
  console.log(this.username);
  console.log(this);
};
// chai();

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// }; // Explicit function

// console.log(addTwo(2322,2423));

// const addTwo = (num1, num2) => num1 + num2; // implicit function

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({ username: 'Sanidhya' });

// console.log(addTwo(2322, 2423));

// IIFE (Immediately Invoked Function Expression)

(function DB() {
  // named IIFE
  console.log(`DB CONNECTED`);
})(); // here semicolon is imp to end the iife

// (Function defination)(Function Execution)

((name) => {
  // unnamed IIFE
  console.log(`DB CONNECTED TWO ${name}`);
})('Sanidhya');
