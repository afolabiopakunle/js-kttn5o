// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

class User {
  constructor(firstname, lastname, email) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
  }

  login() {
    console.log(this.email, 'has logged in.')
  }

  logout() {
    console.log(this.email, 'has logged out.')
  }
}

const newUser = new User('Afolabi', 'Opakunle', 'opakunleafolabi@gmail.com');

console.log(newUser.login())
console.log(newUser.logout())