const mongoose = require("mongoose");

//connection creation 
mongoose.connect("mongodb://localhost:27017/sonudata", { useUnifiedTopology: true, useNewUrlParser: true  } )
.then(() => console.log("connection successfull"))
.catch((err) => console.log(err));