const path = require("path");
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (_req, res) => {
  try {
    res.sendFile(path.join(__dirname, "views", "index.html"));
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});

app.use((_req, res, _next) => {
  try {
    res.sendFile(path.join(__dirname, "views", "notfound.html"));
  } catch (error) {
    res.status(500).send("something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
