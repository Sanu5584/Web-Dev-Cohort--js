//? Objects

const discordUser = {
  username: 'Sanu',
  'full name': 'Delvadiya Sanidhya',
  id: 123456,
  userAge: 20,
  isLoggedIn: true,
  userAddress: {
    city: 'Ahmedabad',
    societyName: 'Kush Appt.',
    houseNo: 'C-203',
  },
  hobbies: ['Cricket', 'Travelling', 'Driving'],
};

// console.log(discordUser['full name']);

// delete operator

// delete discordUser.userAddress;

// console.log(discordUser.userAddress.houseNo); // it throws error

// Assign method

let user1 = {
  name: 'sanu',
  age: 20,
  fullName: {
    first_name: 'Sanidhya',
    last_name: 'Delvadiya',
  },
};
let user2 = {
  name: 'visu',
  age: 19,
  fullName: {
    first_name: 'Vishwas',
    last_name: 'Delvadiya',
    subcaste: {
      caste: 'Patel',
    },
  },
};

console.log(Object.assign({}, { ...user1 }, { ...user2 })); // Object.assign(target, source)

const users = { ...user1, ...user2 };
console.log(users);

// Why does it return only two key-value pairs instead of four?
// Both Object.assign() and the spread operator work by copying properties from source objects to the target object.
// If keys are duplicated, the last object (user2) overwrites the earlier ones (user1).
// Since both objects have name and age as keys, the second object (user2) overwrites the first one (user1).

/*

*/

// entries method

// Object.entries() is a method that returns an array of key-value pairs from an object. Each entry is represented as an array [key, value].

// console.log(Object.entries(discordUser));

// fromEntries method

// it converts the array into objects
const entryArr = [
  ['name', 'Sanidhya'],
  ['age', 20],
];

// console.log(Object.fromEntries(entryArr));

// freeze methods and isFrozen methods

// The Object.freeze() static method freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned. freeze() returns the same object that was passed in.

const sensitiveData = {
  AccNumber: '123abc',
  password: 12345678,
  Address: {
    streetName: 'Anand Nagar RD',
    houseNum: 'C-203',
  }, // Object.freeze() is shallow, meaning it only freezes the top-level properties
};

Object.freeze(sensitiveData);
sensitiveData.AccNumber = '231cba';
sensitiveData.Address.houseNum = 'D-204'; // it modifies the value
console.log(sensitiveData.Address.houseNum);
// console.log(sensitiveData);
console.log(Object.isFrozen(sensitiveData)); // The Object.isFrozen() static method determines if an object is frozen.

// is method

// The Object.is() static method determines whether two values are the same value.

// console.log(Object.is(NaN, NaN));
// console.log(Object.is(1, '1'));

// isExtensible method

// The Object.isExtensible() static method determines if an object is extensible (whether it can have new properties added to it).

/* ???????????????????????       AND       ????????????????????????? */

// preventExtensions method

// The Object.preventExtensions() static method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It also prevents the object's prototype from being re-assigned.

// it Only prevent new properties but allow modifications/deletions

// example

// console.log(Object.isExtensible(discordUser));
// Object.preventExtensions(discordUser);
// console.log(Object.isExtensible(discordUser));

/*


*/

// Seal and isSealed methods

const privateData = {
  BankName: 'BOB',
  city: 'Ahmedabad',
  dataStored: {
    password: 'Different passwords of banks,etc',
    secretTrxn: 'money secret passCode',
    docs: 'personal docs like aadhar card,etc',
  },
};

Object.seal(privateData); // The Object.seal() static method seals an object. Sealing an object prevents extensions and makes existing properties non-configurable. A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned. Values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.

Object.isSealed(privateData); //The Object.isSealed() static method determines if an object is sealed.

// key and values method

// console.log(Object.keys(discordUser));

// console.log(Object.values(discordUser));
