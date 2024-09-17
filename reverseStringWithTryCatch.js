function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch ({ message }) {
    console.log(message);
  } finally {
    return s;
  }
}

console.log(reverseString("hello"));
console.log(reverseString(54));