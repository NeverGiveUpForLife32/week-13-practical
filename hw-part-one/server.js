const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  res.send("<h1>Hello, stranger</h1>");
});

app.get("/:name", (req, res) => {
  res.send(`greeting ${req.params.name}`);
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
  const total = parseInt(req.params.total);
  const tipPercentage = parseInt(req.params.tipPercentage) / 100;
  res.send(`${total * tipPercentage}`);
});

app.listen(3001, () => {
  console.log("Nice!");
});
