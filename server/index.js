require("dotenv").config();

const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();
const mongoose = require("mongoose");
const LinkModel = require("./models/link.model.js");
const { ObjectId } = require("mongodb");
const randomSuffix = require("./randomSuffix");

app.use(cors());
app.use(express.json());

const shortenedLinkPrefix = "test.com";
const port = 3030;
const users = [];

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("Req answered");
});

app.get("/api/link", async (req, res) => {
  try {
    const allLinks = await LinkModel.find({});
    res.status(200).json({ allLinks });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
  console.log(req.body);
});

app.get("/api/link/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const link = await LinkModel.findById(new ObjectId(id));
    res.status(200).json({ link });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/link", async (req, res) => {
  try {
    let id;
    let unique = false;

    while (!unique) {
      id = randomSuffix(8);
      const shortenedLink = shortenedLinkPrefix + "/" + id;

      const existingLink = await LinkModel.findOne({ shortenedLink });
      if (!existingLink) {
        unique = true;
      }
    }

    const linkData = {
      link: req.body.link,
      shortenedLink: shortenedLinkPrefix + "/" + id,
    };

    const savedLink = await LinkModel.create(linkData);

    res.status(200).json(savedLink);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//login

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = { name: req.body.name, password: hashedPassword };
    users.push(user);
    res.status(201).send();
  } catch (e) {
    console.log("error", e);
    res.status(500).send();
  }
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
