const express = require("express");
const app = express();

app.get("/greeting", (req, res) => {
  res.send("<h1>Hello, stranger</h1>");
});

app.get("/:name", (req, res) => {
  res.send(`greeting ${req.params.name}`);
});

app.listen(3001, () => {
  console.log("Nice!");
});
