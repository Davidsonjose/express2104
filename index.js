const express = require("express");
const http = require("http");
const path = require("path");
const { data } = require("./test");
const expressLayout = require("express-ejs-layouts");

// console.log(http.STATUS_CODES);

//initialized app
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(expressLayout);
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

// let index1 = path.join(__dirname, "views/index.html");
// let index3 = path.join(__dirname, "views/about.html");
// let index2 = path.join(__dirname, "views/contact.html");
// let index4 = path.join(__dirname, "views/post.html");

app.get("/", (req, res) => {
  res.render("index", {
    title: "Home page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About-us",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact-us",
  });
});

app.get("/products", (req, res) => {
  res.render("post", {
    title: "Products",
  });
});

app.post("/products", (req, res) => {
  
});

app.get("/api/names", (req, res) => {
  res.status(201).json({
    success: "success",
    data,
  });
});

const PORT = process.env.PORT || 1100;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost${PORT}`);
});
