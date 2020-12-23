const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world from inkushwahasonu in express JS....");
});

app.listen(8000, () => {
  console.log("listing the port at 8000..");
});
