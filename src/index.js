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

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Import Routes
const routes = require('./routes')

// Loop over each route
routes.forEach((route, index) => {
  fastify.route(route)
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(process.env.PORT)
    fastify.swagger()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
