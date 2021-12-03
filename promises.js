const fs = require("fs");
const util = require("util");

const promise = new Promise((resolve, reject) => {
  resolve("bad");
})
  .then((message) => console.log(message))
  .catch((err) => console.log(err));


//reading a file using the callback method

// fs.readFile('data2.txt', 'utf-8', (err, data)=>{
//     if (err) {
//         throw err;
//     }else{
//         console.log(data);
//     }
// })




// // reading a single file using the promise method
// let read = util.promisify(fs.readFile);

// read("data1.txt", 'utf-8').
// then((data) => console.log(data));

// //reading different code using callback
fs.readFile('data1.txt', 'utf-8', (err1, data1)=>{
    fs.readFile('data3.txt', 'utf-8', (err2, data2)=>{
        fs.readFile('data2.txt', 'utf-8', (err3, data3)=>{
            fs.readFile('data4.txt', 'utf-8', (err4, data4)=>{
                if (err1) throw err1;
                if (err2) throw err2;
                if (err3) throw err3;
                if(err4) throw err4
                console.log(data1);
                console.log(data2);
                console.log(data3);
                console.log(data4);
            });
        });
    });
});

// let read = util.promisify(fs.readFile);

// Promise.all([
//     read('data1.txt', 'utf-8'),
//     read('data2.txt', 'utf-8'),
//     read('data3.txt', 'utf-8'),
//     read('data4.txt','utf-8')
// ]).then((err)=>console.log(err))

























