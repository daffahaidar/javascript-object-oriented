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

const eko = new Person("Daffa", "Haidar");

const budi = new Person("Nabil", "Zufar");

console.log(eko);
console.log(budi);

eko.sayBye();
eko.run();
