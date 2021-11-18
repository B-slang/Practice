const express = require('express')

const app = express()

const port = 4001

app.get('/time_zone', (req, res, next)=>{
    res.send("TimeZone")
})


app.listen(port, ()=>{
    console.log("running server")
})