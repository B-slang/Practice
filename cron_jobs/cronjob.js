const cron = require("node-cron");
const express = require('express')
const app = express()



cron.schedule("* * * * * *", () => {
  console.log("cron running ");
});

app.listen(3000)
// cron.start()