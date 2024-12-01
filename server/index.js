require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
const port = 3030;


app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("Req answered");
});

console.log();

mongoose
  .connect(process.env.ATLASURI)
  .then(() => {
    console.log("connected to the db");
    app.listen(port, console.log("Server is running"));
  })
  .catch((error) => {
    console.log("not connected to db");
  });

// original URL
// shortened URL
// ID
// creation date and Time
// experation date

// analytic:
// click count
// last accessed

// status (live, deleted, expired)
