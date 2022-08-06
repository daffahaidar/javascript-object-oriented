// This is parrent class
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`);
  };
}

// to assign new properties to the prototype we can use the following syntax:
Person.prototype.sayBye = function () {
  console.info("Good Bye");
};

Person.prototype.run = function () {
  console.info(`${this.firstName} is running`);
};

const person1 = new Person("Daffa", "Haidar");

const person2 = new Person("Nabil", "Zufar");

console.log(person1);
console.log(person2);

person1.sayBye();
person1.run();
