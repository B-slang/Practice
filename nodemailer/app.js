const express = require('express')

const app = express();

app.get('/', (req, res)=>{
    res.send("Nodemailer")
})


app.listen(4500)