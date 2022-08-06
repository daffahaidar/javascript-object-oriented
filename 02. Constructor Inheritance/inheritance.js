// this is a parent class
function Employee(firstName) {
  // parent class attributes
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, My name is ${this.firstName}`);
  };
}

// this is a child class (inherits from Employee)
function Manager(firstName, lastName) {
  // child class attributes
  this.lastName = lastName;

  // we can use all the parent class attributes and methods using:
  Employee.call(this, firstName); // it calls all the parent class attributes and methods
}

const daffa = new Manager("Daffa", "Haidar");
console.info(daffa);
