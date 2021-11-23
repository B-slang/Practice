const express = require("express");
const timeroutes = require("./Express/timeroutes")
require('./CRUD/config')

const validName =require('./throw_error_middlware/validName')

const app = express();

const port = 4000;



app.use(express.json())

app.use(validName)

app.post("/validName", (req, res) => {
  // console.log("Home page");
  // res.send("HomePage");
});
//


app.get("/", (req, res) => {
  console.log("Home page");
  res.send("HomePage");
});
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});


