const fs = require("fs");
const http = require("http");

const server = http.createServer();
server.on("request",(req,res) => {
  // fs.readFile("input.txt","UTF-8",(err,data) => {
  //   if (err)return console.error(err);
  //   res.end(data.toString());
  // });
// ----------------------------------------------

// second way
// Reading from a stream
// create a readable stream
// handle stream events :- data, end and error
  const rstream = fs.createReadStream("input.txt");
  rstream.on("data",(chunkdata) => {
    res.write(chunkdata);
  });
  rstream.on("end",() => {
    res.end();
  });
  rstream.on("error",(err) =>{
    console.log(err);
    res.end("page not found....");
  });
}); 

server.listen(7000, "127.0.0.1")