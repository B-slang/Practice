const { default: axios } = require('axios')
const express = require('express')
const app = express()
const redis = require('redis')


const client = redis.createClient()


const default_time  =3600

app.get('/', (req,res)=>{
    res.send("redis crud")
})

app.get('/photos', async(req,res)=>{
    const data = await axios.get("https://jsonplaceholder.typicode.com/photos", {params:{albumId}})
    
    client.setEx("photos", default_time, JSON.stringify(data))
    res.json(data)
})
app.get('/photos/:id', async(req,res)=>{
    const data = await axios.get(`https://jsonplaceholder.typicode.com/photos/${req.params.id}`)
    res.json(data)
})


















app.listen(3001, ()=>{
    console.log("server up");
})