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

app.get("/magic/:question/", (req, res) => {
  let questions = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
  ];
  questions = questions[Math.floor(Math.random() * questions.length)];
  // randomAnswer = req.params.question;
  res.send(`Will I Be A Millionaire? ${questions}`);
});

//add show route
//   app.get('/answers/:randomAnswer')

//   res.send(millionaire);
// });

// app.listen(3001, () => {
//   console.log("Nice!");
// });

app.listen(3002, () => {
  console.log("Get it!!!");
});
