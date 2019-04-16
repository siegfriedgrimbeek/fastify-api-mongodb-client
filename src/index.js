// Import Server
const fastify = require('./server')

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
    fastify.log.info('Documentation available at: http://localhost:3000/documentation/')
    fastify.swagger()
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
