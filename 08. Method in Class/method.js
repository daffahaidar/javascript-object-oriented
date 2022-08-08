class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;

    // the Methods written inside the constructor will be automaticaly included in instance of the class
    // this.sayName = function() {
    //     console.log(`Hello my name is ${this.name}`);
    // }
  }

  // the Methods written outside the constructor will be automaticaly included in the prototype
  sayName() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const person1 = new Person("Daffa", 20);
person1.sayName();
