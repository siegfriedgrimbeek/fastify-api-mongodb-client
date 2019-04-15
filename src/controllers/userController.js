// External Dependancies
const boom = require('boom')
const ObjectId = require("bson").ObjectId

// Get all users
exports.getUsers = async (usersCollection) => {
  try {
    const users = await usersCollection.find()
    return users.toArray()
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single user by ID
exports.getSingleUser = async (req, usersCollection) => {
  try {
    const id = req.params.id
    const user = await usersCollection.findOne({_id: new ObjectId(id)})
    return user
  } catch (err) {
    throw boom.boomify(err)
  }
}

// Get single user's cars
exports.getUsersCars = async (req, carsCollection) => {
  try {
    const id = req.params.id
    const cars = await carsCollection.find({"owner_id": new ObjectId(id)})
    return cars.toArray()
  } catch (err) {
    throw boom.boomify(err)
  }
}
