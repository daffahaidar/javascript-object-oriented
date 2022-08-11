// we can use Error object to create our own error

class Math {
  static add(...numbers) {
    this.total = 0;

    if (numbers.length === 0) {
      throw new Error("No number is provided"); // throw error if no number is provided and code will stop
    }

    for (let number of numbers) {
      this.total += number;
    }
    return this.total;
  }
}

try {
  console.log(Math.add()); // if error will throw error and code will stop then redirect to catch block
} catch (error) {
  console.log(error);
} finally {
  console.log("Finally block"); // this code will be executed each time even if there is an error or not
}
//   this code will run because we have catch block in try block
console.log(Math.add(1, 2, 3, 4, 5));
