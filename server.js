const express = require("express");

const app = express();

const port = 4000;

app.get("/", (req, res) => {
  console.log("Home page");
  res.send("HomePage");
});
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
