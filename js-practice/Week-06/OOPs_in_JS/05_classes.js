class User {
  constructor(name, email, password) {
    (this.name = name), (this.email = email), (this.password = password);
  }

  encryptPassword() {
    return `${this.password}abc`;
  } // it is called method

  uppercaseUsername() {
    return `${this.name.toUpperCase()}`;
  }
}

const user1 = new User('sanu', 'sanu@gmail.com', '123');

console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.uppercaseUsername());

// BTS of these code

function discordUser(username, email, password) {
  (this.username = username), (this.email = email), (this.password = password);
}

discordUser.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};
discordUser.prototype.uppercaseUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const discordUser1 = new discordUser('Visu', 'v@gmail.com', 'xyz123');
console.log(discordUser1);
console.log(discordUser1.uppercaseUsername());
console.log(discordUser1.encryptPassword());
