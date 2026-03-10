import http from "http";
import fs from "fs";
import { error } from "console";
const port = 8081;
const handlerequest = (req, res) => {
  let filename = "";
  switch (req.url) {
    case "/":
      filename = "./index.html";
      break;
    case "/about":
      filename = "./about.html";
      break;
    case "/contact":
      filename = "./contact.html";
      break;
    case "/blog":
      filename = "./blog.html";
      break;
    default:
      filename = "./404.html";
  }
  fs.readFile(filename, (error, result) => {
    if (error) {
      return res.end(error);
    } else {
      return res.end(result);
    }
  });
};
const server = http.createServer(handlerequest);

server.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Server start on " + port);
  }
});
