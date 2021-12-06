// const path = require("path");
// const fs = require("fs");
// const { resolve } = require("path/posix");
// const { rejects } = require("assert");

// let fileOne = path.join(__dirname, 'fileThree');

// fs.writeFile(fileOne, 'I am davidson', (err)=>{
//    if (err) throw err;
//    console.log(  );
// });

// fs.rmdir('fileThree', (err)=>{
//    if (err) {
//       throw err;
//    }
//    console.log('a folder has been deleted');
// })
// let projectFolder = 'project';
// fs.mkdir(projectFolder, (err) => {
//   if (err) throw err;
//   let var1 = path.join(__dirname,  `${projectFolder}/index.txt`);
//   fs.writeFile(var1, "Js is awesome", (err) => {
//     if (err) throw err;

//     console.log("task carried out successfully");
//   });

// });

// let var1 = path.join(__dirname,  'something/server');
// fs.mkdir(var1, (err) => {
//   if (err) throw err;

//   fs.writeFile(var1 + '/index.html', "Js is awesome", (err) => {
//     if (err) throw err;

//     console.log("task carried out successfully");
//   });

// });

// let dataOne = path.join(__dirname, 'project/index.txt');
// fs.writeFile(dataOne, 'Whatsapp bbabay', (err)=>{
//    if (err) return err;
//    console.log('A new file has been created and written to');
// });

// const util = require('util');

// const recordVideoOne = new Promise((resolve, reject)=>{
//    resolve('Video one recorder')
// });
// const recordVideoTwo = new Promise((resolve, reject)=>{
//    resolve('Video two recorder')
// });
// const recordVideoThree = new Promise((resolve, reject)=>{
//    resolve('Video three recorder')
// });

// Promise.all([
//    recordVideoOne,
//    recordVideoTwo,
//    recordVideoThree
// ]).then((message)=>{
//    // console.log(message);
//    message.map((name)=>{
//       console.log(name);
//    })
// })

// let dataOn = path.join(__dirname, 'project/inde.txt');
// fs.writeFile(dataOn, 'whatsuppppp', (err) =>{
//    if (err) return err;
//    console.log('A new file has been created and overwritten to');
// });

// console.log('e make sense');

// var read = util.promisify(fs.readFile);
// let data = 'utf-8';

// Promise .all([
//    read('data1.txt', data),
//    read('data2.txt', data),
//    read('data3.txt', data)
// ]).then(data=>{
//    console.log(data);
//    // const [data1, data2, data3] = data;
//    // console.log(data1.toString);
//    // console.log(data2.toString);
//    // console.log(data3.toString);
// });

// name();

// setTimeout(() => {
//    console.log('lets see things');
// }, 3000);

// console.log('the end');

// function loginUser(email, password, callback) {
//    setTimeout(() => {
//       callback({
//          userEmail: email,
//       })
//    }, 4000)
// }
// function videoDetails(video, callback) {
//    setTimeout(() => {
//       callback({title: 'We just dey look'})
//    }, 2000);
// }

// function getVideos(email, callback) {
//    setTimeout(() => {
//       callback(["Video1", "video2", "video3"]);
//    },  1000);
// }

// const user = loginUser('davidsonj@gmail.com', '12345', (user)=>{
//    console.log(user);
//    getVideos(user.userEmail, (videos)=>{
//       console.log(videos);
//       videoDetails(videos[0], (title)=>{
//          console.log(title);
//       })
//    })
// });

// console.log('The End');

const path = require("path");
const fs = require("fs");


// // let dataOne = fs.writeFileSync(fileOne, "i am a programmer");


// console.log('The start');

// let fileOne = path.join(__dirname, "something/filetwo.txt");
// let dataOne = fs.readFileSync(fileOne, 'utf-8');
// // setTimeout(() => {
//    console.log(dataOne);
// // }, 2000);

// console.log('The end');
