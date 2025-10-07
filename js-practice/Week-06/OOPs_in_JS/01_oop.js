const user = {
  username: 'Sanidhya',
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    // return 'Got user details from DB';
    return `Username : ${this.username}`;
    // console.log(this);
  },
}; //object literal

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };
  return this;
} // constructor function

User.prototype.userDetails = function () {
  console.log(
    `Username : ${this.username}, \n LoginCount : ${this.loginCount}, \n isLoggedIn : ${this.isLoggedIn}`
  );
};

const user1 = new User('Sanidhya', '02', true);
const user2 = new User('Vishwas', '04', false);

user1.userDetails();
// console.log(user1.contructor);
// console.log(user2);
