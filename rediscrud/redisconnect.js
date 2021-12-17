const redis = require('redis')
const client = redis.createClient()

client.on('connect', function () {
    console.log("Connected with redis")
})

module.exports = client;