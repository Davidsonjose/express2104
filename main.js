const path = require("path");
const fs = require("fs"); //file system

//path
let dataOne = path.join(__dirname, "files/one.txt");
let dataTwo = path.join(__dirname, "files/two.txt");

//read files
let fileOne = fs.readFileSync(dataOne, "utf-8");
// console.log(fileOne);
let fileTwo = fs.readFileSync(dataTwo, "utf-8");
// console.log(fileTwo);





// readFileSync for reading files
//path.join(__dirname, )


let fileThree = fs.writeFileSync(path.join(__dirname, 'files/one.txt'), `i am still a programmer 😊😊😊😊`);


let dataFour = fs.readFileSync(path.join(__dirname, 'files/one.txt'), 'utf-8');
console.log(dataFour);






