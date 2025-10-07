let bikes = [
  'Hero Xpulse 200 4v',
  'RE Bullet 350',
  'Bajaj Dominar 250',
  'Suzuki V-Storm SX 250',
  'Yezdi Adventure 250',
];

let bikeTypes = {
  'Hero Xpulse 200 4v': 'Off-Road',
  'RE Bullet 350': 'Classic Looking',
  'Bajaj Dominar 250': 'Sporty Touring',
  'Suzuki V-Storm SX 250': 'Adventure',
  'Yezdi Adventure 250': 'Adventure and off roading',

  getXpulseType: function () {
    console.log(
      `Type of Hero Xpulse 200 4v bike is ${this['Hero Xpulse 200 4v']}`
    );
  },
};

Object.prototype.sanidhya = function () {
  console.log(`Sanidhya is present in all objects`);
};

// bikes.sanidhya()
// bikeTypes.sanidhya()

// console.log(bikeTypes)
console.log(bikeTypes);

/**             Inheritance           */

const User = {
  name: 'chai',
  email: 'chai@google.com',
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: 'JS assignment',
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

// make a property of TrueLength for trimmed length of the string

let anotherUsername = 'Sanidhya      ';

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True Length is : ${this.trim().length}`);
};

anotherUsername.trueLength();
'hitesh    '.trueLength();
'Patel    '.trueLength();
