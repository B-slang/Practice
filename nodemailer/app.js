var nodemailer = require('nodemailer');
const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs')

const {sendMail } = require('./sentemail')



const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views/index.ejs'))
app.use(bodyParser.json())

app.set('view engine', 'ejs');


app.get('/',(req,res) => {
    res.sendFile(__dirname + 'views/index.ejs')
})

app.post('/sendemail',sendMail )

app.listen(5000,() => {
    console.log("App started on Port 5000")
})
