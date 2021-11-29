const { data, getAge } = require("./index");



// using map to loop through an array of object
data.map((el, id) => {
  console.log({...el, id});
});

// using for loop .. to loop through an array of object
for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element);
}


//using for each method to loop through an array of object
// data.forEach(element => {
//     console.log(element);
// });



let age = getAge(2000);
console.log(age);
