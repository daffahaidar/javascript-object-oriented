// to make acces modifier private, we use the symbol '#'
class Person {
  constructor() {
    this.#firstName;
    this.#lastName;
  }
  get fullName() {
    return `${this.#firstName} ${this.#lastName}`;
  }
  set fullName(value) {
    this.#result = value.split(" ");
    this.#firstName = this.#result[0];
    this.#lastName = this.#result[1];
  }
}
let person = new Person();

// if we want to access the property of person, we can use the getter method because the access modifier of the atributes is private
person.fullName = "Daffa Haidar"; // setter
console.log(person.fullName); // getter

console.log(person.firstName); // will error because the access modifier is private
