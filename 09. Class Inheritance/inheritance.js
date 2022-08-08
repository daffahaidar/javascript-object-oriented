class Person {
  sayHello(name) {
    console.log(`Hello, I am ${name}`);
  }
}

class Student extends Person {
  sayHello(name) {
    console.log(`I am a student and my name is ${name}`);
  }
}

const student = new Student();
student.sayHello("Daffa"); // this will call the sayHello method of Student class (if Student class don't have the sayHello method, it will call the sayHello method of Person class)
