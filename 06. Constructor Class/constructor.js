// in the class we can use the constructor like a function

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const person1 = new Person("Daffa", 20);
console.log(person1);

const person2 = new Person("Haidar", 21);
console.log(person2);
