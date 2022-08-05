// to create a constructor function we use the keyword function with the first letter capitalized
{
  function Person() {
    // in other programming languages we use the keyword class

    // properties
    this.name = "";
    this.age = "";

    // we also can add methods to the constructor function
    this.sayName = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
  }

  // we can create a new instance of the constructor function by using the new keyword
  let daffa = new Person(); // daffa is an instance of the Person constructor function
  daffa.name = "Daffa";
  daffa.age = "21";
  console.log(daffa);
  daffa.sayName(); // we can call the method of the instance of the constructor function

  let haidar = new Person(); // haidar is an instance of the Person constructor function
  haidar.name = "Haidar";
  haidar.age = "21";
  console.log(haidar);
}

{
  // we can also create a constructor function with a parameter and default value
  function Person(name = "Unknown", age) {
    this.name = name;
    this.age = age;

    this.sayName = function () {
      console.log(`Hello, my name is ${this.name}`);
    };
  }

  let daffa = new Person("Daffa", "21");
  console.log(daffa); // will print { name: "Daffa", age: "21" }
  daffa.sayName(); // will print "Hello, my name is Daffa"

  let haidar = new Person(null, "21");
  console.log(haidar); // will print { name: "Unknown", age: "21" }
  haidar.sayName(); // will print "Hello, my name is Unknown"
}
