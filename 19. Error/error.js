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

console.log(Math.add()); // throw error if no number is provided and code will stop

console.log(Math.add(1, 2, 3, 4, 5));
