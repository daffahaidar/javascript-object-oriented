function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

// Manager.prototype = Employee.prototype; // wrong way to do it
Manager.prototype = Object.create(Employee.prototype); // the inheritance should be done like this

Manager.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Manager ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.info(`Hello ${name}, my name is Employee ${this.name}`);
};

const employee = new Employee("Daffa");
employee.sayHello("Haidar");

const manager = new Manager("Nabil");
manager.sayHello("Haidar");

console.info(employee);
console.info(manager);
