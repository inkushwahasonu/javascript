const http = require("http");
const fs = require("fs");
var requests = require("request");

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceVal = (tempVal, orgVal) => {
  let tempreture = tempVal.replace("{%tempval%}", orgVal.main.temp);
  tempreture = tempreture.replace("{%tempmin%}", orgVal.main.temp_min);
  tempreture = tempreture.replace("{%tempmax%}", orgVal.main.temp_max);
  tempreture = tempreture.replace("{%location%}", orgVal.main.name);
  tempreture = tempreture.replace("{%country%}", orgVal.sys.country);
  return tempreture;
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    requests(
      "http://api.openweathermap.org/data/2.5/weather?q=ranchi&appid=a702e73e7280965d417fbbc9263ebc72"
    )
      .on("data", (chunk) => {
        const objdata = JSON.parse(chunk);
        const arrData = [objdata];
        //  console.log(arrData[0].main.temp);
        const realTimeData = arrData
          .map((val) => replaceVal(homeFile, val))
          .join("");
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
