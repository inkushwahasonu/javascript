


const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if(req.url == "/"){
    res.end("Hello in HOME inkushwahasonu");
  }else if(req.url == "/about"){
    res.end("Hello in ABOUTUS of inkushwahasonu");
  }else if(req.url == "/contact"){
    res.end("CONTECT US...");
  }else {
    res.writeHead(404,{"Content-type" : "text/html"});   
    res.end("<h1>404 : error , page does not exist...</h1>");
  }
 
});

server.listen(7000,"127.0.0.1",() => {
  console.log("listening to the port no 7000");
});