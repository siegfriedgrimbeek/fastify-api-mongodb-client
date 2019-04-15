// Import our Controllers
const serviceController = require('../../controllers/serviceController')

// Import Swagger documentation
const documentation = require('./service-docs.js')

const serviceRoutes = [
  {
    method: 'GET',
    url: '/api/services/:id',
    schema: documentation.getSingleServiceSchema,
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('services')
      const data = await serviceController.getSingleService(req, collection)
      reply.send(data)
    }
  },
  {
    method: 'GET',
    url: '/api/services/car/:id',
    schema: documentation.getCarsServicesSchema,
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('services')
      const data = await serviceController.getCarsServices(req, collection)
      reply.send(data)
    }
  }
]

module.exports = serviceRoutes
