// import fs from "fs";

// // const files = fs.readdirSync("./");
// // console.log(files);

// fs.readdir("./", function (err, files) {
//   if (err) {
//     console.log("Erroe:", err);
//   } else {
//     console.log("Result:", files);
//   }
// });

import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello There");
    res.end();
  }

  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});

server.listen(3001);
