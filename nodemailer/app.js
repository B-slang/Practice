
const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')

const {sendMail } = require('./sentemail')



const app = express()
app.use(express.json())


app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static("views"));

// app.use(express.static('views/index.ejs'))

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine', 'ejs');


app.get('/',(req,res) => {
    res.render('index')
})

app.post('/sendemail',sendMail )

app.listen(5000,() => {
    console.log("App started on Port 5000")
})
