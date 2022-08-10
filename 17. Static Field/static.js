// static field is a variable that is declared outside of any function and is accessible throughout the program.

// without static field
class Person{
    name = "Daffa";
    age = 20;
}

const daffa = new Person();
console.log(daffa.name);
console.log(daffa.age);

class Employee extends Person{
    super();
    static department = "IT";
    static salary = "Rp. 7.000.000";
}

const daffaEmployee = new Employee(); // to call static field, we don't need create object from class
console.log(daffaEmployee.department); // can't access static field outside of class

// to access static field inside of class, we just call the class name and then the static field name
console.log(Employee.department);
console.log(Employee.salary);