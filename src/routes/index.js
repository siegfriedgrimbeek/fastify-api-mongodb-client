// Import external dependancies
const flattenDeep = require('lodash').flattenDeep

// Import Routes
const carRoutes = require('./car')
const userRoutes = require('./user')
const serviceRoutes = require('./service')

const routes = [
  {
    method: 'GET',
    url: '/',
    handler: async function (req, reply) {
      reply.send({ hello: 'world' })
    }
  },
  carRoutes,
  userRoutes,
  serviceRoutes
]

module.exports = flattenDeep(routes)
