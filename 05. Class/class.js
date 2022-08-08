// in javascript ES6 class is a syntactic sugar for prototype based inheritance
class Person {
  sayName() {
    console.log(`Hello my name is ${this.name}`);
  }
}

const person1 = new Person();
person1.name = "Daffa";
person1.sayName();
