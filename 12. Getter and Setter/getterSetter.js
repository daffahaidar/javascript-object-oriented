class Person {
  constructor() {
    this.firstName;
    this.lastName;
  }
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(value) {
    this.result = value.split(" ");
    this.firstName = this.result[0];
    this.lastName = this.result[1];
  }
}

let person = new Person();
person.fullName = "Daffa Haidar"; // setter
console.log(person.fullName); // getter
