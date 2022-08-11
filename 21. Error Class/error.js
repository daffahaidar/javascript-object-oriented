class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total parameter must contain a number",
        "numbers"
      );
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.info(MathUtil.sum());
  console.info("Daffa");
} catch (error) {
  if (error instanceof ValidationError) {
    console.info(
      `Error in the field ${error.field} with error message ${error.message}`
    );
  } else {
    console.info(`Error : ${error.message}`);
  }
} finally {
  console.info("Program Ended");
}

console.info("Haidar");
