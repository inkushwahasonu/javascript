const path = require("path");
const express = require("express");
const app  = express();
const staticPath = path.join(__dirname, "../public")
 //builtin middelware
 app.use(express.static(staticPath));

app.get("/", (req,res) =>{
  res.send("hello world from the thapa");
});


app.listen(8000, ()=>{
  console.log("access the port 8000....");
});