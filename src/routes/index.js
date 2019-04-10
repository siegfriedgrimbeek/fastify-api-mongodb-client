// Import our Controllers
const carController = require('../controllers/carController')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

const routes = [
  {
    method: 'GET',
    url: '/api/cars',
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('cars')
      const data = await carController.getCars(collection)
      reply.send(data)
    }
  },
  {
    method: 'GET',
    url: '/api/cars/:id',
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('cars')
      const data = await carController.getSingleCar(req, collection)
      reply.send(data)
    }
  },
  {
    method: 'POST',
    url: '/api/cars',
    // schema: documentation.addCarSchema
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('cars')
      const data = await carController.addCar(req, collection)
      reply.send(data)
    }
  },
  {
    method: 'PUT',
    url: '/api/cars/:id',
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('cars')
      const data = await carController.updateCar(req, collection)
      reply.send(data)
    }
  },
  {
    method: 'DELETE',
    url: '/api/cars/:id',
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('cars')
      const data = await carController.deleteCar(req, collection)
      reply.send(data)
    }
  }
]

module.exports = routes
