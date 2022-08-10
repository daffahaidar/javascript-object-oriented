class Employee {
  static sayHello() {
    console.log(`Hello my name is Daffa`);
  }
}

const sayHello = Employee.sayHello;
sayHello();
