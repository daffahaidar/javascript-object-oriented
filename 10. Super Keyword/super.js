class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayName() {
    console.log(this.name);
  }
}

class Student extends Person {
  constructor(name, age, school) {
    // if the parent class have a constructor, it must be called first
    super(name, age); // super is used to call the constructor of the parent class
    // note:
    // if the parent class don't have a constructor, but the child class have a constructor, it must be called super
    this.school = school;
  }
  saySchool() {
    console.log(this.school);
  }
}

const student1 = new Student("Daffa", 20, "Universitas Bina Nusantara");
console.log(student1);
