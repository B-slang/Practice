const express = require('express');
const redis = require('redis');
// added axios as HTTP client
const app = express();
const axios = require('axios');
// const redis = require('redis');
const client = redis.createClient();

// const  = redis.createClient();
// await redisClient.connect()
(async () => {
  
  client.on('error', (err) => console.log('Redis Client Error', err));
  
  await client.connect();
  console.log("+++++++++++++++++++++++++++++++++++++");
})()



// const client = redis.createClient({
//     host: '127.0.0.1',
//     port: 6379
   
// });

// client.on('error', err => {
//     console.log('Error ' + err);
// });













































const PORT = process.env.PORT || 3000;

// added Fake API
const MOCK_API = "https://jsonplaceholder.typicode.com/users/";

//API Call

app.get('/cache/user/:email', async (req, res) => {
  const email = req.params.email;

  try{
    await client.get(email, async (err, response) => {
      console.log(response);
      console.log("________");
      if(response) {
        console.log("User successfully retrieved from cache");
        res.status(200).send(JSON.parse(response));
      } else {
        const response = await axios.get(`${MOCK_API}?email=${email}`);
        const user = response.data;
        await client.setex(email, 600, JSON.stringify(user));
        console.log("User successfully retrieved from the API");
        res.status(200).send(user);
      }
    })
  }catch(err) {
    res.status(500).send({ error: err.message });
  }
})











// app.get('/user/:email', async (req, res) => {
//   const email = req.params.email;

//   try {
//     const response = await axios.get(`${MOCK_API}?email=${email}`);
//     const user = response.data
//     console.log("User successfully retrieved from the API");
//     res.status(200).send(user);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// })


app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});