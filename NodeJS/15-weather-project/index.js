const fs = require("fs");
const http = require("http");

let requests = require("requests");

const homeFile = fs.readFileSync("home.html", "UTF-8");
const replaceVal = (tempVal,orgVal)=>{
  let tempreture = tempVal.replace("{%tempval%}",orgVal.main.temp);
  tempreture = tempreture.replace("{%tempmin%}",orgVal.main.temp_min);
  tempreture = tempreture.replace("{%tempmax%}",orgVal.main.temp_max);
  tempreture = tempreture.replace("{%location%}",orgVal.main.name);
  tempreture = tempreture.replace("{%country%}",orgVal.sys.country);
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
        const realTimeData = arrData.map((val) =>{
          replaceVal(homeFile,val);

        });
        // res.write(realTimeData);
        console.log(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log("connection closed due to errors", err);
        res.end();
      });
  }
});

server.listen(8000, "127.0.0.1");
