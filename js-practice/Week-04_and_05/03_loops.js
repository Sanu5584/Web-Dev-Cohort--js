// for loop

for (let i = 0; i <= 10; i++) {
  // console.log(i);
}

for (let i = 1; i <= 10; i++) {
  // console.log(`outer loop: ${i}`);
  // console.log('\n');

  for (let j = 1; j <= 10; j++) {
    // console.log(`inner loop: ${j} and outer loop: ${i}`);
    // console.log(`${i} * ${j} = ${i * j}`);
  }
}

const dreamBikes = [
  'Hero Xpulse 200 4V pro',
  'RE Bullet 350',
  'Yezdi Adventure',
  'Suzuki V-Storm 250 SX',
  'Dominar 250',
];

for (let i = 0; i < dreamBikes.length; i++) {
  // console.log(dreamBikes[i]);
}

// break and continue

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log('Detected number 5');
    break;
  }
  // console.log(`Value of i is ${i}`);
}

//

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    // console.log('Detected number 5');
    continue;
  }
  // console.log(`Value of i is ${i}`);
}

// While loop

let i = 0;
while (i <= 10) {
  // console.log(`Value of i : ${i}`);
  i = i + 2;
}

// do while loop

// let score = 1;
let score = 11;

do {
  // console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// ARRAYS and OBJECTS specific loops : for of loop and for in loop

// for..of loop :- it loops/iterates only over the iterable objects of js like strings, arrays, array like obj , Map, set, etc

const dreamCars = [
  'XUV 700',
  'Scorpio-N',
  'Tata Safari Dicor',
  'Tata Harrier',
  'Mitshubishi Pajero',
  'Tata Sierra',
];

for (const cars of dreamCars) {
  // console.log(cars);
}

const greetings = 'Hello World';

for (const greet of greetings) {
  // console.log(`Each char is ${greet}`);
}

// Maps Data Types

const map = new Map();

map.set('IN', 'India');
map.set('AUS', 'Australia');
map.set('Fr', 'France');
map.set('IN', 'India'); // this is not printed, bcoz map only returns unique values and dont repeat the exisitng values of key pairs

console.log(map);

for (const [key, value] of map) {
  // destrucuture of array
  // console.log(key, ':-', value);
}

const discordUser = {
  userName: 'Delvadiya Sanidhya',
  userId: 'F123456',
  isLoggedIn: true,
};

// for (const userDetails of discordUser) {
//   // console.log(userDetails);
// } //  it gives error bcoz obj is not iterable

// for..in loop :- The for...in statement iterates over all enumerable string properties of an object (ignoring properties keyed by symbols), including inherited enumerable properties.

for (const key in discordUser) {
  // console.log(`${key} :- ${discordUser[key]}`);
}

const myArr = [1, 2, 3, 4, 5, 6, 7];

for (const num in myArr) {
  // console.log(num); // it gives keys means the index values of the arrays
  // console.log(myArr[num]);
}

// for in loop on map data type

for (const key in map) {
  // console.log(key);
} // it is not iteratable

// What is enumerable properties and what does enumerable actually means?? :- Find it out
