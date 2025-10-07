class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const T1 = new Teacher('John Doe', 'john@gmail.com', '1234');

T1.addCourse();

const user = new User('Sanu');
user.logMe();

console.log(T1 instanceof User);
