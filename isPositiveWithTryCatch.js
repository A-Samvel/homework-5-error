function isPositive(number) {
  let res = "NO";
  try {
    if (typeof number !== "number" || Number.isNaN(number))
      throw new Error("Invalid Input");

    if (number > 0) res = "YES";
    else if (number === 0) throw new Error("Zero Error");
    else if (number < 0) throw new Error("Negative Error");
  } catch ({ message }) {
    console.log(message);
  } finally {
    return res;
  }
}

console.log(isPositive(5));
console.log(isPositive(-5));
console.log(isPositive(0));
console.log(isPositive("5"));
console.log(isPositive(NaN));
