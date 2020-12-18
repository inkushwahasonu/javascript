const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("HOME page...");
  } else if (req.url == "/about") {
    res.end("ABOUT us...");
  } else if (req.url == "/contact") {
    res.end("CONTACT us....");

  } else if (req.url == "/userApi") {               // access api data
    fs.readFile(`${__dirname}/api.json`, "UTF-8", (err, data) => {
      console.log(data);
      // res.end(data);
      const objData = JSON.parse(data);
      res.end(objData[0].name);
    });
    // res.end("user API....");
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 : ERROR <br> page does not exist....</h1>");
  }
});

server.listen(7000, "127.0.0.1", () => {
  console.log("listning to the port number 7000");
});
