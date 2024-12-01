require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

const port = 3030;

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("Req answered");
});

app.post("/api/link", (req, res) => {
  res.send(req.body);
});

mongoose
  .connect(process.env.ATLASURI)
  .then(() => {
    console.log("connected to the db");
    app.listen(port, console.log("Server is running"));
  })
  .catch((error) => {
    console.log("not connected to db");
  });
