let firstname = "Davidson",
  lastname = "Habeeb",
  age = 20;

console.log(`my name is ${firstname} ${lastname} and i am ${age} years old`);

let data = [
    { name: "Davidson" },
    { name: "Daniel" },
    { name: "Slyvia" }
];

function areaTriangle(base, height) {
  return {
    area: 0.5 * base * height,
  };
}

/**
 *
 * @param {Number} yearOfBirth calculating year of birth of a person
 * @returns
 */

function getAge(yearOfBirth) {
  let currentYear = new Date().getFullYear();

  return {
    value: currentYear - yearOfBirth,
  };
}


function areaOfTriangle(base, height) {
  return {
    value: (1 / 2) * base * height,
  };
}
module.exports = {
  areaTriangle,
  areaOfTriangle: areaOfTriangle,
  data,
  getAge,
};




