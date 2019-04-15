// Import our Controllers
const userController = require('../../controllers/userController')

// Import Swagger documentation
const documentation = require('./user-docs.js')

const userRoutes = [
  {
    method: 'GET',
    url: '/api/users',
    schema: documentation.getUsersSchema,
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('users')
      const data = await userController.getUsers(collection)
      reply.send(data)
    }
  },
  {
    method: 'GET',
    url: '/api/users/:id',
    schema: documentation.getSingleUserSchema,
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('users')
      const data = await userController.getSingleUser(req, collection)
      reply.send(data)
    }
  },
  {
    method: 'GET',
    url: '/api/users/cars/:id',
    schema: documentation.getUsersCarsSchema,
    handler: async function (req, reply) {
      const collection = this.mongo.db.collection('cars')
      const data = await userController.getUsersCars(req, collection)
      reply.send(data)
    }
  }
]

module.exports = userRoutes
