// Strings in js

// String declaration as object

const gameName = new String('Sanidhya');
// console.log(gameName);
// console.log(gameName[5]);
// console.log(gameName[2]);

// console.log(gameName.__proto__); // syntax for prototypes not necessary

// length property

// console.log(gameName.length);

let myName = 'Sanidhya is a student';

// at method
// it support arrays and strings both

// console.log(myName.at(5)); // at mathod :- checks and return value on given index
// console.log(myName.at(9)); // gives undefined , bcoz no value exists at index 9
// console.log(myName.at(-5)); // on neg index it starts from the last char of string

// charAt method

// it is diff from at method bcoz it returns empty string when value not exists and doesnt support neg indexing
// it works on Strings only

// charCodeAt method
// it returns char code of given index and

// concat method

const first_name = 'Sanidhya';
const last_name = 'Delvadiya';

// const full_name = first_name.concat(' ', last_name);
const full_name = first_name.concat(', ', last_name);

// console.log(full_name);

// includes method

// it checks that the string or character present in the given string
// it returns bool value
// includes(searchString, endPosition(opt..))

// console.log(myName.includes('student'));
// console.log(myName.includes('student', 14));

// indexOf method
// It returns the index of the first occurrence of searchString found, or -1 if not found.
// indexOf(searchString, position(opt...))

// console.log(myName.indexOf('a'));
// console.log(myName.indexOf('a', 12));

// lastIndexOf method
// it works same as includeOf method but it starts from the ending of the string and gives the last index of the given char

// console.log(myName.lastIndexOf('a'));
// console.log(myName.lastIndexOf('a', 10));

// localCompare, search method
// read from mdn docs

// match, matchAll and normalize methods
// read from mdn docs

// padStart and padEnd methods

let str1 = ' Helllo!!!';

// console.log(str1.padEnd(20, '^'));
// console.log(str1.padStart(20, '^'));
// console.log(str1.padStart(20));
// console.log(str1.padEnd(20));

// repeat method

// console.log(str1.repeat(3));

// replace and replaceAll method

let string = "I think Ruth's dog is cuter than your dog!";
// console.log(string.replace('dog', 'horse'));
// console.log(string.replaceAll('dog', 'horse'));

// endsWith and startsWith method

// endsWith(searchString, endPosition(opt..))
// returns bool value

// console.log(myName.endsWith('student'));
// console.log(myName.endsWith('student', 21));

// console.log(myName.startsWith('is', 9));
// console.log(myName.startsWith('San'));

// slice method
// A new string containing the extracted section of the string.

// console.log(myName.slice(1, 5));
// console.log(myName.slice(-1, 9));
// console.log(myName.slice(6, -12));
// console.log(myName.slice(-3, -11));
// console.log(myName.slice(-7));
// console.log(myName.slice(3));

// split method
// returns a new array from string by seprating the string with given seperator
let str2 = 'Sanidhya Prakashbhai Delvadiya';
// console.log(str2.split(' '));
// console.log(str2.split(' ', 2)); // it limits the element created from string in an array

// substring method
// A new string containing the specified part of the given string.

// console.log(str2.substring(4, 29));

//  toLocaleUpperCase, toUpperCase and same for toLowerCase methods

const dreamBike = 'hEro xPulse 4V pRO';
// console.log(dreamBike.toUpperCase());
// console.log(dreamBike.toLowerCase());

// toString and valueOf method
//  read from mdn docs

// trim, trimEnd, trimStart methods

const dreamCar = '            Mitshubishi Pajero              ';
// console.log(dreamCar.trim());
// console.log(dreamCar.trimStart());
// console.log(dreamCar.trimEnd());

const password = '123abc';

password.prototype.haslowerCase = function () {
  console.log('Yes lower property exists');
};
