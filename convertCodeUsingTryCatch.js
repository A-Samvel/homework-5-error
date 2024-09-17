/*function reverseString(s) {
  typeof s !== "string"
    ? console.log("s.split is not a function")
    : (s = s.split("").reverse().join(""));
  console.log(s);
}*/

function reverseString(s) {
  try {
    s = s.split("").reverse().join("");
  } catch ({ message }) {
    console.log(message);
  }finally{
    return s
  }
}

console.log(reverseString('hello'))
console.log(reverseString(5))