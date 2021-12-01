const path = require("path");
const fs = require("fs");

let fileOne = path.join(__dirname, 'fileThree');

fs.writeFile(fileOne, 'I am davidson', (err)=>{
   if (err) throw err;
   console.log(  );
});

fs.rmdir('fileThree', (err)=>{
   if (err) {
      throw err;
   }
   console.log('a folder has been deleted');
})
let projectFolder = 'project';
fs.mkdir(projectFolder, (err) => {
  if (err) throw err;
  let var1 = path.join(__dirname,  `${projectFolder}/index.txt`);
  fs.writeFile(var1, "Js is awesome", (err) => {
    if (err) throw err;

    console.log("task carried out successfully");
  });

});



let var1 = path.join(__dirname,  'something/project');
fs.mkdir(var1, (err) => {
  if (err) throw err;
  
  fs.writeFile(var1 + 'filetwo.txt', "Js is awesome", (err) => {
    if (err) throw err;

    console.log("task carried out successfully");
  });

});




