const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
const port = 3030;

app.listen(port, console.log("server is running"));

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("Req answered");
});
