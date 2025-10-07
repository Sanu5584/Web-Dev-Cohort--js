class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `1234`;
  }
}

const hitesh = new User('hitesh');
// console.log(hitesh.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const user1 = new Teacher('Visu', 'abc@gmail.com');
user1.logMe();
console.log(user1.createId());
