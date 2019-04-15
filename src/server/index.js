// Require environmental variables
require('dotenv').config()

// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

// Connect to MongoDB
fastify.register(require('fastify-mongodb'), {
  url: process.env.DB_HOST,
  name: process.env.DB_NAME,
  useNewUrlParser: true,
  forceClose: true
})

module.exports = fastify
