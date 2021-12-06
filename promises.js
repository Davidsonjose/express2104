const fs = require("fs");
const util = require("util");
const path = require("path");

// const promise = new Promise((resolve, reject) => {
//   resolve("Good");
//   reject('Bad error')
// })
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

//reading a file usin*g the callback method

// fs.readFile('data2.txt', 'utf-8', (err, data)=>{
//     if (err) {
//         throw err;
//     }else{
//         console.log(data);
//     }
// })

// reading a single file using the promise method

// reading through a file using the promise method
// let readTwo = util.promisify(fs.readFile);
// let dataOne = path.join(__dirname, 'money/file.txt')

// readTwo(dataOne, 'utf-8')
// .then((data)=>{console.log(data)});

// let readThree = util.promisify(fs.writeFile);
// let dataTwo = path.join(__dirname, "money/anyname.txt");

// readThree(dataTwo, "I am davidson jose").then((datsdasfaudad) => {
//   console.log(datsdasfaudad);
// });

let folderOne = util.promisify(fs.mkdir);
let folderTwo = util.promisify(fs.writeFile);
let fileThree = util.promisify(fs.readFile);
let folder1 = path.join(__dirname, 'Folders/one.txt');
folderOne("Folders")
folderTwo(folder1, 'I love you')
fileThree(folder1,'utf-8' )


.catch((err) => {
  console.log(err);
});






// //reading different code using callback
// fs.readFile('data1.txt', 'utf-8', (err1, data1)=>{
//     fs.readFile('data3.txt', 'utf-8', (err2, data2)=>{
//         fs.readFile('data2.txt', 'utf-8', (err3, data3)=>{
//             fs.readFile('data4.txt', 'utf-8', (err4, data4)=>{
//                 if (err1) throw err1;
//                 if (err2) throw err2;
//                 if (err3) throw err3;
//                 if(err4) throw err4
//                 console.log(data1);
//                 console.log(data2);
//                 console.log(data3);
//                 console.log(data4);
//             });
//         });
//     });
// });

// let read = util.promisify(fs.readFile);

// Promise.all([
//     read('data1.txt', 'utf-8'),
//     read('data2.txt', 'utf-8'),
//     read('data3.txt', 'utf-8'),
//     read('data4.txt','utf-8')
// ]).then((err)=>console.log(err))
