const express = require("express"); // exprexx module
const app = express();

// routing for home page
app.get("/", (req, res) => {
  res.send("Hello world from inkushwahasonu in express JS....");
});

// routing for about page
app.get("/login", (req, res) => {
  res.send("Hello from the login page ......");
});
app.get("/about", (req, res) => {
  res.status(200).write("<h1>welcome to about page...</h1>");
});
app.get("/contact", (req, res) => {
  res.status(200).send("welcome to contact page.");
});

app.listen(8000, () => {
  console.log("listing the port at 8000..");
});
