const http = require("http");
const serveFile = require("./helper");

const PORT = 8000;

const requestHandler = function (req, res) {
  switch (req.url) {
    case "/":
      serveFile(res, 200, "index.html");
      break;
    default:
      serveFile(res, 404, "notfound.html");
      break;
  }
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
