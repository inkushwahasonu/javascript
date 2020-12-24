const express = require("express");
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("welcome to home page.");
});

app.get("/about", (req, res) => {
  res.send([
    // convert in json formate
    {
      id: 1,
      name: "sonu",
    },
    {
      id: 1,
      name: "sonu",
    },
    {
      id: 1,
      name: "sonu",
    },
    {
      id: 1,
      name: "sonu",
    },
  ]);
});
app.get("/temp", (req, res) => {
  res.send("welcome to temprature page....");
});

app.listen(port, () => {
  console.log(`listening to the port number${port}`);
});
