function isPositive(number) {
  try {
    if (typeof number !== "number" || Number.isNaN(number))
      throw new Error("Invalid Input");

    if (number > 0) return "YES";
    else if (number === 0) throw new Error("Zero Error");
    else if (number < 0) throw new Error("Negative Error");
  } catch ({ message }) {
    return message;
  }
}

console.log(isPositive(5));
console.log(isPositive(-5));
console.log(isPositive(0));
console.log(isPositive("5"));
console.log(isPositive(NaN));