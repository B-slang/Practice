const express = require('express');
const app = express();
const axios = require('axios');
const redis = require('redis');
const client = redis.createClient(6379, '127.0.0.1');

const PORT = process.env.PORT || 3000;

(async () => {
    console.log("(((((((((((((((((*)))))))");

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();
    console.log("+++++++++++++++++++++++++++++++++++++");
})()

async function getDataFromRedis() {
    let dataCache = await client.get("Stories")
    if (dataCache) {
        return { message: "Data taken from Redis", result: JSON.parse(dataCache) };
    }
    await client.set("Stories", JSON.stringify({ name: "Fault in Our Stars" }))
    return { message: "Stored in the redis", result: { name: "Fault in Our Stars" } };
}

app.get('/api/search', async (req, res) => {
    try {
        const data = await getDataFromRedis();
        console.log(data)
        return res.status(200).json({ message: data.message, results: data.result });
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})


app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});