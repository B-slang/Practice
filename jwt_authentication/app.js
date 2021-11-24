const express = require('express')

const app = express()
const port = 3005
app.use(express.json())
app.get('/', (req,res)=>{
    res.send ("JWT AUTHENTICATION")
})


app.listen(3005,()=>{
    console.log(`listening ${port}`)
})