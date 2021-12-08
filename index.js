const express = require("express");
const http = require("http");
const path = require("path");
const {data} = require("./test");

//initialized app
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

let index1 = path.join(__dirname, "views/index.html");
let index3 = path.join(__dirname, "views/about.html");
let index2 = path.join(__dirname, "views/contact.html");
let index4 = path.join(__dirname, "views/post.html");

app.get("/", (req, res) => {
  res.sendFile(index1);
});

app.get("/about", (req, res) => {
  res.sendFile(index3);
});

app.get("/contact", (req, res) => {
  res.sendFile(index2);
});

app.get("/products", (req, res)=>{
   res.sendFile(index4)
})

app.get("/api/names", (req, res) =>{
   res.status(201).json({
      success: 'success',
      data,
   })
})



const PORT = process.env.PORT || 1100;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost${PORT}`);
});
