function setUserName(name) {
  // complex DB calls
  this.name = name;
  console.log('called');
}

function createUser(username, email, password) {
  setUserName.call(this, username);

  this.email = email;
  this.password = password;
}

const myDetails = new createUser('Sanu', 'S@gmail.com', '1233');
console.log(myDetails);
