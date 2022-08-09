class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
class Programmer extends Person {
  constructor(name) {
    super();
    this.age = age;
  }

  sayHello() {
    super.sayHello(); // to call the parent sayHello method
    console.log(`I'm a programmer`);
  }
}
