const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req.url);

  const data = fs.readFileSync(`${__dirname}/api.json`, "UTF-8");
  const objData = JSON.parse(data);

  if (req.url == "/") {
    res.end("HOME page...");
  } else if (req.url == "/about") {
    res.end("ABOUT us...");
  } else if (req.url == "/contact") {
    res.end("CONTACT us....");
  } else if (req.url == "/userApi") {
    // access api data
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(objData[0].name);
  } else {
    res.writeHead(404, { "Content-type": "text/html" });
    res.end("<h1> 404 : ERROR <br> page does not exist....</h1>");
  }
});

server.listen(7000, "127.0.0.1", () => {
  console.log("listning to the port number 7000");
});
