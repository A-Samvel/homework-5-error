function getPow(num) {
  return Math.pow(num, num);
}

let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(arr = [], num = 5) {
  const res = [];
  try {
    for (const person of arr) {
      if (!person.hasOwnProperty("runLab")) throw new Error("Error thrown");
      const { student, runLab } = person;
      if (runLab(num) === getPow(num)) res.push({ student, result: "passed" });
      else res.push({ student, result: "failed" });
    }
  } catch ({ message }) {
    console.log(message);
  } finally {
    return res;
  }
}

console.log(gradeLabs(studentLabs2));
