const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home || Welcome",
  });
});

router.get("/about", (req, res) => {
  res.render("about", {
    title: "About us",
  });
});
router.get("/products", (req, res) => {
  res.render("product", {
    title: "Products",
  });
});

router.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});

router.post("/products", (req, res) => {
  res.send(req.body);
});

module.exports = router;
