const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send(
//     "99 Bottles of beer on the wall",
//     <a href="link">take one down, pass it around</a>
//   );
// });

app.listen(3004, () => {
  console.log("My Boy!!!");
});
