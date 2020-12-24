const path = require("path");
const express = require("express");
const app = express();
const port = 8000;

// console.log(path.join(__dirname, "../public"));
const staticPath = path.join(__dirname, "../public");
// builtin middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`listening for port no - ${port}`);
});
