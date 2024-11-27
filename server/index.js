let express = require("express");
let app = express();

const port = 3030;

app.listen(port);

app.get("/", (req, res) => {
  res.send("Server is running");
});
