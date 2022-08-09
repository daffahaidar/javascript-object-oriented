// by default in javascript, the access modifier is public

class Person {
  firstName;
  lastName;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const person = new Person("Daffa", "Haidar");
console.log(person.firstName); // can access the property of person because the access modifier is public
console.log(person.lastName); // can access the property of person because the access modifier is public
