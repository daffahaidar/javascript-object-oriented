class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  #sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  callMethod() {
    this.#sayHello();
  }
}

const person = new Person("Daffa", 20);
person.callMethod(); // it's call the getter method of the private method

// if you access the private method directly, it will throw an error
person.#sayHello(); // will throw an error because it's private method
