// http://localhost:8000/about?name=pune      link to run it....

const path = require("path");
const express = require("express");
const app = express();
const hbs = require("hbs");
const requests = require("requests");
const port =process.env.PORT || 8000;

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
  requests(
    `http://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=a702e73e7280965d417fbbc9263ebc72`
    
  )
    .on("data", (chunk) => {
      const objdata = JSON.parse(chunk);
      const arrData = [objdata];
      console.log(`city name is ${arrData[0].name} and temp is ${arrData[0].main.temp}`);
      
      res.write(`${arrData[0].name} : ${arrData[0].main.temp} deg `);
    })
    .on("end", (err) => {
      if (err) return console.log("connection closed due to errors", err);
      res.end();
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
