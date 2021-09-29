const redis = require('redis')

const objConn = { host: '167.71.35.68', pot: 6379}

const client = redis.createClient(objConn)

module.exports = client