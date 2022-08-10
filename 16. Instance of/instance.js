// instance of is used to check if an object is an instance of a class.

class Employee {}

class Manager {}

class Developer extends Employee {}

let daffa = new Employee();
let Haidar = new Manager();

console.log(daffa instanceof Employee); // true because daffa is an instance of Employee
console.log(daffa instanceof Manager); // false because daffa is not an instance of Manager
console.log(Haidar instanceof Manager); // true because Haidar is an instance of Manager
console.log(Haidar instanceof Employee); // false because Haidar is not an instance of Employee

// instance of can be used to inherit classes.
let nabil = new Developer();
console.log(nabil instanceof Employee); // true because nabil is an instance of Employee
