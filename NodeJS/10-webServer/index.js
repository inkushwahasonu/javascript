


const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from inkushwahasonu");
});

server.listen(7000,"127.0.0.1",() => {
  console.log("listening to the port no 7000");
});