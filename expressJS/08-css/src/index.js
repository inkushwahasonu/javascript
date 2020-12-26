const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const port = 8000;

const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// to set the view engine
app.set("view engine", "hbs");
app.set("views", templatesPath);
hbs.registerPartials(partialsPath);


app.use(express.static(staticPath));

// template engine route
app.get("/", (req, res) => {
  res.render("index", {
    channelName: "home inkushwahasonu",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    channelName: "about inkushwahasonu",
  });
});


// for error page 404


app.get("/about/*",(req, res) => {
  res.render("404",{
    errorcoment : "Oopps, this about page could't be found",
  });
});

app.get("*",(req, res) => {
  res.render("404",{
    errorcoment : "Oopps page could't be found",
  });
});



app.listen(port, () => {
  console.log(`listening for port no - ${port}`);
});
