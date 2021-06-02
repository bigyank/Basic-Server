const fs = require("fs");
const path = require("path");

function serveFile(res, resStatus, fileName) {
  fs.readFile(
    path.join(__dirname, "views", fileName),
    function (err, contents) {
      if (err) {
        res.writeHead(500);
        return res.end("Something went wrong");
      }

      res.setHeader("Content-Type", "text/html");
      res.writeHead(resStatus);
      res.end(contents);
    }
  );
}

module.exports = serveFile;
