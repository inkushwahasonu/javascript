 const path = require("path");
const express = require("express");
const app = express();
const port = 8000;
const templatesPath = path.join(__dirname, "../templates")
// const staticPath = path.join(__dirname, "../public");
// app.use(express.static(staticPath));

// to set the view engine
app.set("view engine", "hbs");
app.set("views",templatesPath);

// template engine route
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/", (req, res) => {
  res.send("hello for the express server...");
});

app.listen(port, () => {
  console.log(`listening for port no - ${port}`);
});
